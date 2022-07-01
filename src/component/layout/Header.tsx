import { Box, HStack, Icon, Text } from "@chakra-ui/react";
import React from "react";
import { BsGrid3X3GapFill } from "react-icons/bs";

export default function Header() {
  return (
    <>
      <Box pt="1%" ml="89%">
        <HStack spacing="20px">
          <Text color="gray.500">마이페이지</Text>
          <Text color="gray.500">로그인</Text>
          <Icon as={BsGrid3X3GapFill} color="gray.500" fontSize="20px" />
        </HStack>
      </Box>
    </>
  );
}
