// Chakra imports
import {
  Box,
  Grid,
  Container,
  useColorModeValue,
} from "@chakra-ui/react";
import React from "react";
// Custom components
import EventLogTable from "./components/EventLogTable";
import EventLogChart from "./components/EventLogChart";

function EventLogging() {
  // Chakra color mode
  const bgColor = useColorModeValue("gray.50", "navy.900");
  
  return (
    <Box pt={{ base: "130px", md: "80px", xl: "80px" }}>
      <Container maxW="container.xl">
        <Grid
          templateColumns={{ base: "1fr", lg: "1fr" }}
          gap={6}
          mb={6}
        >
          <Box>
            <EventLogChart />
          </Box>
        </Grid>
        
        <Box mb={6}>
          <EventLogTable />
        </Box>
      </Container>
    </Box>
  );
}

export default EventLogging; 