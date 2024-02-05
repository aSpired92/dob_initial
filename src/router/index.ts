import {createRouter, createWebHistory, RouteRecordRaw} from 'vue-router'
import ReportsDashboard from "@/pages/ReportsDashboard.vue";
import ProductsList from "@/pages/ProductsList.vue";
import ProductsNew from "@/pages/ProductsNew.vue";

const routes: RouteRecordRaw[] = [
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

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes: routes
  // extendRoutes: setupLayouts,
})

export default router
