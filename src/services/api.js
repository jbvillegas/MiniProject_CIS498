import axios from 'axios';

const API_BASE_URL = import.meta.env.VITE_API_URL || 
                     import.meta.env.REACT_APP_API_URL || 
                     'http://localhost:3000/';

const api = axios.create({
  baseURL: API_BASE_URL,
  timeout: 10000,
});

// Request interceptor for auth token
api.interceptors.request.use(config => {
  const token = localStorage.getItem('authToken');
  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }
  return config;
});

// Response interceptor for error handling
api.interceptors.response.use(
  response => response,
  error => {
    console.error('API Error:', error.response?.data);
    return Promise.reject(error);
  }
);

export const fetchProjects = () => api.get('/projects');
export const fetchCategories = () => api.get('/categories');
export const createCategory = (data) => api.post('/categories', data);
export const updateCategory = (id, category) => api.put(`/categories/${id}`, category);

export const fetchCategoryDetails = (id) => api.get(`/categories/${id}`);
export const deleteCategory = (id) => api.delete(`/categories/${id}`);
export const loginUser = (credentials) => api.post('/users/login', credentials);
export const registerUser = (userData) => api.post('/users/register', userData);
export const adminDeleteItem = (id) => api.delete(`/admin/items/${id}`);