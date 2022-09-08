/*eslint-disable*/
// chakra imports
import {
  Box, useColorModeValue
} from "@chakra-ui/react";
import React from "react";
import SidebarContent from "./SidebarContent";

// FUNCTIONS

function Sidebar(props) {
  // to check for active links and opened collapses
  const mainPanel = React.useRef();
  let variantChange = "0.2s linear";

  const { logoText, routes, sidebarVariant } = props;

  //  BRAND
  //  Chakra Color Mode
  let sidebarBg = "none";
  let sidebarRadius = "0px";
  let sidebarMargins = "0px";
  if (sidebarVariant === "opaque") {
    sidebarBg = useColorModeValue("white", "gray.700");
    sidebarRadius = "16px";
    sidebarMargins = "16px 0px 16px 16px";
  }

  // SIDEBAR
  return (
    <Box ref={mainPanel}>
      <Box display={{ sm: "none", xl: "block" }} position="fixed">
        <Box
          bg={sidebarBg}
          transition={variantChange}
          w="260px"
          maxW="260px"
          ms={{
            sm: "16px",
          }}
          my={{
            sm: "16px",
          }}
          h="calc(100vh - 32px)"
          ps="20px"
          pe="20px"
          m={sidebarMargins}
          borderRadius={sidebarRadius}
        >
          <SidebarContent routes={routes}
        logoText={"PURITY UI DASHBOARD"}
        display="none"
        sidebarVariant={sidebarVariant}
        />
        </Box>
      </Box>
    </Box>
  );
}




export default Sidebar;
