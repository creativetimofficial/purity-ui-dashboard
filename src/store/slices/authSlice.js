import { createSlice } from '@reduxjs/toolkit';
import Cookies from 'js-cookie';

const initialState = {
  token: Cookies.get('token') || null,
};

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    setToken: (state, action) => {
      state.token = action.payload;
      Cookies.set('token', action.payload);
    },
    clearToken: (state) => {
      state.token = null;
      Cookies.remove('token');
    },
  },
});

export const { setToken, clearToken } = authSlice.actions;
export default authSlice.reducer; 