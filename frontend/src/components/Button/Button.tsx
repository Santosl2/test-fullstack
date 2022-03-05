/* eslint-disable react/jsx-props-no-spreading */

import { Button, ButtonProps } from "@chakra-ui/react";

type Props = ButtonProps & {
  children: React.ReactNode;
};

export function ButtonCustom({ children, ...props }: Props): JSX.Element {
  return (
    <Button {...props} borderRadius="none">
      {children}
    </Button>
  );
}
