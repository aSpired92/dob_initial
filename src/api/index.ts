import axios from 'axios';

const apiUrl = import.meta.env.VITE_API
export const api = axios.create({
  baseURL: apiUrl
})

export const productsApi = axios.create({
  baseURL: `${apiUrl}/products`
})

export const clientsApi = axios.create({
  baseURL: `${apiUrl}/clients`
})

export const ordersApi = axios.create({
  baseURL: `${apiUrl}/orders`
})

export const reportsApi = axios.create({
  baseURL: `${apiUrl}/reports`
})
