import { Box, Grid, GridItem } from "@chakra-ui/react";
import React, { useEffect, useState } from "react";
import { SearchBoxCom } from "../../component/Box/searchBoxcom";
import { ImAirplane } from "react-icons/im";
import { IoMdTrain } from "react-icons/io";
import { MdDirectionsBus } from "react-icons/md";
//import PerfectScrollbar from "react-perfect-scrollbar";

export const SearchBox = (): JSX.Element => {
  /*
  const [scrollH, setScrollH] = useState<PerfectScrollbar | null>();
  useEffect(() => {
    if (scrollH) {
      scrollH.updateScroll();
    }
  }, [scrollH]);
  */
  return (
    <Box bg="white" w="1500px" m="auto" minH="400px" mt="2%">
      {/* <PerfectScrollbar
        ref={(ref) => {
          setScrollH(ref);
        }}
      >*/}
      <Grid templateColumns="repeat(3, 1fr)">
        <GridItem
          w="100%"
          h="400px"
          borderWidth="0px 2px 0px 0px"
          borderStyle="dashed"
        >
          <SearchBoxCom title="항공권" icon={ImAirplane} />
        </GridItem>
        <GridItem
          w="100%"
          h="400px"
          borderWidth="0px 2px 0px 0px"
          borderStyle="dashed"
        >
          <SearchBoxCom title="KTX" icon={IoMdTrain} />
        </GridItem>
        <GridItem w="100%" h="400px">
          <SearchBoxCom title="버스" icon={MdDirectionsBus} />
        </GridItem>
      </Grid>
      {/* </PerfectScrollbar> */}
    </Box>
  );
};
