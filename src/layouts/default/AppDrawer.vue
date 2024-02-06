<script setup lang="ts">
import {useRouter} from "vue-router";

const router = useRouter()
</script>

<template>
  <v-navigation-drawer>
    <v-list nav>
      <v-list-item prepend-icon="mdi-chart-bar" title="Raporty" value="reports" @click="router.push({name: 'reports'})"></v-list-item>
      <v-list-item prepend-icon="mdi-hamburger" title="Produkty" value="products" @click="router.push({name: 'products'})"></v-list-item>
      <v-list-item prepend-icon="mdi-account-tie" title="Klienci" value="clients" @click="router.push({name: 'clients'})"></v-list-item>
      <v-list-item prepend-icon="mdi-order-bool-ascending-variant" title="Zamówienia" value="orders" @click="router.push({name: 'orders'})"></v-list-item>
    </v-list>
  </v-navigation-drawer>
</template>

<style scoped>

</style>
