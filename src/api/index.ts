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
