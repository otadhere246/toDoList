import axios from 'axios';

// Create an Axios instance
const apiClient = axios.create({
  baseURL: 'http://localhost:600/api/', // Replace with your API base URL
  timeout: 5000, // Set a timeout if nseeded
});

// Add a request interceptor
apiClient.interceptors.request.use(
  (config) => {
    // Retrieve the token (from localStorage, sessionStorage, or cookies)
    const token = localStorage.getItem('token'); // Example using localStorage

    if (token) {
      config.headers.Authorization = `Bearer ${token}`; // Attach token to Authorization header
    }

    return config; // Proceed with the request
  },
  (error) => {
    // Handle request error
    return Promise.reject(error);
  }
);

// Add a response interceptor (optional, for handling errors globally)
apiClient.interceptors.response.use(
  (response) => response, // Return response data directly
  (error) => {
    // Handle token errors or other HTTP errors globally
    if (error.response?.status === 401) {
      console.error('Unauthorized! Token might be invalid or expired.');
      // Optional: Redirect to login or refresh token
    }
    return Promise.reject(error);
  }
);

export default apiClient;
