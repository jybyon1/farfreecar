import { Text, TextProps } from "@chakra-ui/react";
import React, { ReactNode } from "react";

type ErrorTextProps = {
  children: ReactNode;
};

export const ErrorText = ({
  children,
  ...rest
}: ErrorTextProps & TextProps) => {
  return (
    <Text mt="10px" color="red.600" fontSize="12px" {...rest}>
      {children}
    </Text>
  );
};
