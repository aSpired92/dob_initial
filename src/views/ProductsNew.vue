<script lang="ts" setup>
import {onMounted, ref} from "vue";
import {addProduct, getProductCategories} from "@/api/products";
import router from "@/router";

const categories = ref()

const name = ref()
const category = ref()
const price = ref()


const submit = () => {
  addProduct(name.value, category.value, price.value).then(() => {
    router.push({name: 'products-list'})
  })

}

onMounted(() => {
  getProductCategories().then(response => {
    categories.value = response.data
  })
})

</script>

<template>
  <v-sheet
    border="md"
    class="pa-6 mx-auto"
    max-width="400"
  >
    <h4 class="text-h5 font-weight-bold text-center mb-4">Nowy produkt</h4>

    <v-form @submit.prevent @submit="submit">
      <v-autocomplete
          label="Kategoria"
          :items="categories"
          color="primary"
          variant="outlined"
          v-model="category"
      />
      <v-text-field label="Nazwa" variant="outlined" color="primary" v-model="name" />
      <v-text-field label="Cena" variant="outlined" color="primary" type="number" step="0.01" v-model="price" />

      <v-btn
          block
          class="text-none mb-2"
          color="primary"
          size="x-large"
          variant="flat"
          type="submit"
      >
        DODAJ
      </v-btn>

      <v-btn
          block
          class="text-none text-black"
          color="primary"
          size="x-large"
          variant="outlined"
          @click="router.push({name: 'products-list'})"
      >
        ANULUJ
      </v-btn>
    </v-form>


  </v-sheet>
</template>


