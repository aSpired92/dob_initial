import {productsApi} from "@/api/index";

export const getProductCategories = () => {
  return productsApi.get('categories')
}

export const addProduct = (name: string, category: string, price: number) => {
  return productsApi.post('', {
    name,
    category,
    price
  })
}