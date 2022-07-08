import { Box, HStack, Icon, Text } from "@chakra-ui/react";

import React, { useState } from "react";
import { IconType } from "react-icons";
import { NewInterface } from "../../api/ApiInterface";
import { Airplain } from "../../api/commonInterface";

interface ISearch {
  title: string;
  icon: IconType;
  data?: Airplain;
}

export const SearchBoxCom = (props: ISearch): JSX.Element => {
  const getAirPlaneAPI = () => {
    const service = NewInterface();
    service.GetAirplane().then((res) => {
      console.log("res", res);
      //setAirInfo({ ...res });
    });
  };
  useState(() => {
    getAirPlaneAPI();
  });

  return (
    <Box p="5%">
      <Text fontSize="18px">{props.title}</Text>
      <Box
        borderBottom="1px solid"
        borderBottomColor="gray.200"
        m="2% 0% 2% 0%"
      />
      <Box ml="5%" mt="4%">
        <HStack spacing={20}>
          <Icon as={props.icon} fontSize="25px" color="gray.400" />
          <Text>03 : 00 ~ 04 : 40</Text>
          <Text>121,000원</Text>
        </HStack>
      </Box>
    </Box>
  );
};
