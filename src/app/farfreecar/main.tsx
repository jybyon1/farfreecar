import {
  Box,
  Button,
  Icon,
  Image,
  Select,
  Text,
  VStack,
} from "@chakra-ui/react";
import farfreecar from "../../assets/images/farfreecar.png";
import { FiLink } from "react-icons/fi";
import Header from "../../component/layout/Header";

export default function Main() {
  return (
    <>
      <Box h="100vh">
        <Header />
        <Box ml="37%" display="flex" pos="relative" pt="5%">
          <Image src={farfreecar} width="10%" ml="35%" pos="absolute" />
          <Box mt="2%" display="flex">
            <Text fontSize="100px" color="#4285F4" fontFamily="Berlin Sans FB">
              Far
            </Text>
            <Text fontSize="100px" color="#EA3B30" fontFamily="Berlin Sans FB">
              Free
            </Text>
            <Text fontSize="100px" color="#34A853" fontFamily="Berlin Sans FB">
              Car
            </Text>
          </Box>
        </Box>
        <Box bg="white" borderRadius="35px" w="1100px" h="180px" m="auto">
          <Box
            borderBottom="1px solid"
            borderBottomColor="gray.200"
            h="60px"
          ></Box>
          <Box display="flex" p="1%">
            <VStack>
              <Text fontSize="35px">ICN</Text>
              <Select
                size="sm"
                placeholder="출발 지역"
                borderColor="rgb(0 0 0 / 0%) !important"
              >
                <option value="option1">서울</option>
                <option value="option2">Option 2</option>
                <option value="option3">Option 3</option>
              </Select>
            </VStack>
            <Box>
              <Icon
                as={FiLink}
                fontSize="30px"
                mt="100%"
                borderRadius="20px"
                color="blue.300"
              />
            </Box>
            <VStack>
              <Text fontSize="35px">PUS</Text>
              <Select
                size="sm"
                placeholder="도착 지역"
                borderColor="rgb(0 0 0 / 0%) !important"
              >
                <option value="option1">부산</option>
                <option value="option2">Option 2</option>
                <option value="option3">Option 3</option>
              </Select>
            </VStack>
            <Button
              size="lg"
              color="white"
              bg="#FBBC05"
              fontFamily="Berlin Sans FB"
              fontSize="25px"
            >
              Search
            </Button>
          </Box>
        </Box>
      </Box>
    </>
  );
}
