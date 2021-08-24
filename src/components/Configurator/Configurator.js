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
} from "@chakra-ui/react";
import { Separator } from "components/Separator/Separator";
import PropTypes from "prop-types";
import React, { useState } from "react";

export default function Configurator(props) {
  const { rtlActive, secondary, isOpen, onClose, fixed, ...rest } = props;
  const [switched, setSwitched] = useState(props.isChecked);

  const { colorMode, toggleColorMode } = useColorMode();
  // Chakra Color Mode
  let fixedDisplay = "flex";
  if (props.secondary) {
    fixedDisplay = "none";
  }

  const settingsRef = React.useRef();
  return (
    <>
      <Drawer
        isOpen={props.isOpen}
        onClose={props.onClose}
        placement="right"
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
                    onClick={props.onTransparent}
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
                    onClick={props.onOpaque}
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
                    if (switched === true) {
                      props.onSwitch(false);
                      setSwitched(false);
                    } else {
                      props.onSwitch(true);
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
    </>
  );
}
Configurator.propTypes = {
  rtlActive: PropTypes.bool,
  secondary: PropTypes.bool,
  isOpen: PropTypes.func,
  onClose: PropTypes.func,
  fixed: PropTypes.bool,
};
