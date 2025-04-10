// Chakra imports
import {
  Box,
  Table,
  Thead,
  Tbody,
  Tr,
  Th,
  Td,
  Text,
  useColorModeValue,
  Spinner,
  Center,
  Badge,
  TableContainer,
} from "@chakra-ui/react";
import React, { useState, useEffect } from "react";
import { useSelector } from 'react-redux';
import { getAllEvents } from "services/eventLogService";

function EventLogTable() {
  // Chakra color mode
  const bgColor = useColorModeValue("white", "navy.700");
  const borderColor = useColorModeValue("gray.200", "gray.600");
  const textColor = useColorModeValue("gray.700", "white");
  
  // Redux hooks
  const filters = useSelector((state) => state.eventLog.filters);
  console.log("EventLogTable - Redux filters:", filters);
  
  // State for events
  const [events, setEvents] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  
  // Log component mount
  useEffect(() => {
    console.log("EventLogTable - Component mounted");
    return () => {
      console.log("EventLogTable - Component unmounted");
    };
  }, []);
  
  // Fetch events when filters change
  useEffect(() => {
    console.log("EventLogTable - Filters changed, fetching events");
    const fetchEvents = async () => {
      setLoading(true);
      setError(null);
      
      try {
        console.log("EventLogTable - Fetching events with filters:", filters);
        const data = await getAllEvents(filters);
        console.log("EventLogTable - Events data received:", data);
        setEvents(data);
      } catch (err) {
        console.error("EventLogTable - Error fetching events:", err);
        setError("Failed to load event logs. Please try again later.");
      } finally {
        setLoading(false);
      }
    };
    
    fetchEvents();
  }, [filters]);
  
  // Format timestamp
  const formatTimestamp = (timestamp) => {
    if (!timestamp) return "N/A";
    
    const date = new Date(timestamp);
    return date.toLocaleString();
  };
  
  // Get badge color based on event type
  const getEventTypeColor = (eventType) => {
    switch (eventType?.toLowerCase()) {
      case "create":
        return "green";
      case "update":
        return "blue";
      case "delete":
        return "red";
      default:
        return "gray";
    }
  };

  return (
    <Box
      p="20px"
      bg={bgColor}
      borderRadius="20px"
      borderWidth="1px"
      borderColor={borderColor}
      width="100%"
    >
      <Text fontSize="xl" fontWeight="bold" mb={4} color={textColor}>
        Event Logs
      </Text>
      
      {loading ? (
        <Center py={10}>
          <Spinner size="xl" color="blue.500" />
        </Center>
      ) : error ? (
        <Center py={10}>
          <Text color="red.500">{error}</Text>
        </Center>
      ) : events.length === 0 ? (
        <Center py={10}>
          <Text>No events found matching the selected filters.</Text>
        </Center>
      ) : (
        <TableContainer>
          <Table variant="simple">
            <Thead>
              <Tr>
                <Th>Timestamp</Th>
                <Th>Event Type</Th>
                <Th>User ID</Th>
                <Th>Product ID</Th>
              </Tr>
            </Thead>
            <Tbody>
              {events.map((event) => (
                <Tr key={event.id}>
                  <Td>{formatTimestamp(event.timestamp)}</Td>
                  <Td>
                    <Badge colorScheme={getEventTypeColor(event.event_type)}>
                      {event.event_type}
                    </Badge>
                  </Td>
                  <Td>{event.user_id || "N/A"}</Td>
                  <Td>{event.product_id || "N/A"}</Td>
                </Tr>
              ))}
            </Tbody>
          </Table>
        </TableContainer>
      )}
    </Box>
  );
}

export default EventLogTable;

