// Chakra Imports
import {
  Box,
  Button,
  Drawer,
  DrawerBody,
  DrawerCloseButton,
  DrawerContent,
  DrawerHeader,
  Flex,
  Switch,
  Text,
  useColorMode,
  useColorModeValue,
  useDisclosure,
} from "@chakra-ui/react";
// Custom Icons
import { SettingsIcon } from "components/Icons/Icons";
import { Separator } from "components/Separator/Separator";
import PropTypes from "prop-types";
import React, { useState } from "react";

export default function HeaderLinks(props) {
  const {
    rtlActive,
    disclosureFunc,
    variant,
    children,
    fixed,
    secondary,
    ...rest
  } = props;
  const [fixedLinks, setFixedLinks] = useState(props.fixedNavbar);
  const [switched, setSwitched] = useState(false);

  const { colorMode, toggleColorMode } = useColorMode();
  const { isOpen, onOpen, onClose } = useDisclosure();
  // Chakra Color Mode
  let navbarIcon = useColorModeValue("gray.500", "gray.200");
  let fixedDisplay = "flex";

  if (secondary) {
    navbarIcon = "white";
    mainText = "white";
    fixedDisplay = "none";
  }
  const settingsRef = React.useRef();
  return (
    <Portal
      pe={{ sm: "0px", md: "16px" }}
      w={{ sm: "100%", md: "auto" }}
      alignItems="center"
    >
      <SettingsIcon
        cursor="pointer"
        me="16px"
        ref={settingsRef}
        onClick={onOpen}
        color={navbarIcon}
        w="18px"
        h="18px"
      />
      <Drawer
        isOpen={isOpen}
        placement="right"
        onClose={onClose}
        finalFocusRef={settingsRef}
        blockScrollOnMount={false}
      >
        <DrawerContent>
          <DrawerHeader pt="24px" px="24px">
            <DrawerCloseButton />
            <Text fontSize="xl" fontWeight="bold" mt="16px">
              Purity UI Configurator
            </Text>
            <Text fontSize="md" mb="16px">
              See your dashboard options.
            </Text>
            <Separator />
          </DrawerHeader>
          <DrawerBody w="340px" ps="24px" pe="40px">
            <Flex flexDirection="column">
              <Box>
                <Text fontSize="md" fontWeight="600">
                  Sidenav Type
                </Text>
                <Text fontSize="sm" mb="16px">
                  Choose between 2 different sidenav types.
                </Text>
                <Flex>
                  <Button
                    w="50%"
                    p="8px 32px"
                    me="8px"
                    colorScheme="teal"
                    borderColor="teal.300"
                    color="teal.300"
                    variant="outline"
                    fontSize="xs"
                    onClick={(event) => {
                      props.onChange("transparent");
                    }}
                  >
                    Transparent
                  </Button>
                  <Button
                    type="submit"
                    bg="teal.300"
                    w="50%"
                    p="8px 32px"
                    mb={5}
                    _hover="teal.300"
                    color="white"
                    fontSize="xs"
                    onClick={(event) => {
                      props.onChange("opaque");
                    }}
                  >
                    Opaque
                  </Button>
                </Flex>
              </Box>
              <Box
                display={fixedDisplay}
                justifyContent="space-between "
                mb="16px"
              >
                <Text fontSize="md" fontWeight="600" mb="4px">
                  Navbar Fixed
                </Text>
                <Switch
                  colorScheme="teal"
                  isChecked={switched}
                  onChange={(event) => {
                    if (fixedLinks === true) {
                      props.onSwitch(false);
                      setFixedLinks(false);
                      setSwitched(false);
                    } else {
                      props.onSwitch(true);
                      setFixedLinks(true);
                      setSwitched(true);
                    }
                  }}
                />
              </Box>
              <Flex
                justifyContent="space-between"
                alignItems="center"
                mb="16px"
              >
                <Text fontSize="md" fontWeight="600" mb="4px">
                  Dark/Light
                </Text>
                <Button onClick={toggleColorMode}>
                  Toggle {colorMode === "light" ? "Dark" : "Light"}
                </Button>
              </Flex>
            </Flex>
          </DrawerBody>
        </DrawerContent>
      </Drawer>
    </Portal>
  );
}

HeaderLinks.propTypes = {
  rtlActive: PropTypes.bool,
};
