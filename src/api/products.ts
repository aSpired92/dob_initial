import {productsApi} from "@/api/index";


export interface ProductInterface {
  _id?: string
  name: string | null
  category: string | null
  price: number | null
}

export class Product implements ProductInterface {

  _id?: string
  name: string | null
  category: string | null
  price: number | null

  constructor( name: string, category: string, price: number ) {
    this.name = name;
    this.category = category;
    this.price = price;
  }
}

export const getProductCategories = () => {
  return productsApi.get('categories')
}

export const addProduct = (item: Product) => {
  return productsApi.post('', {
    name: item.name,
    category: item.category,
    price: item.price
  })
}

export const updateProduct = (item: Product) => {
  return productsApi.put(`${item._id}`, {
    name: item.name,
    category: item.category,
    price: item.price
  })
}

export const getAllProducts = () => {
  return productsApi.get('')
}

export const deleteProduct = (id: string) => {
  return productsApi.delete(`${id}`)
}