const axios = require('axios');

const BASE_URL = 'https://api.restful-api.dev';

const apiClient = axios.create({
  baseURL: BASE_URL,
  headers: {
    'Content-Type': 'application/json',
  },
});

class BaseService {
  async get(endpoint) {
    const response = await apiClient.get(endpoint);
    return response;
  }

  async post(endpoint, data) {
    const response = await apiClient.post(endpoint, data);
    return response;
  }

  async put(endpoint, data) {
    const response = await apiClient.put(endpoint, data);
    return response;
  }

  async patch(endpoint, data) {
    const response = await apiClient.patch(endpoint, data);
    return response;
  }

  async delete(endpoint) {
    const response = await apiClient.delete(endpoint);
    return response;
  }
}

module.exports = new BaseService();