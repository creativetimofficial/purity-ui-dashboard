import api from './api';

/**
 * Get all events with optional filtering
 * @param {Object} filters - Filter parameters
 * @returns {Promise} - Promise with event data
 */
export const getAllEvents = async (filters = {}) => {
  try {
    console.log("eventLogService - Original filters:", filters);
    
    // Filter out empty values
    const cleanedFilters = Object.entries(filters).reduce((acc, [key, value]) => {
      // Only include non-empty values
      if (value !== "" && value !== null && value !== undefined) {
        acc[key] = value;
      }
      return acc;
    }, {});
    
    console.log("eventLogService - Cleaned filters:", cleanedFilters);
    console.log("eventLogService - API call: POST /events with filters:", cleanedFilters);
    
    // Log the API configuration
    console.log("eventLogService - API base URL:", api.defaults.baseURL);
    console.log("eventLogService - API headers:", api.defaults.headers);
    
    const response = await api.post('/events', cleanedFilters);
    console.log("eventLogService - Response status:", response.status);
    console.log("eventLogService - Response data:", response.data);
    return response.data;
  } catch (error) {
    console.error('eventLogService - Error fetching events:', error);
    console.error('eventLogService - Error details:', {
      message: error.message,
      status: error.response?.status,
      data: error.response?.data,
      config: error.config
    });
    throw error;
  }
};

/**
 * Get event statistics for visualization
 * @param {Object} filters - Filter parameters
 * @returns {Promise} - Promise with event statistics
 */
export const getEventStats = async (filters = {}) => {
  try {
    console.log("eventLogService - Original filters for stats:", filters);
    
    // Filter out empty values
    const cleanedFilters = Object.entries(filters).reduce((acc, [key, value]) => {
      // Only include non-empty values
      if (value !== "" && value !== null && value !== undefined) {
        acc[key] = value;
      }
      return acc;
    }, {});
    
    console.log("eventLogService - Cleaned filters for stats:", cleanedFilters);
    console.log("eventLogService - API call: GET /events/stats with filters:", cleanedFilters);
    
    const response = await api.get('/events/stats', { params: cleanedFilters });
    console.log("eventLogService - Response status:", response.status);
    console.log("eventLogService - Response data:", response.data);
    return response.data;
  } catch (error) {
    console.error('eventLogService - Error fetching event statistics:', error);
    console.error('eventLogService - Error details:', {
      message: error.message,
      status: error.response?.status,
      data: error.response?.data,
      config: error.config
    });
    throw error;
  }
};

/**
 * Get a specific event by ID
 * @param {string} eventId - Event ID
 * @returns {Promise} - Promise with event data
 */
export const getEventById = async (eventId) => {
  try {
    console.log("eventLogService - API call: GET /events/" + eventId);
    const response = await api.get(`/events/${eventId}`);
    console.log("eventLogService - Response status:", response.status);
    console.log("eventLogService - Response data:", response.data);
    return response.data;
  } catch (error) {
    console.error(`eventLogService - Error fetching event with ID ${eventId}:`, error);
    console.error('eventLogService - Error details:', {
      message: error.message,
      status: error.response?.status,
      data: error.response?.data,
      config: error.config
    });
    throw error;
  }
};

