<script lang="ts" setup>
import VueApexCharts from 'vue3-apexcharts'
import DatepickerField from "@/components/DatepickerField.vue";
import {formatNumber} from "@/helpers";

const series = [44, 55, 13, 43, 22]
const chartOptions = {
  chart: {
    width: 380,
    type: 'pie',

  },
  labels: ['Team A', 'Team B', 'Team C', 'Team D', 'Team E'],
  responsive: [{
    breakpoint: 480,
    options: {
      chart: {
        width: 200
      },
      legend: {
        position: 'bottom'
      }
    }
  }]
}

</script>

<template>
  <div style="max-width: 1200px" class="mx-auto fill-height">
    <div style="height: 50px"></div>
    <div style="height: 50px"></div>
        <v-card flat border="md" class="pa-4 mb-4">
          <v-card-title class="text-center mb-4 font-weight-bold" style="font-size: 20pt">
            <v-icon icon="mdi-chart-bar" class="mr-3" />Raporty
          </v-card-title>
          <v-card-text>
            <v-row>
              <v-col>
                <v-autocomplete
                    label="Klient"
                    item-title="name"
                    return-object
                    color="primary"
                    variant="outlined"
                />
              </v-col>
              <v-col>
                <DatepickerField label="Data od" />
              </v-col>
              <v-col>
                <DatepickerField label="Data do" />
              </v-col>
            </v-row>
          </v-card-text>

          <v-card-actions>
            <div class="text-center w-100">
              <v-btn variant="tonal" width="250px" height="60px" color="primary"><span style="font-size: 12pt">Aktualizuj</span></v-btn>
            </div>

          </v-card-actions>

        </v-card>
    <v-row class="mb-2">
      <v-col>
        <v-card flat border="md" class="text-center">
          <v-card-title style="font-size: 15pt" class="pa-5">
            Sprzedaż z podziałem na produkty
          </v-card-title>
          <v-card-text class="text-center">
            <VueApexCharts  type="pie" width="500" :options="chartOptions" :series="series"></VueApexCharts>
          </v-card-text>
        </v-card>

      </v-col>
      <v-col>
        <v-card flat border="md" class="text-center">
          <v-card-title style="font-size: 15pt" class="pa-5">
            Sprzedaż z podziałem na kategorie produktów
          </v-card-title>
          <VueApexCharts type="pie" width="500" :options="chartOptions" :series="series"></VueApexCharts>
        </v-card>
      </v-col>
    </v-row>

    <v-table
        class="border-md"
    >
      <thead>
      <tr>
        <th colspan="4" class="text-center">
          Klient: <span class="font-weight-bold">TEST</span>
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
      <tr>
        <td>Testowy produkt</td>
        <td class="text-right">2</td>
        <td class="text-right">{{formatNumber(4)}}</td>
        <td class="text-right">{{formatNumber(8)}}</td>
      </tr>
      <tr>
        <td>Testowy produkt</td>
        <td class="text-right">2</td>
        <td class="text-right">{{formatNumber(4)}}</td>
        <td class="text-right">{{formatNumber(8)}}</td>
      </tr>
      <tr>
        <td>Testowy produkt</td>
        <td class="text-right">2</td>
        <td class="text-right">{{formatNumber(4)}}</td>
        <td class="text-right">{{formatNumber(8)}}</td>
      </tr>
      <tr>
        <td>Testowy produkt</td>
        <td class="text-right">2</td>
        <td class="text-right">{{formatNumber(4)}}</td>
        <td class="text-right">{{formatNumber(8)}}</td>
      </tr>
      <tr>
        <td>Testowy produkt</td>
        <td class="text-right">2</td>
        <td class="text-right">{{formatNumber(4)}}</td>
        <td class="text-right">{{formatNumber(8)}}</td>
      </tr>
      </tbody>
      <tfoot>
        <tr>
          <td colspan="2"></td>
          <td class="text-right font-weight-bold">SUMA:</td>
          <td class="text-right">{{formatNumber(8)}}</td>
        </tr>
      </tfoot>
    </v-table>
    <v-table
        class="border-md"
    >
      <thead>
      <tr>
        <th colspan="4" class="text-center">
          Klient: <span class="font-weight-bold">TEST</span>
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
      <tr>
        <td>Testowy produkt</td>
        <td class="text-right">2</td>
        <td class="text-right">{{formatNumber(4)}}</td>
        <td class="text-right">{{formatNumber(8)}}</td>
      </tr>
      <tr>
        <td>Testowy produkt</td>
        <td class="text-right">2</td>
        <td class="text-right">{{formatNumber(4)}}</td>
        <td class="text-right">{{formatNumber(8)}}</td>
      </tr>
      <tr>
        <td>Testowy produkt</td>
        <td class="text-right">2</td>
        <td class="text-right">{{formatNumber(4)}}</td>
        <td class="text-right">{{formatNumber(8)}}</td>
      </tr>
      <tr>
        <td>Testowy produkt</td>
        <td class="text-right">2</td>
        <td class="text-right">{{formatNumber(4)}}</td>
        <td class="text-right">{{formatNumber(8)}}</td>
      </tr>
      <tr>
        <td>Testowy produkt</td>
        <td class="text-right">2</td>
        <td class="text-right">{{formatNumber(4)}}</td>
        <td class="text-right">{{formatNumber(8)}}</td>
      </tr>
      </tbody>
      <tfoot>
      <tr>
        <td colspan="2"></td>
        <td class="text-right font-weight-bold">SUMA:</td>
        <td class="text-right">{{formatNumber(8)}}</td>
      </tr>
      </tfoot>
    </v-table>
    <v-table
        class="border-md"
    >
      <thead>
      <tr>
        <th colspan="4" class="text-center">
          Klient: <span class="font-weight-bold">TEST</span>
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
      <tr>
        <td>Testowy produkt</td>
        <td class="text-right">2</td>
        <td class="text-right">{{formatNumber(4)}}</td>
        <td class="text-right">{{formatNumber(8)}}</td>
      </tr>
      <tr>
        <td>Testowy produkt</td>
        <td class="text-right">2</td>
        <td class="text-right">{{formatNumber(4)}}</td>
        <td class="text-right">{{formatNumber(8)}}</td>
      </tr>
      <tr>
        <td>Testowy produkt</td>
        <td class="text-right">2</td>
        <td class="text-right">{{formatNumber(4)}}</td>
        <td class="text-right">{{formatNumber(8)}}</td>
      </tr>
      <tr>
        <td>Testowy produkt</td>
        <td class="text-right">2</td>
        <td class="text-right">{{formatNumber(4)}}</td>
        <td class="text-right">{{formatNumber(8)}}</td>
      </tr>
      <tr>
        <td>Testowy produkt</td>
        <td class="text-right">2</td>
        <td class="text-right">{{formatNumber(4)}}</td>
        <td class="text-right">{{formatNumber(8)}}</td>
      </tr>
      </tbody>
      <tfoot>
      <tr>
        <td colspan="2"></td>
        <td class="text-right font-weight-bold">SUMA:</td>
        <td class="text-right">{{formatNumber(8)}}</td>
      </tr>
      </tfoot>
    </v-table>
    <div style="height: 50px"></div>
  </div>
</template>

