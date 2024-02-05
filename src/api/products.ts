import {productsApi} from "@/api/index";

export const getProductCategories = () => {
  return productsApi.get('categories')
}
