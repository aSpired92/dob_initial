<script lang="ts" setup>
import {getAllProducts} from "@/api/products";
import ProductsForm from "@/components/forms/products/ProductsForm.vue"
import BaseTable from "@/components/BaseTable.vue";
import {formatNumber, getCategoryColor} from "@/helpers";
import ProductsDelete from "@/components/forms/products/ProductsDelete.vue";

const headers = [
  {
    title: 'Nazwa',
    value: 'name',
    key: 'name'
  },
  {
    title: 'Kategoria',
    value: 'category',
    align: 'end',
  },
  {
    title: 'Cena (PLN)',
    value: 'price',
    align: 'end',
    key: 'price'
  },
]
</script>

<template>
  <BaseTable
      :headers="headers"
      :data-promise="getAllProducts"
      :item-form="ProductsForm"
      :item-delete="ProductsDelete"
      icon="mdi-hamburger"
      title="Lista produktów"
  >
        <template v-slot:item.category="row">
          <div class="text-right">
            <v-chip
                :color="getCategoryColor(row.item.category.id)"
                label
                small
            >
              {{ row.item.category.name }}
            </v-chip>
          </div>
        </template>

        <template v-slot:item.price="row">
          <div class="text-right">
              {{ formatNumber(row.item.price) }}
          </div>
        </template>
  </BaseTable>
</template>

<style scoped lang="sass">
th
  font-weight: bold !important
</style>
