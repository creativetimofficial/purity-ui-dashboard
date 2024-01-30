// Chakra UI kutubxonalari import qilinadi
import { Box, Spinner } from "@chakra-ui/react";

// Komponentlar stil bilan tasvirlangan "LoaderWrapper" komponenti
const LoaderWrapper = (props) => (
  <Box
    position="fixed"
    // top="0"
    // left="0"
    zIndex="1301"
    width="100%"
    display="flex"
    alignItems="center"
    justifyContent="center"
    {...props}
  />
);

// ==============================|| LOADER ||============================== //

// "Loader" nomli komponent, stilga qo'yilgan "LoaderWrapper" orqali Spinner chizadi
const Loader = () => (
  <LoaderWrapper>
    <Spinner color="blue.500" thickness="4px" speed="0.65s" emptyColor="gray.200" size="xl" />
  </LoaderWrapper>
);

// "CircularLoader" nomli komponent, "Box" orqali flex stilga ega bo'lgan dairaviy chizishni chizadi
export const CircularLoader = () => (
  <LoaderWrapper>
    <Spinner color="blue.500" thickness="4px" speed="0.65s" emptyColor="gray.200" size="xl" />
  </LoaderWrapper>
);

// "Loader" komponentini eksport qilamiz
export default Loader;
