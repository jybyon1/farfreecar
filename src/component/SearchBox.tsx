import {
  Box,
  Grid,
  GridItem,
  HStack,
  Icon,
  Text,
  VStack,
} from "@chakra-ui/react";
import React from "react";
import { ImAirplane } from "react-icons/im";

export const SearchBox = (): JSX.Element => {
  return (
    <Box bg="white" w="1500px" m="auto" minH="400px" mt="2%">
      <Grid templateColumns="repeat(3, 1fr)">
        <GridItem
          w="100%"
          h="400px"
          borderWidth="0px 2px 0px 0px"
          borderStyle="dashed"
        >
          <Box p="5%">
            <Text fontSize="18px">항공권</Text>
            <Box
              borderBottom="1px solid"
              borderBottomColor="gray.200"
              m="2% 0% 2% 0%"
            />
            <Box ml="8%">
              <HStack spacing={20}>
                <Icon as={ImAirplane} color="gray.400" />
                <Text>03 : 00 ~ 04 : 40</Text>
                <Text>121,000원</Text>
              </HStack>
            </Box>
          </Box>
        </GridItem>
        <GridItem
          w="100%"
          h="400px"
          borderWidth="0px 2px 0px 0px"
          borderStyle="dashed"
        >
          <Box p="5%">
            <Text fontSize="18px">항공권</Text>
            <Box
              borderBottom="1px solid"
              borderBottomColor="gray.200"
              m="2% 0% 2% 0%"
            />
            <Box ml="8%">
              <HStack spacing={20}>
                <Icon as={ImAirplane} color="gray.400" />
                <Text>03 : 00 ~ 04 : 40</Text>
                <Text>121,000원</Text>
              </HStack>
            </Box>
          </Box>
        </GridItem>
        <GridItem w="100%" h="400px">
          <Box p="5%">
            <Text fontSize="18px">항공권</Text>
            <Box
              borderBottom="1px solid"
              borderBottomColor="gray.200"
              m="2% 0% 2% 0%"
            />
            <Box ml="8%">
              <HStack spacing={20}>
                <Icon as={ImAirplane} color="gray.400" />
                <Text>03 : 00 ~ 04 : 40</Text>
                <Text>121,000원</Text>
              </HStack>
            </Box>
          </Box>
        </GridItem>
      </Grid>
    </Box>
  );
};
