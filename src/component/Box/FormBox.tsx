import {
  Box,
  Button,
  forwardRef,
  HStack,
  Icon,
  Input,
  InputGroup,
  InputLeftElement,
  Select,
  Text,
  VStack,
} from "@chakra-ui/react";
import React, { useEffect, useState } from "react";
import { FiLink } from "react-icons/fi";
import "react-datepicker/dist/react-datepicker.css";
import DatePicker from "react-datepicker";
import { ko } from "date-fns/esm/locale";
import { BsCalendarCheck } from "react-icons/bs";
import { BiTime } from "react-icons/bi";
import { useForm } from "react-hook-form";
import { SearchBox } from "../../page/searchBox/SearchBox";
import { NewInterface } from "../../api/ApiInterface";
import { IAirport, IForm } from "../../api/commonInterface";
import moment from "moment";
import Utils from "../../service/util";

export const FormBox = () => {
  interface IInputField {
    goDate: Date;
    goHour: Date;
    startArea: string;
    endArea: string;
  }
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<IInputField>();

  const [goDate, setGoDate] = useState<Date | null>(null);
  const [goHour, setGoHour] = useState<Date | null>(null);
  const [startArea, setStartArea] = useState<string>("");
  const [endArea, setEndArea] = useState<string>("");
  const [airportNm, setAirportNm] = useState<IAirport[] | undefined>(undefined);

  const [form, setForm] = useState<IForm>({
    depAirportId: "",
    arrAirportId: "",
    depPlandTime: "",
  });

  const [showBox, setShowBox] = useState<boolean>(false);

  const GetAirportId = () => {
    const service = NewInterface();
    service.GetAirportId().then((res) => {
      console.log("res11", res);
      if (res) {
        setAirportNm(res);
      }
    });
  };

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
  const onSubmit = (data: any) => console.log(data);
  //form ?????? ????????? ????????????
  useEffect(() => {
    GetAirportId();
  }, [startArea, endArea]);

  return (
    <>
      <Box
        bg="white"
        borderRadius="20px"
        w="1000px"
        h="150px"
        m="auto"
        boxShadow="3px 3px 3px 3px rgb(0 0 0 / 5%)"
      >
        <Box borderBottom="1px solid" borderBottomColor="gray.200" h="40px" />
        <form onSubmit={handleSubmit(onSubmit)}>
          <Box display="flex" pt="0.5%" pr="5%">
            <HStack w="100%">
              <VStack w="300px">
                {startArea ? (
                  <Text fontSize="35px">{Utils.printairportNm(startArea)}</Text>
                ) : (
                  <Text fontSize="35px">??????</Text>
                )}
                <Select
                  w="150px"
                  textAlign="center"
                  size="sm"
                  placeholder="?????? ??????"
                  borderColor="rgb(0 0 0 / 0%) !important"
                  {...register("startArea", {
                    required: true,
                    onChange: (e) => {
                      setStartArea(e.target.value);
                    },
                  })}
                  value={startArea}
                >
                  {airportNm &&
                    airportNm.map((data) => (
                      <option value={data.airportId} key={data.airportNm}>
                        {data.airportNm}
                      </option>
                    ))}
                </Select>
                <Box>
                  {errors.startArea?.type === "required" && (
                    <Text color="red" fontSize="12px">
                      ??????????????? ???????????????
                    </Text>
                  )}
                </Box>
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
                {endArea ? (
                  <Text fontSize="35px">{Utils.printairportNm(endArea)}</Text>
                ) : (
                  <Text fontSize="35px">??????</Text>
                )}
                <Select
                  w="150px"
                  textAlign="center"
                  size="sm"
                  placeholder="?????? ??????"
                  borderColor="rgb(0 0 0 / 0%) !important"
                  {...register("endArea", {
                    required: true,
                    onChange: (e) => {
                      setEndArea(e.target.value);
                    },
                  })}
                  value={endArea}
                >
                  {airportNm &&
                    airportNm.map((data) => (
                      <option value={data.airportId} key={data.airportNm}>
                        {data.airportNm}
                      </option>
                    ))}
                </Select>
                <Box>
                  {errors.endArea?.type === "required" && (
                    <Text color="red" fontSize="12px">
                      ??????????????? ???????????????
                    </Text>
                  )}
                </Box>
              </VStack>
              <Box w="300px">
                <DatePicker
                  id="go_date"
                  placeholderText="?????? ???"
                  selected={goDate}
                  onChange={(date: Date) => {
                    setGoDate(date);
                    setForm({
                      ...form,
                      depPlandTime: moment(date).format("YYYYMMDD"),
                    });
                  }}
                  locale={ko}
                  dateFormat="yyyy??? MM??? dd???"
                  minDate={new Date()}
                  customInput={<CustomDateInput />}
                />
              </Box>
              <Box w="300px">
                <DatePicker
                  id="go_hour"
                  placeholderText="?????? ??????"
                  selected={goHour}
                  onChange={(date: Date) => setGoHour(date)}
                  locale={ko}
                  showTimeSelect
                  showTimeSelectOnly
                  timeFormat="HH:mm"
                  timeIntervals={10}
                  timeCaption="time"
                  dateFormat="h:mm aa"
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
                  if (startArea !== "" && endArea !== "" && goDate && goHour) {
                    setShowBox(true);
                  }
                }}
                type="submit"
              >
                Search
              </Button>
            </HStack>
          </Box>
        </form>
      </Box>
      {showBox && goDate && (
        <SearchBox
          arrAirportId={startArea}
          depAirportId={endArea}
          depPlandTime={form.depPlandTime}
        />
      )}
      {console.log(
        "resssssss:",
        startArea,
        endArea,
        goDate,
        goHour,
        form.depPlandTime
      )}
    </>
  );
};
