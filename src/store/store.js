import { configureStore } from '@reduxjs/toolkit';
import eventLogReducer from './slices/eventLogSlice';
import authReducer from './slices/authSlice';

// Create the store
const store = configureStore({
  reducer: {
    eventLog: eventLogReducer,
    auth: authReducer,
    // Add other reducers here
  },
});

export default store;
