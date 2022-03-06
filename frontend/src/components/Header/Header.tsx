/* eslint-disable no-return-assign */
/* eslint-disable consistent-return */
/* eslint-disable @typescript-eslint/no-empty-function */
import { useEffect, useState } from "react";
import { BiWorld } from "react-icons/bi";

import { Box, Flex, HStack } from "@chakra-ui/react";

import { ButtonCustom } from "../Button";
import { ModalRegister } from "../Modal";

export function Header() {
  const [isFixed, setIsFixed] = useState(false);

  useEffect(() => {
    if (window.outerWidth <= 768) {
      setIsFixed(true);
      return;
    }

    window.addEventListener("scroll", (event) => {
      if (window.pageYOffset > 50) {
        setIsFixed(true);
      } else {
        setIsFixed(false);
      }
    });

    return () => {
      window.removeEventListener("scroll", () => {});
    };
  }, []);
  return (
    <Box
      position="fixed"
      width="100%"
      zIndex={10}
      px={4}
      top="0"
      backgroundColor={`${isFixed && "rgba(0, 0, 0, 0.65)"}`}
    >
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
          <ButtonCustom
            variant="ghost"
            border="1px solid"
            borderColor="gray.600"
            w={["7rem", "8rem"]}
            _hover={{ background: "gray.600" }}
          >
            Fazer login
          </ButtonCustom>
          <ModalRegister />
        </HStack>
      </Flex>
    </Box>
  );
}
