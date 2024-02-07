<script lang="ts" setup>
import {getAllProducts} from "@/api/products";
import ProductsForm from "@/components/forms/products/ProductsForm.vue"
import BaseTable from "@/components/BaseTable.vue";
import {formatNumber, getCategoryColor} from "@/helpers";
import ProductsDelete from "@/components/forms/products/ProductsDelete.vue";
import {getAllClients} from "@/api/clients";
import ClientsForm from "@/components/forms/clients/ClientsForm.vue";
import ClientsDelete from "@/components/forms/clients/ClientsDelete.vue";

const headers = [
  {
    title: 'Nazwa',
    value: 'name',
    key: 'name'
  },
  {
    title: 'Adres',
    key: 'address'
  },
  {
    title: 'Kategoria',
    value: 'category',
    align: 'center',
  },
]
</script>

<template>
  <BaseTable
      :headers="headers"
      :data-promise="getAllClients"
      :item-form="ClientsForm"
      :item-delete="ClientsDelete"
      icon="mdi-account-tie"
      title="Lista klientów"
  >
    <template v-slot:item.category="row">
      <div class="text-center">
        <v-chip
            :color="getCategoryColor(row.item.category.id)"
            label
            small
        >
          {{ row.item.category.name }}
        </v-chip>
      </div>
    </template>

    <template v-slot:item.address="row">
      <div>
        {{ `${row.item.postcode}, ${row.item.city}, ${row.item.street}, ${row.item.number}` }}
      </div>
    </template>
  </BaseTable>
</template>

<style scoped lang="sass">
th
  font-weight: bold !important
</style>
