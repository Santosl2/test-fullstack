import { Container, Text } from "@chakra-ui/react";
import type { NextPage } from "next";

import { useAuth } from "@/hooks/useAuth";

import { Header } from "../components";

const Home: NextPage = () => {
  const { user, isAuthenticated } = useAuth();
  return (
    <>
      <Header />

      <Container marginTop="7rem">
        {isAuthenticated && (
          <>
            <Text fontSize="xl">Ola, {user.name}</Text>
            <Text fontSize="md">Seu e-mail é {user.email}</Text>
          </>
        )}
        {!isAuthenticated && <Text>Logue-se para visualizar..</Text>}
      </Container>
    </>
  );
};

export default Home;
