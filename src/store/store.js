import { configureStore } from '@reduxjs/toolkit';
import eventLogReducer from './slices/eventLogSlice';

// Create the store
const store = configureStore({
  reducer: {
    eventLog: eventLogReducer,
    // Add other reducers here
  },
});

export default store;
