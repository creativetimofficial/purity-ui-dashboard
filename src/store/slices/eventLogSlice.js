import { createSlice } from '@reduxjs/toolkit';

// Initial state
const initialState = {
  filters: {
    time_range: 'day',
    // Don't include empty values in the initial state
  },
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
      
      state.filters = cleanedFilters;
    },
    // Reset filters to default
    resetFilters: (state) => {
      state.filters = initialState.filters;
    },
  },
});

// Export actions
export const { setFilters, resetFilters } = eventLogSlice.actions;

// Export reducer
export default eventLogSlice.reducer; 