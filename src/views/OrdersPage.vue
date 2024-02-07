<script lang="ts" setup>
import {getAllProducts} from "@/api/products";
import ProductsForm from "@/components/forms/products/ProductsForm.vue"
import BaseTable from "@/components/BaseTable.vue";
import {formatNumber, formattedDate, getCategoryColor} from "@/helpers";
import ProductsDelete from "@/components/forms/products/ProductsDelete.vue";
import {getAllClients} from "@/api/clients";
import ClientsForm from "@/components/forms/clients/ClientsForm.vue";
import ClientsDelete from "@/components/forms/clients/ClientsDelete.vue";
import OrdersForm from "@/components/forms/orders/OrdersForm.vue";
import OrdersDelete from "@/components/forms/orders/OrdersDelete.vue";
import {getAllOrders} from "@/api/orders";
import DeletedSnackbar from "@/components/snackbars/DeletedSnackbar.vue";
import {ref} from "vue";

const expandedOrders = ref(null)

const headers = [
  {
    title: 'Klient',
    value: 'client.name',
    key: 'client.name'
  },
  {
    title: 'Adres',
    value: 'client',
    key: 'address'
  },
  {
    title: 'Data',
    value: 'updatedAt',
    key: 'date',
    align: 'center',
  },
]
</script>

<template>
  <BaseTable
      :headers="headers"
      :data-promise="getAllOrders"
      :item-form="OrdersForm"
      :item-delete="OrdersDelete"
      icon="mdi-order-bool-ascending-variant"
      title="Lista zamówień"
      :expanded="expandedOrders"
      show-expand
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

    <template v-slot:item.address="{ value }">
      <div v-if="value">
        {{ `${value.postcode}, ${value.city}, ${value.street}, ${value.number}` }}
      </div>
    </template>

    <template v-slot:item.date="{ value }">
      <div>
        {{ formattedDate(new Date(value)) }}
      </div>
    </template>

    <template v-slot:expanded-row="{ item }">
      <tr v-for="element in item.elements" class="bg-yellow-lighten-5" :key="item._id">
        <td colspan="2" class=" ">
          <v-chip
            color="orange"
            label
            small
            class="mr-6 font-weight-bold"
          >
            {{ element.quantity }} x
          </v-chip>
          {{element.product.name}}
        </td>
        <td colspan="4"></td>
      </tr>
    </template>
  </BaseTable>
</template>

<style scoped lang="sass">
th
  font-weight: bold !important
</style>
