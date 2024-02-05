<template>
  <v-card flat border="md">
    <v-card-title class="d-flex align-center pe-2">
      <v-icon icon="mdi-hamburger"></v-icon> &nbsp;
      Lista produktów
      <v-btn flat variant="outlined" color="primary" class="ml-3" @click="router.push({name: 'products-new'})">
        DODAJ
        <template #prepend>
          <v-icon icon="mdi-plus" />
        </template>
      </v-btn>

      <v-spacer></v-spacer>

      <v-text-field
          v-model="search"
          prepend-inner-icon="mdi-magnify"
          density="compact"
          label="Szukaj"
          single-line
          flat
          hide-details
          variant="solo-filled"
      ></v-text-field>
    </v-card-title>

    <v-divider></v-divider>
    <v-data-table v-model:search="search" :items="products" :headers="headers" >

      <template v-slot:item.image="{ item }">
        <v-card class="my-2" elevation="2" rounded>
          <v-img
              :src="`https://cdn.vuetifyjs.com/docs/images/graphics/gpus/${item.image}`"
              height="64"
              cover
          ></v-img>
        </v-card>
      </template>

      <template v-slot:item.rating="{ item }">
        <v-rating
            :model-value="item.rating"
            color="orange-darken-2"
            density="compact"
            size="small"
            readonly
        ></v-rating>
      </template>

      <template v-slot:item.stock="{ item }">
        <div class="text-end">
          <v-chip
              :color="item.stock ? 'green' : 'red'"
              :text="item.stock ? 'In stock' : 'Out of stock'"
              class="text-uppercase"
              label
              size="small"
          ></v-chip>
        </div>
      </template>
    </v-data-table>
  </v-card>
</template>

<script lang="ts" setup>
  import {onMounted, ref} from "vue";
  import {getAllProducts} from "@/api/products";
  import {useRouter} from "vue-router";

  const router = useRouter()

  const products = ref()

  const search = ref()

  const headers = [
    {
      title: 'Nazwa',
      align: 'start',
      key: 'name',
    },
    {
      title: 'Kategoria',
      align: 'end',
      key: 'category'
    },
    {
      title: 'Cena',
      align: 'end',
      key: 'price'
    },
  ]

  onMounted(() => {
    getAllProducts().then((response) => {
      products.value = response.data
    })
  })
</script>
