import { AiOutlineUser } from "react-icons/ai";
import { FaDiscord } from "react-icons/fa";
import { FcGoogle } from "react-icons/fc";
import { SiTwitch } from "react-icons/si";

import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  useDisclosure,
  Text,
  Stack,
  HStack,
  Divider,
} from "@chakra-ui/react";

import { ButtonCustom } from "../../Button";
import { InputCustom } from "../../Input";

export function ModalRegister(): JSX.Element {
  const { isOpen, onClose, onOpen } = useDisclosure();

  return (
    <>
      <ButtonCustom
        variant="solid"
        color="black"
        bg="white"
        _hover={{ background: "gray.400" }}
        onClick={onOpen}
      >
        Comece agora
      </ButtonCustom>

      <Modal
        isOpen={isOpen}
        onClose={onClose}
        size="lg"
        motionPreset="slideInBottom"
      >
        <ModalOverlay />
        <ModalContent background="gray.800" borderRadius="0">
          <ModalHeader borderBottom="1px solid" borderColor="gray.500">
            Criar conta
          </ModalHeader>
          <ModalCloseButton
            background="white"
            borderRadius="0"
            color="gray.900"
            _hover={{ background: "gray.300" }}
            marginTop="0.3rem"
            outline="0"
          />
          <ModalBody marginTop="1rem" textAlign="center">
            <Text fontSize="sm" marginBottom="3rem">
              Já possui uma conta? <strong>Entrar agora</strong>
            </Text>

            <Stack width="100%" gap="5px" mb="1rem">
              <ButtonCustom
                leftIcon={<FcGoogle />}
                background="gray.100"
                color="gray.900"
                _hover={{ background: "gray.300" }}
              >
                Cadastre-se com Google
              </ButtonCustom>

              <ButtonCustom
                leftIcon={<FaDiscord />}
                background="#4a5c82"
                _hover={{ background: "#3d4d6e" }}
              >
                Cadastre-se com Discord
              </ButtonCustom>

              <ButtonCustom
                leftIcon={<SiTwitch />}
                background="#252e41"
                _hover={{ background: "#202738" }}
              >
                Cadastre-se com Twitch
              </ButtonCustom>
            </Stack>

            <HStack gap="1rem">
              <Divider />
              <Text fontSize="sm">Ou</Text>
              <Divider marginLeft="1rem" />
            </HStack>

            <Stack
              as="form"
              autoComplete="off"
              width="100%"
              gap="5px"
              mb="2.2rem"
              mt="1rem"
            >
              <InputCustom
                labelName="Nome do Usuário"
                id="username"
                iconLeft={<AiOutlineUser />}
                placeholder="Digite o seu nome de usuário"
              />
              <InputCustom
                labelName="E-mail"
                id="email"
                type="email"
                iconLeft={<AiOutlineUser />}
                placeholder="Digite o seu nome de e-mail"
              />
              <InputCustom
                labelName="Senha"
                id="password"
                type="password"
                iconLeft={<AiOutlineUser />}
                placeholder="Digite a sua senha"
              />
            </Stack>

            <ButtonCustom
              colorScheme="blue"
              mr={3}
              onClick={onClose}
              background="white"
              _hover={{ background: "gray.300" }}
              rightIcon={<FaDiscord />}
              isFullWidth
            >
              Comece agora
            </ButtonCustom>
          </ModalBody>

          <ModalFooter />
        </ModalContent>
      </Modal>
    </>
  );
}
