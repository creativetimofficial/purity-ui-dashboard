import { Box, useStyleConfig } from "@chakra-ui/react";
function CardFooter(props) {
  const { variant, children, ...rest } = props;
  const styles = useStyleConfig("CardFooter", { variant });
  // Pass the computed styles into the `__css` prop
  return (
    <Box __css={styles} {...rest}>
      {children}
    </Box>
  );
}

export default CardFooter;
