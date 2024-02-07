import {clientsApi} from "@/api/index";


export interface ClientInterface {
  _id?: string
  name: string | null
  category: string | null
  city: string | null
  street: string | null
  number: string | null
  postcode: string | null
}

export class Client implements ClientInterface {

  _id?: string
  name: string | null
  category: string | null
  city: string | null
  street: string | null
  number: string | null
  postcode: string | null

  constructor( name: string, category: string, city: string, street: string, number: string, postcode: string) {
    this.name = name;
    this.category = category;
    this.city = city;
    this.street = street;
    this.number = number;
    this.postcode = postcode;
  }
}

export const getClientCategories = () => {
  return clientsApi.get('categories')
}

export const addClient = (item: Client) => {
  return clientsApi.post('', item)
}

export const updateClient = (item: Client) => {
  return clientsApi.put(`${item._id}`, item)
}

export const getAllClients = () => {
  return clientsApi.get('')
}

export const deleteClient = (id: string) => {
  return clientsApi.delete(`${id}`)
}