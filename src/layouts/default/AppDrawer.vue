<script setup lang="ts">
import {useRouter} from "vue-router";

const router = useRouter()
</script>

<template>
  <v-navigation-drawer>
    <v-list density="compact" nav>
      <v-list-item prepend-icon="mdi-chart-bar" title="Raporty" value="reports" @click="router.push({name: 'reports'})"></v-list-item>

<!--      PRODUKTY -->
      <v-list-group value="products">
        <template v-slot:activator="{ props }">
          <v-list-item
            v-bind="props"
            title="Produkty"
            prepend-icon="mdi-hamburger"
          ></v-list-item>
        </template>

        <v-list-item
          title="Nowy"
          prepend-icon="mdi-plus"
          value="products-new"
          @click="router.push({name: 'products-new'})"
        ></v-list-item>
        <v-list-item
          title="Lista"
          prepend-icon="mdi-format-list-text"
          value="products-list"
          @click="router.push({name: 'products-list'})"
        ></v-list-item>
      </v-list-group>

<!--      KLIENCI -->
      <v-list-group value="clients">
        <template v-slot:activator="{ props }">
          <v-list-item
            v-bind="props"
            title="Klienci"
            prepend-icon="mdi-hamburger"
          ></v-list-item>
        </template>

        <v-list-item
          title="Nowy"
          prepend-icon="mdi-plus"
          value="clients-new"
          @click="router.push({name: 'clients-new'})"
        ></v-list-item>
        <v-list-item
          title="Lista"
          prepend-icon="mdi-format-list-text"
          value="clients-list"
          @click="router.push({name: 'clients-list'})"
        ></v-list-item>
      </v-list-group>

<!--      ZAMÓWIENIA -->
      <v-list-group value="orders">
        <template v-slot:activator="{ props }">
          <v-list-item
            v-bind="props"
            title="Zamówienia"
            prepend-icon="mdi-hamburger"
          ></v-list-item>
        </template>

        <v-list-item
          title="Nowe"
          prepend-icon="mdi-plus"
          value="orders-new"
          @click="router.push({name: 'orders-new'})"
        ></v-list-item>
        <v-list-item
          title="Lista"
          prepend-icon="mdi-format-list-text"
          value="orders-list"
          @click="router.push({name: 'orders-list'})"
        ></v-list-item>
      </v-list-group>
    </v-list>
  </v-navigation-drawer>
</template>

<style scoped>

</style>
