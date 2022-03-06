import { Container, Text } from "@chakra-ui/react";
import type { NextPage } from "next";

import { useAuth } from "@/hooks/useAuth";

import { Header } from "../components";

const Home: NextPage = () => {
  const { user } = useAuth();
  return (
    <>
      <Header />

      <Container marginTop="7rem">
        <Text fontSize="xl">Ola, {user && user.name}</Text>
        <Text fontSize="md">Seu e-mail é {user && user.email}</Text>
      </Container>
    </>
  );
};

export default Home;
