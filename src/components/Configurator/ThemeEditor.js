import { useColorModeValue } from "@chakra-ui/react";
import { Button } from "@chakra-ui/react";
import {
  ThemeEditor as ThemeEditorWrapper,
  ThemeEditorColors,
  ThemeEditorDrawer,
  ThemeEditorFontSizes,
} from "@hypertheme-editor/chakra-ui";
import { CgColorPicker } from "react-icons/cg";
import { ImFontSize } from "react-icons/im";

function ThemeEditorButton({ onOpen, isOpen, ...rest }) {
  return (
    <Button
      onClick={onOpen}
      bg={useColorModeValue("white", "transparent")}
      borderColor={useColorModeValue("gray.700", "white")}
      my={3}
      w="100%"
      justifyContent="center"
      fontSize="xs"
      variant="no-hover"
      px="20px"
      mb="16px"
      border="1px solid"
      borderRadius="15px"
      h="40px"
      _focus={{
        boxShadow: "none",
      }}
      _hover={{
        boxShadow: "none",
      }}
      {...rest}
    >
      Open Theme Editor
    </Button>
  );
}

export function ThemeEditor(props) {
  return (
    <ThemeEditorWrapper>
      <ThemeEditorButton />
      <ThemeEditorDrawer hideUpgradeToPro>
        <ThemeEditorColors icon={CgColorPicker} title="Colors" />
        <ThemeEditorFontSizes icon={ImFontSize} title="Font Sizes" />
      </ThemeEditorDrawer>
    </ThemeEditorWrapper>
  );
}
