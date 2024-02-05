import { createRouter, createWebHistory } from 'vue-router'
import ReportsDashboard from "@/views/ReportsDashboard.vue";
import ProductsList from "@/views/ProductsList.vue";
import ProductsNew from "@/views/ProductsNew.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      redirect: {name: 'reports'},
      children: [
        {
          path: 'reports',
          name: 'reports',
          component: ReportsDashboard
        },

        // PRODUKTY
        {
          path: 'products',
          name: 'products',
          redirect: {name: 'products-list'},
          children: [
            {
              path: '',
              name: 'products-list',
              component: ProductsList
            },
            {
              path: 'new',
              name: 'products-new',
              component: ProductsNew
            },
          ]
        },

        // KLIENCI
        {
          path: 'clients',
          name: 'clients',
          redirect: {name: 'clients-list'},
          children: [
            {
              path: '',
              name: 'clients-list',
              component: ProductsList
            },
            {
              path: 'new',
              name: 'clients-new',
              component: ProductsNew
            },
          ]
        },

        // ZAMÓWIENIA
        {
          path: 'orders',
          name: 'orders',
          redirect: {name: 'orders-list'},
          children: [
            {
              path: '',
              name: 'orders-list',
              component: ProductsList
            },
            {
              path: 'new',
              name: 'orders-new',
              component: ProductsNew
            },
          ]
        },
      ]
    }
  ]
})

export default router
