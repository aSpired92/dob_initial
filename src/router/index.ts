import { createRouter, createWebHistory } from 'vue-router'
import ReportsDashboard from "@/views/ReportsDashboard.vue";
import ProductsPage from "@/views/ProductsPage.vue";
import ClientsPage from "@/views/ClientsPage.vue";
import OrdersPage from "@/views/OrdersPage.vue";

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
          component: ProductsPage
        },

        // KLIENCI
        {
          path: 'clients',
          name: 'clients',
          component: ClientsPage
        },

        // ZAMÓWIENIA
        {
          path: 'orders',
          name: 'orders',
          component: OrdersPage
        },
      ]
    }
  ]
})

export default router
