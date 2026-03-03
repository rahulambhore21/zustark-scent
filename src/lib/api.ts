import axios from 'axios';

const API_URL = import.meta.env.VITE_API_URL || 'http://localhost:3000/api';

const api = axios.create({
  baseURL: API_URL,
  headers: {
    'Content-Type': 'application/json',
  },
  timeout: 30000, // 30 seconds
});

// Request interceptor
api.interceptors.request.use(
  (config) => {
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

// Response interceptor
api.interceptors.response.use(
  (response) => {
    return response;
  },
  (error) => {
    // Handle errors
    if (error.response) {
      // Server responded with error status
      console.error('API Error:', error.response.data);
    } else if (error.request) {
      // Request was made but no response
      console.error('Network Error:', error.message);
    } else {
      // Something else happened
      console.error('Error:', error.message);
    }
    return Promise.reject(error);
  }
);

// Order API
export const orderAPI = {
  /**
   * Create a new order
   */
  createOrder: async (orderData: any) => {
    const response = await api.post('/orders', orderData);
    return response.data;
  },

  /**
   * Get order details by order ID
   */
  getOrder: async (orderId: string) => {
    const response = await api.get(`/orders/${orderId}`);
    return response.data;
  },

  /**
   * Track order
   */
  trackOrder: async (orderId: string) => {
    const response = await api.get(`/orders/${orderId}/track`);
    return response.data;
  },

  /**
   * Check pincode serviceability
   */
  checkServiceability: async (pincode: string, codAmount?: number) => {
    const response = await api.get('/orders/check/serviceability', {
      params: { pincode, codAmount }
    });
    return response.data;
  }
};

export default api;
