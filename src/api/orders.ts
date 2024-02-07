import {ordersApi} from "@/api/index";
import type {Client} from "@/api/clients";
import type {Product} from "@/api/products";

export interface OrderElementInterface {
  product: Product | null
  quantity: number | null
}

export interface OrderInterface {
  _id?: string
  client: Client | null
  elements: OrderElementInterface[] | null
}

export class Order implements OrderInterface {

  _id?: string
  client: Client | null
  elements: OrderElementInterface[] | null

  constructor( client: Client, elements: OrderElementInterface[]) {
    this.client = client;
    this.elements = elements;
  }
}

export const getOrderCategories = () => {
  return ordersApi.get('categories')
}

export const addOrder = (item: Order) => {
  return ordersApi.post('', item)
}

export const updateOrder = (item: Order) => {
  return ordersApi.put(`${item._id}`, item)
}

export const getAllOrders = () => {
  return ordersApi.get('')
}

export const deleteOrder = (id: string) => {
  return ordersApi.delete(`${id}`)
}