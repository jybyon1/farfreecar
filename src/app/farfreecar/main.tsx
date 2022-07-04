import {
  Box,
  Button,
  forwardRef,
  HStack,
  Icon,
  Image,
  Select,
  Text,
  VStack,
} from "@chakra-ui/react";
import farfreecar from "../../assets/images/farfreecar.png";
import { FiLink } from "react-icons/fi";
import Header from "../../component/layout/Header";
import "react-datepicker/dist/react-datepicker.css";
import { useState } from "react";
import DatePicker from "react-datepicker";
import { ko } from "date-fns/esm/locale";
import { BsCalendarCheck } from "react-icons/bs";

export default function Main() {
  const [goDate, setGoDate] = useState(new Date() || null);
  const CustomInput = forwardRef(({ value, onClick }, ref) => (
    <Box
      onClick={onClick}
      ref={ref}
      bg="gray.100"
      borderRadius="5px"
      w="200px"
      h="35px"
      p="6px"
      display="flex"
    >
      <Icon as={BsCalendarCheck} m="2% 4% 2% 2%" />
      <Text>{value}</Text>
    </Box>
  ));
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
          <Box borderBottom="1px solid" borderBottomColor="gray.200" h="50px" />
          <Box display="flex" p="1.5%" pr="5%">
            <HStack w="100%">
              <VStack w="300px">
                <Text fontSize="35px">ICN</Text>
                <Select
                  w="150px"
                  textAlign="center"
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
                  borderRadius="20px"
                  color="blue.300"
                />
              </Box>
              <VStack w="300px">
                <Text fontSize="35px">PUS</Text>
                <Select
                  w="150px"
                  textAlign="center"
                  size="sm"
                  placeholder="도착 지역"
                  borderColor="rgb(0 0 0 / 0%) !important"
                >
                  <option value="option1">부산</option>
                  <option value="option2">Option 2</option>
                  <option value="option3">Option 3</option>
                </Select>
              </VStack>
              <Box w="300px">
                <DatePicker
                  placeholderText="가는날"
                  selected={goDate}
                  onChange={(date: Date) => setGoDate(date)}
                  locale={ko}
                  dateFormat="yyyy년 MM월 dd일"
                  minDate={new Date()}
                  customInput={<CustomInput />}
                />
              </Box>
              <Box w="300px">
                <DatePicker
                  placeholderText="가는시간"
                  selected={goDate}
                  onChange={(date: Date) => setGoDate(date)}
                  locale={ko}
                  showTimeSelect
                  showTimeSelectOnly
                  timeFormat="HH:mm"
                  dateFormat="h:mm aa"
                  timeIntervals={10}
                  timeCaption="time"
                  customInput={<CustomInput />}
                />
              </Box>
              <Button
                size="lg"
                color="white"
                bg="#FBBC05"
                fontSize="20px"
                w="150px"
              >
                Search
              </Button>
            </HStack>
          </Box>
        </Box>
      </Box>
    </>
  );
}
