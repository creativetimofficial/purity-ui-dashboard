// Chakra imports
import {
  Box,
  Text,
  useColorModeValue,
  Spinner,
  Center,
  Select,
  FormControl,
  FormLabel,
  Grid,
} from "@chakra-ui/react";
import React, { useState, useEffect, useRef } from "react";
import { useSelector, useDispatch } from 'react-redux';
import { getEventStats } from "services/eventLogService";
import { Chart, registerables } from 'chart.js';
import { setChartTimeRange } from 'store/slices/eventLogSlice';

// Register Chart.js components
Chart.register(...registerables);

function EventLogChart() {
  // Chakra color mode
  const bgColor = useColorModeValue("white", "navy.700");
  const borderColor = useColorModeValue("gray.200", "gray.600");
  const textColor = useColorModeValue("gray.700", "white");
  
  // Redux hooks
  const dispatch = useDispatch();
  const chartTimeRange = useSelector((state) => state.eventLog.chart.time_range);
  
  // Chart reference
  const chartRef = useRef(null);
  const chartInstance = useRef(null);
  
  // State for chart data
  const [chartData, setChartData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  
  // Colors for different event types
  const eventTypeColors = {
    CREATE: "#38A169", // green
    UPDATE: "#3182CE", // blue
    DELETE: "#E53E3E", // red
  };
  
  // Fetch chart data when chartTimeRange changes
  useEffect(() => {
    const fetchChartData = async () => {
      setLoading(true);
      setError(null);
      
      try {
        console.log("Fetching chart data");
        
        // Only use the chart's time range
        const apiFilters = {
          group_by: chartTimeRange,
        };
        
        console.log("API filters for chart:", apiFilters);
        
        const data = await getEventStats(apiFilters);
        console.log("Chart data:", data);
        
        // Transform data for chart
        const transformedData = data.timestamps.map((timestamp) => {
          const dataPoint = { timestamp };
          
          // Add count for each event type
          data.event_types.forEach((eventType) => {
            dataPoint[eventType] = data.data[eventType][timestamp] || 0;
          });
          
          return dataPoint;
        });
        
        setChartData(transformedData);
      } catch (err) {
        console.error("Error fetching chart data:", err);
        setError("Failed to load chart data. Please try again later.");
      } finally {
        setLoading(false);
      }
    };
    
    fetchChartData();
  }, [chartTimeRange]);
  
  // Format timestamp for x-axis
  const formatTimestamp = (timestamp) => {
    if (!timestamp) return "";
    
    const date = new Date(timestamp);
    
    switch (chartTimeRange) {
      case "day":
        return date.toLocaleDateString(undefined, { month: "short", day: "numeric" });
      case "week":
        return `Week ${Math.ceil(date.getDate() / 7)}`;
      case "month":
        return date.toLocaleDateString(undefined, { month: "short" });
      default:
        return timestamp;
    }
  };
  
  // Handle group by change
  const handleGroupByChange = (e) => {
    dispatch(setChartTimeRange(e.target.value));
  };
  
  // Initialize or update chart when data changes
  useEffect(() => {
    if (loading || error || chartData.length === 0) return;
    
    // Destroy previous chart instance if it exists
    if (chartInstance.current) {
      chartInstance.current.destroy();
    }
    
    // Prepare data for Chart.js
    const labels = chartData.map(item => formatTimestamp(item.timestamp));
    
    // Get unique event types (excluding timestamp)
    const eventTypes = Object.keys(chartData[0]).filter(key => key !== 'timestamp');
    
    // Create datasets for each event type
    const datasets = eventTypes.map(eventType => ({
      label: eventType,
      data: chartData.map(item => item[eventType]),
      borderColor: eventTypeColors[eventType] || "#718096",
      backgroundColor: eventTypeColors[eventType] || "#718096",
      tension: 0.4,
      fill: false,
    }));
    
    // Create new chart
    const ctx = chartRef.current.getContext('2d');
    chartInstance.current = new Chart(ctx, {
      type: 'line',
      data: {
        labels,
        datasets,
      },
      options: {
        responsive: true,
        maintainAspectRatio: false,
        plugins: {
          legend: {
            position: 'top',
          },
          tooltip: {
            mode: 'index',
            intersect: false,
          },
        },
        scales: {
          x: {
            grid: {
              display: true,
              drawBorder: false,
            },
          },
          y: {
            beginAtZero: true,
            grid: {
              display: true,
              drawBorder: false,
            },
          },
        },
      },
    });
    
    // Cleanup function
    return () => {
      if (chartInstance.current) {
        chartInstance.current.destroy();
      }
    };
  }, [chartData, loading, error, chartTimeRange]);

  return (
    <Box
      p="20px"
      bg={bgColor}
      borderRadius="20px"
      borderWidth="1px"
      borderColor={borderColor}
      width="100%"
    >
      <Grid templateColumns={{ base: "1fr", md: "1fr auto" }} gap={4} mb={4}>
        <Text fontSize="xl" fontWeight="bold" color={textColor}>
          Event Statistics
        </Text>
        
        <FormControl width="200px">
          <FormLabel>Group By</FormLabel>
          <Select value={chartTimeRange} onChange={handleGroupByChange}>
            <option value="day">Day</option>
            <option value="week">Week</option>
            <option value="month">Month</option>
          </Select>
        </FormControl>
      </Grid>
      
      {loading ? (
        <Center py={10} height="300px">
          <Spinner size="xl" color="blue.500" />
        </Center>
      ) : error ? (
        <Center py={10} height="300px">
          <Text color="red.500">{error}</Text>
        </Center>
      ) : chartData.length === 0 ? (
        <Center py={10} height="300px">
          <Text>No data available for the selected filters.</Text>
        </Center>
      ) : (
        <Box height="300px">
          <canvas ref={chartRef}></canvas>
        </Box>
      )}
    </Box>
  );
}

export default EventLogChart;

