<script lang="ts" setup>
import DatepickerField from "@/components/DatepickerField.vue";
import {formatNumber} from "@/helpers";
import {computed, onMounted, provide, ref, watch} from "vue";
import {getReports} from "@/api/reports";
import {getAllClients} from "@/api/clients";
import PieChart from "@/components/PieChart.vue";

const categoryReport = ref(null)
const nameReport = ref(null)
const totalReport = ref(null)
const tableReport = ref(null)

const categoryData = ref()
const categoryLabel = ref()
const nameData = ref()
const nameLabel = ref()

const clients = ref()

const client = ref<string | null>(null)
const dateFrom = ref<string | null>(null)
const dateTo = ref<string | null>(null)

const properData = computed(() => {
  return categoryReport && nameReport && totalReport && tableReport
})

watch(dateFrom, () => {
  console.log(dateFrom.value)
})

const reloader = ref(1)

const update = () => {
  getAllClients().then(response => {
    clients.value = response.data
  })
  return getReports({client: client.value, dateFrom: dateFrom.value, dateTo: dateTo.value}).then(response => {

    const data = response.data

    categoryReport.value = data.categories
    nameReport.value = data.names
    totalReport.value = data.total[0]
    tableReport.value = data.table

    categoryData.value = categoryReport.value.map(obj => obj.totalQuantity)
    categoryLabel.value = categoryReport.value.map(obj => obj._id)


    nameData.value = nameReport.value.map(obj => obj.totalQuantity)
    nameLabel.value = nameReport.value.map(obj => obj._id)

    reloader.value++


  })
}





onMounted(() => {
  update()
})
</script>

<template>
  <div style="max-width: 1200px; " class="mx-auto fill-height w-100">
    <div v-if="properData">
      <div style="height: 50px"></div>
      <div style="height: 50px"></div>
      <v-card flat border="md" class="pa-4 mb-4">
        <v-card-title class="text-center mb-4 font-weight-bold" style="font-size: 20pt">
          <v-icon icon="mdi-chart-bar" class="mr-3"/>
          Raporty
        </v-card-title>
        <v-card-text>
          <v-row>
            <v-col>
              <v-autocomplete
                  label="Klient"
                  :items="clients"
                  v-model="client"
                  item-title="name"
                  return-object
                  color="primary"
                  variant="outlined"
                  clearable
              />
            </v-col>
            <v-col>
              <DatepickerField label="Data od" v-model="dateFrom"/>
            </v-col>
            <v-col>
              <DatepickerField label="Data do" v-model="dateTo"/>
            </v-col>
          </v-row>
        </v-card-text>

        <v-card-actions>
          <div class="text-center w-100">
            <v-btn variant="tonal" width="250px" height="60px" color="primary" @click="update"><span
                style="font-size: 12pt">Aktualizuj</span></v-btn>
          </div>

        </v-card-actions>

      </v-card>

      <v-row class="mb-2" v-if="categoryReport && nameReport">
        <v-col>
          <v-card flat border="md" class="text-center">
            <v-card-title style="font-size: 15pt" class="pa-5">
              Sprzedaż z podziałem na produkty
            </v-card-title>
            <v-card-text class="text-center">
              <PieChart :data="nameData" :labels="nameLabel" :key="reloader"/>
            </v-card-text>
          </v-card>

        </v-col>
        <v-col>
          <v-card flat border="md" class="text-center">
            <v-card-title style="font-size: 15pt" class="pa-5">
              Sprzedaż z podziałem na kategorie produktów
            </v-card-title>
            <v-card-text class="text-center">
              <PieChart :data="categoryData" :labels="categoryLabel" :key="reloader"/>
            </v-card-text>
          </v-card>
        </v-col>
      </v-row>

      <v-row class="my-2" v-if="totalReport">
        <v-col>
          <v-card flat class="border-md">
            <v-card-title class="text-center">Sprzedanych sztuk</v-card-title>
            <v-card-text class="text-center stat">
              {{ totalReport.totalQuantity }} szt.
            </v-card-text>
          </v-card>
        </v-col>
        <v-col>
          <v-card flat class="border-md">
            <v-card-title class="text-center">Łączna kwota</v-card-title>
            <v-card-text class="text-center stat">
              {{ formatNumber(totalReport.totalValue) }} PLN
            </v-card-text>
          </v-card>
        </v-col>
      </v-row>

      <v-table
          v-if="tableReport"
          class="border-md"
          v-for="client in tableReport"
      >
        <thead>
        <tr>
          <th colspan="4" class="text-center bg-grey-lighten-3">
            <span class="font-weight-regular">Klient:</span> {{client.clientName}}
          </th>
        </tr>
        <tr>
          <th class="text-left">
            Produkt
          </th>
          <th class="text-right">
            Ilość (szt.)
          </th>
          <th class="text-right">
            Cena jednostkowa (PLN)
          </th>
          <th class="text-right">
            Razem
          </th>
        </tr>
        </thead>
        <tbody>
        <tr v-for="product in client.data">
          <td>{{ product.name }}</td>
          <td class="text-right">{{ product.quantity }}</td>
          <td class="text-right">{{ formatNumber(Number(product.price)) }}</td>
          <td class="text-right">{{ formatNumber(Number(product.total)) }}</td>
        </tr>
        </tbody>
        <tfoot>
        <tr>
          <td colspan="2"></td>
          <td class="text-right font-weight-bold">SUMA:</td>
          <td class="text-right font-weight-bold">{{ formatNumber(Number(client.totalPrice)) }}</td>
        </tr>
        </tfoot>
      </v-table>

      <div style="height: 50px"></div>
    </div>
  </div>

</template>

<style lang="sass" scoped>
.stat
  font-size: 30pt
  padding: 40px 0

th
  font-weight: bold !important
</style>

