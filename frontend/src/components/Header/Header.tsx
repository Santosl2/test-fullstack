/* eslint-disable no-return-assign */
/* eslint-disable consistent-return */
/* eslint-disable @typescript-eslint/no-empty-function */
import { BiWorld } from "react-icons/bi";

import { Box, Flex, HStack } from "@chakra-ui/react";

import { ModalLogin, ModalRegister } from "../Modal";

export function Header() {
  return (
    <Box position="fixed" width="100%" zIndex={10} px={4} top="0">
      <Flex
        h={16}
        alignItems="center"
        justifyContent={{ base: "space-between", md: "space-around" }}
      >
        <HStack
          onClick={() => (window.location.href = "/")}
          spacing={8}
          alignItems="center"
          color="white"
          cursor="pointer"
        >
          <Box fontFamily="Lato" fontSize={["md", "sm", "lg", "xl"]}>
            eCards
          </Box>
        </HStack>

        <HStack as="nav" spacing={4} display="flex" color="white">
          <BiWorld size={16} />
          <ModalLogin />
          <ModalRegister />
        </HStack>
      </Flex>
    </Box>
  );
}
