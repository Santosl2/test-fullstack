/* eslint-disable import/no-unresolved */
/* eslint-disable react/jsx-no-constructed-context-values */
import {
  createContext,
  ReactNode,
  useCallback,
  useEffect,
  useState,
} from "react";

import { useToast } from "@chakra-ui/react";
import { setCookie, parseCookies, destroyCookie } from "nookies";

import { User } from "@/interfaces/User";
import { api } from "@/services/api";

type SignInCredentials = {
  email: string;
  password: string;
};

type AuthContextData = {
  signIn: (credentials: SignInCredentials) => Promise<void>;
  user: User;
  isAuthenticated: boolean;
};

type FormResponse = {
  status: string;
  message: string;
  user: User;
  token: string;
};

export const AuthContext = createContext({} as AuthContextData);

export function AuthProvider({ children }: { children: ReactNode }) {
  const [user, setUser] = useState<User>({} as User);
  const isAuthenticated = !!user;
  const toast = useToast();

  useEffect(() => {
    const { "ecards.token": token } = parseCookies();

    if (token) {
      api
        .get<FormResponse>("/users")
        .then((response) => {
          setUser(response.data.user);
        })
        .catch(() => {
          destroyCookie(undefined, "ecards.token");
        });
    }
  }, []);

  const createCookie = useCallback((token: string) => {
    setCookie(undefined, "ecards.token", token, {
      maxAge: 60 * 60 * 24 * 30, // 30 days
      path: "/",
    });

    api.defaults.headers.common.authorization = `Bearer ${token}`;
  }, []);

  const signIn = useCallback(
    async ({ email, password }: SignInCredentials) => {
      try {
        const response = await api.post<FormResponse>("sessions", {
          email,
          password,
        });

        const { data: responseData } = response;

        if (responseData.status === "error") {
          toast({
            title: "Oops, tivemos um pequeno error",
            description: responseData.message,
            status: "error",
            duration: 9000,
            variant: "left-accent",
            position: "bottom-right",
            isClosable: true,
          });

          return;
        }

        const { name } = responseData.user;
        toast({
          title: "Sucesso!",
          description: `Seja bem-vindo(a)  ${name}`,
          status: "success",
          duration: 9000,
          variant: "left-accent",
          position: "bottom-right",
          isClosable: true,
        });

        createCookie(response.data.token);

        setUser({
          email,
          name,
        });
      } catch {
        toast({
          title: "Oops, tivemos um pequeno error",
          description: "Erro interno no servidor",
          status: "error",
          duration: 9000,
          variant: "left-accent",
          position: "bottom-right",
          isClosable: true,
        });
      }
    },
    [createCookie, toast]
  );

  return (
    <AuthContext.Provider value={{ signIn, isAuthenticated, user }}>
      {children}
    </AuthContext.Provider>
  );
}
