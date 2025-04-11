// Chakra imports
import {
  Box,
  Button,
  FormControl,
  FormLabel,
  Input,
  Select,
  Stack,
  useColorModeValue,
  Text,
} from "@chakra-ui/react";
import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from 'react-redux';
import { setFilters, resetFilters } from 'store/slices/eventLogSlice';

function EventLogFilters() {
  // Chakra color mode
  const bgColor = useColorModeValue("white", "navy.700");
  const borderColor = useColorModeValue("gray.200", "gray.600");
  const textColor = useColorModeValue("gray.700", "gray.200");
  
  // Redux hooks
  const dispatch = useDispatch();
  const reduxFilters = useSelector((state) => state.eventLog.filters);
  
  // Local state for form values
  const [formValues, setFormValues] = useState({
    timeRange: reduxFilters.time_range,
    eventType: reduxFilters.event_type,
    userId: reduxFilters.user_id,
  });
  
  // Update local state when Redux state changes
  useEffect(() => {
    setFormValues({
      timeRange: reduxFilters.time_range,
      eventType: reduxFilters.event_type,
      userId: reduxFilters.user_id,
    });
  }, [reduxFilters]);
  
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
    
    // Dispatch action to update Redux state
    dispatch(setFilters(apiFilters));
  };
  
  // Handle form reset
  const handleReset = () => {
    setFormValues({
      timeRange: "day",
      eventType: "",
      userId: "",
    });
    
    // Dispatch action to reset Redux state
    dispatch(resetFilters());
  };
  
  return (
    <Box
      p="24px"
      bg={bgColor}
      borderRadius="16px"
      borderWidth="1px"
      borderColor={borderColor}
      width="100%"
      boxShadow="sm"
    >
      <form onSubmit={handleSubmit}>
        <Stack spacing={6}>
          <Text fontSize="lg" fontWeight="bold" color={textColor}>
            Filter Events
          </Text>
          
          <Stack spacing={4}>
            <FormControl>
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
            
            <FormControl>
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
            
            <FormControl>
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
          </Stack>
          
          <Stack direction="row" spacing={4} mt={4}>
            <Button
              type="button"
              onClick={handleReset}
              variant="outline"
              colorScheme="gray"
              size="md"
              width="50%"
            >
              Reset
            </Button>
            <Button
              type="submit"
              colorScheme="blue"
              size="md"
              width="50%"
            >
              Apply Filters
            </Button>
          </Stack>
        </Stack>
      </form>
    </Box>
  );
}

export default EventLogFilters;

