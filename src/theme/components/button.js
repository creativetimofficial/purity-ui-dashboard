export const buttonStyles = {
  components: {
    Button: {
      // 3. We can add a new visual variant
      variants: {
        "with-shadow": {
          boxShadow: "0 0 2px 2px #efdfde",
          bgColor: "red",
        },
        "no-hover": {
          _hover: {
            boxShadow: "none",
          },
        },
        "transparent-with-icon": {
          bg: "transparent",
          fontWeight: "bold",
          borderRadius: "inherit",
          cursor: "pointer",
          _hover: "none",
          _active: {
            bg: "transparent",
            transform: "none",
            borderColor: "transparent",
          },
          _focus: {
            boxShadow: "none",
          },
          _hover: {
            boxShadow: "none",
          },
        },
      },
      baseStyle: {
        borderRadius: "12px",
        _focus: {
          boxShadow: "none",
        },
      },
    },
  },
};
