import { createSlice } from '@reduxjs/toolkit';

// Initial state
const initialState = {
  filters: {
    time_range: 'day',
    event_type: '',
    user_id: '',
  },
  chart: {
    time_range: 'day',
  }
};

// Create the slice
const eventLogSlice = createSlice({
  name: 'eventLog',
  initialState,
  reducers: {
    // Set filters
    setFilters: (state, action) => {
      // Only include non-empty values
      const cleanedFilters = Object.entries(action.payload).reduce((acc, [key, value]) => {
        if (value !== "" && value !== null && value !== undefined) {
          acc[key] = value;
        }
        return acc;
      }, {});
      
      state.filters = {
        ...state.filters,
        ...cleanedFilters
      };
    },
    // Set chart time range
    setChartTimeRange: (state, action) => {
      state.chart.time_range = action.payload;
    },
    // Reset filters to default
    resetFilters: (state) => {
      state.filters = initialState.filters;
    },
  },
});

// Export actions
export const { setFilters, setChartTimeRange, resetFilters } = eventLogSlice.actions;

// Export reducer
export default eventLogSlice.reducer; 