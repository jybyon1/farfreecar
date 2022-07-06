import {
  Box,
  Button,
  forwardRef,
  HStack,
  Icon,
  Image,
  Input,
  InputGroup,
  InputLeftElement,
  Select,
  Text,
  VStack,
} from "@chakra-ui/react";
import farfreecar from "../../assets/images/farfreecar.png";
import { FiLink } from "react-icons/fi";
import "react-datepicker/dist/react-datepicker.css";
import { useState } from "react";
import DatePicker from "react-datepicker";
import { ko } from "date-fns/esm/locale";
import { BsCalendarCheck } from "react-icons/bs";
import { BiTime } from "react-icons/bi";
import { Header } from "../../component/layout/Header";
import { SearchBox } from "../../page/searchBox/SearchBox";
import { useForm } from "react-hook-form";

export default function Main() {
  const handleRegister = (value: any) => {
    console.log(value);
  };
  const { register, handleSubmit } = useForm();

  const [goDate, setGoDate] = useState<Date | null>(null);
  const [goHour, setGoHour] = useState<Date | null>(null);
  const [startArea, setStartArea] = useState<string>("");
  const [endArea, setEndArea] = useState<string>("");

  const [data, setData] = useState("");
  const [showBox, setShowBox] = useState(false);

  const CustomDateInput = forwardRef(({ value, onClick, placeholder }, ref) => (
    <InputGroup size="md" onClick={onClick} ref={ref}>
      <InputLeftElement
        pointerEvents="none"
        children={<Icon as={BsCalendarCheck} />}
      />
      <Input type="text" value={value} placeholder={placeholder} readOnly />
    </InputGroup>
  ));
  const CustomHourInput = forwardRef(({ value, onClick, placeholder }, ref) => (
    <InputGroup size="md" onClick={onClick} ref={ref}>
      <InputLeftElement pointerEvents="none" children={<Icon as={BiTime} />} />
      <Input type="text" value={value} placeholder={placeholder} readOnly />
    </InputGroup>
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
        <Box
          bg="white"
          borderRadius="20px"
          w="1000px"
          h="150px"
          m="auto"
          boxShadow="3px 3px 3px 3px rgb(0 0 0 / 5%)"
        >
          <Box borderBottom="1px solid" borderBottomColor="gray.200" h="40px" />
          <form
            onSubmit={handleSubmit((data) => setData(JSON.stringify(data)))}
          >
            <Box display="flex" pt="0.5%" pr="5%">
              <HStack w="100%">
                <VStack w="300px">
                  <Text fontSize="35px">ICN</Text>
                  <Select
                    w="150px"
                    textAlign="center"
                    size="sm"
                    placeholder="출발 지역"
                    borderColor="rgb(0 0 0 / 0%) !important"
                    {...register("start_area", {
                      required: true,
                      onChange: (e) => {
                        setStartArea(e.target.value);
                      },
                    })}
                    value={startArea}
                  >
                    <option value="서울">서울</option>
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
                    {...register("end_area", {
                      required: true,
                      onChange: (e) => {
                        setEndArea(e.target.value);
                      },
                    })}
                    value={startArea}
                  >
                    <option value="부산">부산</option>
                    <option value="option2">Option 2</option>
                    <option value="option3">Option 3</option>
                  </Select>
                </VStack>
                <Box w="300px">
                  <DatePicker
                    id="go_date"
                    placeholderText="가는 날"
                    selected={goDate}
                    onChange={(date: Date) => setGoDate(date)}
                    locale={ko}
                    dateFormat="yyyy년 MM월 dd일"
                    minDate={new Date()}
                    customInput={<CustomDateInput />}
                  />
                </Box>
                <Box w="300px">
                  <DatePicker
                    id="go_hour"
                    placeholderText="가는 시간"
                    selected={goHour}
                    onChange={(date: Date) => setGoHour(date)}
                    locale={ko}
                    showTimeSelect
                    showTimeSelectOnly
                    timeFormat="HH:mm"
                    dateFormat="h:mm aa"
                    timeIntervals={10}
                    timeCaption="time"
                    customInput={<CustomHourInput />}
                  />
                </Box>
                <Button
                  size="lg"
                  color="white"
                  bg="#FBBC05"
                  fontSize="20px"
                  w="150px"
                  onClick={() => {
                    if (goDate && goHour) {
                      setShowBox(true);
                    }
                    const info = {
                      start_area: startArea,
                      end_area: endArea,
                      goDate: goDate,
                      goHour: goHour,
                    };
                    handleRegister(info);
                  }}
                >
                  Search
                </Button>
              </HStack>
            </Box>
          </form>
        </Box>
        {showBox && <SearchBox />}
      </Box>
    </>
  );
}
