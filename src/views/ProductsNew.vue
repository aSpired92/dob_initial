<script lang="ts" setup>
import {onMounted, ref} from "vue";
import {getProductCategories} from "@/api/products";

const categories = ref()

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
    <h4 class="text-h5 font-weight-bold mb-4">Nowy produkt</h4>

    <v-form>
      <v-text-field label="Nazwa" variant="outlined" color="primary" />
      <v-autocomplete
        label="Kategoria"
        :items="categories"
        color="primary"
        variant="outlined"
      />
      <v-text-field label="Cena" variant="outlined" color="primary" type="number" step="0.01" />
    </v-form>

    <v-btn
      block
      class="text-none mb-2"
      color="primary"
      size="x-large"
      variant="flat"
    >
      DODAJ
    </v-btn>

    <v-btn
      block
      class="text-none text-black"
      color="primary"
      size="x-large"
      variant="outlined"
    >
      ANULUJ
    </v-btn>
  </v-sheet>
</template>


