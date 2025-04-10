import api from './api';

export const signup = async (userData) => {
  try {
    console.log('Sending signup request with:', userData);
    const response = await api.post('/auth/signup', userData);
    console.log('Signup API response:', response);
    
    if (!response.data) {
      throw new Error('No data received from server');
    }
    
    return response.data;
  } catch (error) {
    console.error('Signup API error:', error);
    if (error.response) {
      // The request was made and the server responded with a status code
      // that falls out of the range of 2xx
      throw new Error(error.response.data?.message || error.response.data?.error || 'Failed to sign up');
    } else if (error.request) {
      // The request was made but no response was received
      throw new Error('No response from server. Please check your connection.');
    } else {
      // Something happened in setting up the request that triggered an Error
      throw new Error(error.message || 'Failed to sign up');
    }
  }
};

export const signin = async (credentials) => {
  try {
    const response = await api.post('/auth/signin', credentials);
    return response.data;
  } catch (error) {
    throw new Error(error.response?.data?.message || error.response?.data?.error || 'Failed to sign in');
  }
}; 