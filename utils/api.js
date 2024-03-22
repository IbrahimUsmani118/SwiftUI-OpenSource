// Define API utility functions or methods here
// Example:
import axios from 'axios';

const BASE_URL = 'https://api.example.com';

export const fetchData = async (endpoint) => {
  try {
    const response = await axios.get(`${BASE_URL}/${endpoint}`);
    return response.data;
  } catch (error) {
    console.error('Error fetching data:', error);
    throw error;
  }
};

// Add more API utility functions as needed
