/* eslint-disable react/require-default-props */
/* eslint-disable react/jsx-props-no-spreading */
import { useState } from "react";
import { AiOutlineEyeInvisible, AiOutlineEye } from "react-icons/ai";

import {
  InputGroup,
  Input,
  InputLeftElement,
  InputRightElement,
  InputProps,
  Text,
  Stack,
} from "@chakra-ui/react";

type Props = InputProps & {
  labelName?: string;
  iconLeft: React.ReactNode;
  iconRight?: React.ReactNode;
};

export function InputCustom({
  iconLeft,
  iconRight,
  labelName,
  ...props
}: Props): JSX.Element {
  const [type, setType] = useState(props.type || "text");

  return (
    <Stack alignItems="flex-start">
      {labelName && (
        <Text fontSize="sm" fontWeight="bold">
          <label htmlFor={props.id}>{labelName}</label>
        </Text>
      )}
      <InputGroup>
        <InputLeftElement pointerEvents="none">{iconLeft}</InputLeftElement>
        <Input
          {...props}
          type={type}
          borderRadius="0"
          border="none"
          background="#252e41"
          _hover={{ background: "#1e2636" }}
          fontSize="sm"
          fontWeight="bold"
        />
        {iconRight && props.type !== "password" && (
          <InputRightElement pointerEvents="none">{iconLeft}</InputRightElement>
        )}
        {props.type === "password" && (
          <InputRightElement
            cursor="pointer"
            onClick={() => {
              const newType = type === "password" ? "text" : "password";
              setType(newType);
            }}
          >
            {type === "text" && <AiOutlineEyeInvisible />}
            {type === "password" && <AiOutlineEye />}
          </InputRightElement>
        )}
      </InputGroup>
    </Stack>
  );
}
