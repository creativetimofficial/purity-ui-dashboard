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
  FormControl,
  FormLabel,
  Input,
  Select,
  Stack,
  Button,
  Flex,
} from "@chakra-ui/react";
import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from 'react-redux';
import { getAllEvents } from "services/eventLogService";
import { setFilters, resetFilters } from 'store/slices/eventLogSlice';

function EventLogTable() {
  // Chakra color mode
  const bgColor = useColorModeValue("white", "navy.700");
  const borderColor = useColorModeValue("gray.200", "gray.600");
  const textColor = useColorModeValue("gray.700", "white");
  
  // Redux hooks
  const dispatch = useDispatch();
  const filters = useSelector((state) => state.eventLog.filters);
  
  // Local state for form values
  const [formValues, setFormValues] = useState({
    timeRange: filters.time_range,
    eventType: filters.event_type,
    userId: filters.user_id,
  });
  
  // State for events
  const [events, setEvents] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  
  // Update local state when Redux state changes
  useEffect(() => {
    setFormValues({
      timeRange: filters.time_range,
      eventType: filters.event_type,
      userId: filters.user_id,
    });
  }, [filters]);
  
  // Handle input change
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormValues((prev) => ({
      ...prev,
      [name]: value,
    }));
  };
  
  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Submitting filters:", formValues);
    
    // Convert frontend filters to API filters
    const apiFilters = {
      time_range: formValues.timeRange,
    };
    
    // Only include non-empty values
    if (formValues.eventType) {
      apiFilters.event_type = formValues.eventType;
    }
    
    if (formValues.userId) {
      apiFilters.user_id = formValues.userId;
    }
    
    console.log("API filters:", apiFilters);
    dispatch(setFilters(apiFilters));
  };
  
  // Handle form reset
  const handleReset = () => {
    setFormValues({
      timeRange: "day",
      eventType: "",
      userId: "",
    });
    dispatch(resetFilters());
  };
  
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
      
      <form onSubmit={handleSubmit}>
        <Stack spacing={4} mb={6}>
          <Flex gap={4} flexWrap="wrap">
            <FormControl flex="1" minW="200px">
              <FormLabel fontSize="sm" fontWeight="medium" color={textColor}>
                Time Range
              </FormLabel>
              <Select
                name="timeRange"
                value={formValues.timeRange}
                onChange={handleChange}
                size="md"
                focusBorderColor="blue.400"
              >
                <option value="day">Last 24 Hours</option>
                <option value="week">Last 7 Days</option>
                <option value="month">Last 30 Days</option>
              </Select>
            </FormControl>
            
            <FormControl flex="1" minW="200px">
              <FormLabel fontSize="sm" fontWeight="medium" color={textColor}>
                Event Type
              </FormLabel>
              <Select
                name="eventType"
                value={formValues.eventType}
                onChange={handleChange}
                size="md"
                focusBorderColor="blue.400"
              >
                <option value="">All Types</option>
                <option value="CREATE">Create</option>
                <option value="UPDATE">Update</option>
                <option value="DELETE">Delete</option>
              </Select>
            </FormControl>
            
            <FormControl flex="1" minW="200px">
              <FormLabel fontSize="sm" fontWeight="medium" color={textColor}>
                User ID
              </FormLabel>
              <Input
                name="userId"
                value={formValues.userId}
                onChange={handleChange}
                placeholder="Enter user ID"
                size="md"
                focusBorderColor="blue.400"
              />
            </FormControl>
          </Flex>
          
          <Flex gap={4} justify="flex-end">
            <Button
              type="button"
              onClick={handleReset}
              variant="outline"
              colorScheme="gray"
              size="md"
            >
              Reset
            </Button>
            <Button
              type="submit"
              colorScheme="blue"
              size="md"
            >
              Apply Filters
            </Button>
          </Flex>
        </Stack>
      </form>
      
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

