/*eslint-disable*/
import { HamburgerIcon } from "@chakra-ui/icons";
// chakra imports
import {
    Box,
    Button,
    Drawer,
    DrawerBody,
    DrawerCloseButton,
    DrawerContent,
    DrawerOverlay,
    Flex,
    Link,
    Stack,
    Text,
    useColorModeValue,
    useDisclosure
} from "@chakra-ui/react";
import IconBox from "@/components/Icon/svg/IconBox";
import { CreativeTimLogo } from "@/components/Icon/svg";
import { Separator } from "@/components/Separator";
import { SidebarHelp } from "@/components/Sidebar/SidebarHelp";
import React from "react";
import { NavLink, useLocation } from "react-router-dom";

function SidebarResponsive(props) {
    // to check for active links and opened collapses
    let location = useLocation();
    // this is for the rest of the collapses
    const [state, setState] = React.useState({});
    const mainPanel = React.useRef();
    // verifies if routeName is the one active (in browser input)
    const activeRoute = (routeName) => {
      return location.pathname === routeName ? "active" : "";
    };
  
    const createLinks = (routes) => {
      // Chakra Color Mode
      const activeBg = useColorModeValue("white", "gray.700");
      const inactiveBg = useColorModeValue("white", "gray.700");
      const activeColor = useColorModeValue("gray.700", "white");
      const inactiveColor = useColorModeValue("gray.400", "gray.400");
  
      return routes.map((prop, key) => {
        if (prop.redirect) {
          return null;
        }
        if (prop.category) {
          var st = {};
          st[prop["state"]] = !state[prop.state];
          return (
            <div key={prop.name}>
              <Text
                color={activeColor}
                fontWeight="bold"
                mb={{
                  xl: "12px",
                }}
                mx="auto"
                ps={{
                  sm: "10px",
                  xl: "16px",
                }}
                py="12px"
              >
                {document.documentElement.dir === "rtl"
                  ? prop.rtlName
                  : prop.name}
              </Text>
              {createLinks(prop.views)}
            </div>
          );
        }
        return (
          <NavLink to={prop.layout + prop.path} key={prop.name}>
            {activeRoute(prop.layout + prop.path) === "active" ? (
              <Button
                boxSize="initial"
                justifyContent="flex-start"
                alignItems="center"
                bg={activeBg}
                mb={{
                  xl: "12px",
                }}
                mx={{
                  xl: "auto",
                }}
                ps={{
                  sm: "10px",
                  xl: "16px",
                }}
                py="12px"
                borderRadius="15px"
                _hover="none"
                w="100%"
                _active={{
                  bg: "inherit",
                  transform: "none",
                  borderColor: "transparent",
                }}
                _focus={{
                  boxShadow: "none",
                }}
              >
                <Flex>
                  {typeof prop.icon === "string" ? (
                    <Icon>{prop.icon}</Icon>
                  ) : (
                    <IconBox
                      bg="teal.300"
                      color="white"
                      h="30px"
                      w="30px"
                      me="12px"
                    >
                      {prop.icon}
                    </IconBox>
                  )}
                  <Text color={activeColor} my="auto" fontSize="sm">
                    {document.documentElement.dir === "rtl"
                      ? prop.rtlName
                      : prop.name}
                  </Text>
                </Flex>
              </Button>
            ) : (
              <Button
                boxSize="initial"
                justifyContent="flex-start"
                alignItems="center"
                bg="transparent"
                mb={{
                  xl: "12px",
                }}
                mx={{
                  xl: "auto",
                }}
                py="12px"
                ps={{
                  sm: "10px",
                  xl: "16px",
                }}
                borderRadius="15px"
                _hover="none"
                w="100%"
                _active={{
                  bg: "inherit",
                  transform: "none",
                  borderColor: "transparent",
                }}
                _focus={{
                  boxShadow: "none",
                }}
              >
                <Flex>
                  {typeof prop.icon === "string" ? (
                    <Icon>{prop.icon}</Icon>
                  ) : (
                    <IconBox
                      bg={inactiveBg}
                      color="teal.300"
                      h="30px"
                      w="30px"
                      me="12px"
                    >
                      {prop.icon}
                    </IconBox>
                  )}
                  <Text color={inactiveColor} my="auto" fontSize="sm">
                    {document.documentElement.dir === "rtl"
                      ? prop.rtlName
                      : prop.name}
                  </Text>
                </Flex>
              </Button>
            )}
          </NavLink>
        );
      });
    };
    
    const { logoText, routes, ...rest } = props;
  
    var links = <>{createLinks(routes)}</>;
    //  BRAND
    //  Chakra Color Mode
    let hamburgerColor = useColorModeValue("gray.500", "gray.200");
    if (props.secondary === true) {
      hamburgerColor = "white";
    }
    var brand = (
      <Box pt={"35px"} mb="8px">
        <Link
          // href={`${process.env.PUBLIC_URL}/#/`}
          href='/'
          target="_blank"
          display="flex"
          lineHeight="100%"
          mb="30px"
          fontWeight="bold"
          justifyContent="center"
          alignItems="center"
          fontSize="11px"
        >
          <CreativeTimLogo w="32px" h="32px" me="10px" />
          <Text fontSize="sm" mt="3px">
            {logoText}
          </Text>
        </Link>
        <Separator></Separator>
      </Box>
    );
  
    // SIDEBAR
    const { isOpen, onOpen, onClose } = useDisclosure();
    const btnRef = React.useRef();
    // Color variables
    return (
      <Flex
        display={{ sm: "flex", xl: "none" }}
        ref={mainPanel}
        alignItems="center"
      >
        <HamburgerIcon
          color={hamburgerColor}
          w="18px"
          h="18px"
          ref={btnRef}
          colorScheme="teal"
          onClick={onOpen}
        />
        <Drawer
          isOpen={isOpen}
          onClose={onClose}
          placement={document.documentElement.dir === "rtl" ? "right" : "left"}
          finalFocusRef={btnRef}
        >
          <DrawerOverlay />
          <DrawerContent
            w="250px"
            maxW="250px"
            ms={{
              sm: "16px",
            }}
            my={{
              sm: "16px",
            }}
            borderRadius="16px"
          >
            <DrawerCloseButton
              _focus={{ boxShadow: "none" }}
              _hover={{ boxShadow: "none" }}
            />
            <DrawerBody maxW="250px" px="1rem">
              <Box maxW="100%" h="100vh">
                <Box>{brand}</Box>
                <Stack direction="column" mb="40px">
                  <Box>{links}</Box>
                </Stack>
                <SidebarHelp></SidebarHelp>
              </Box>
            </DrawerBody>
          </DrawerContent>
        </Drawer>
      </Flex>
    );
  }

  export default SidebarResponsive