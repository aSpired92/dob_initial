<script lang="ts" setup>
import {onMounted, ref} from "vue";
import {getAllProducts} from "@/api/products";
import {useRouter} from "vue-router";
import ProductsForm from "@/components/forms/ProductsForm.vue";
import ProductsDelete from "@/components/forms/ProductsDelete.vue";
import {md5} from "js-md5";
import {useSnackbarStore} from "@/stores/snackbar";
import SavedSnackbar from "@/components/snackbars/SavedSnackbar.vue";
import DeletedSnackbar from "@/components/snackbars/DeletedSnackbar.vue";

const products = ref()
const search = ref()

const addLoading = ref(false)

const actionsWidth = '70px'

const {addSnackbar} = useSnackbarStore()

function formatNumber(number: number): string {
  const options: Intl.NumberFormatOptions = {
    minimumFractionDigits: 2,
    maximumFractionDigits: 2,
    useGrouping: true,
  };

  const locale = "pl-PL";

  return number.toLocaleString(locale, options);
}

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
  {
    title: 'Edytuj',
    key: 'edit',
    align: 'center',
    sortable: false,
    width: actionsWidth
  },
  {
    title: 'Usuń',
    key: 'delete',
    align: 'center',
    sortable: false,
    width: actionsWidth
  },
]

const refresh = async () => {
  return getAllProducts().then((response) => {
    products.value = response.data
  })
}

const getCategoryColor = (id: number) => {
  const colors = [
    "orange",
    "brown",
    "green",
    "blue"
  ]

  return colors[id - 1]

}

onMounted(() => {
  refresh()
})
</script>

<template>
  <v-data-table v-model:search="search" :items="products" :headers="headers" fixed-header fixed-footer
                class="border-md mx-auto" style="max-height: 100%; width: 900px" no-data-text='Brak rekordów. Dodaj rekord używając przycisku "Dodaj"'>

    <template v-slot:top>
      <div class="d-flex align-center pa-3">
        <v-icon icon="mdi-hamburger" size="25pt"/>
        <span class="mx-4 font-weight-bold" style="font-size: 15pt">Lista produktów</span>

        <v-dialog width="400" persistent>
          <template v-slot:activator="{ props }">
            <v-btn flat variant="tonal" color="primary" class="ml-3" v-bind="props" @click="addLoading = true">
              DODAJ
              <template #prepend>
                <v-progress-circular v-if="addLoading" indeterminate size="x-small" />
                <v-icon v-else icon="mdi-plus"/>
              </template>
            </v-btn>
          </template>

          <template v-slot:default="{ isActive }">
            <ProductsForm @action="() => {
                            isActive.value = false
                            refresh().then(() => {
                              addLoading = false
                              addSnackbar(SavedSnackbar, 3)
                            })
                          }"/>
          </template>
        </v-dialog>

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

      </div>
      <v-divider/>
    </template>

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

    <template v-slot:item.edit="row">
      <div class="text-center">
        <v-dialog width="400" persistent>
          <template v-slot:activator="{ props }">
            <v-btn icon color="primary" variant="tonal" size="small" v-bind="props" @click="row.item.editLoading = true">
              <v-progress-circular v-if="row.item.editLoading" indeterminate />
              <v-icon v-else icon="mdi-pencil" />
            </v-btn>
          </template>

          <template v-slot:default="{ isActive }">
            <ProductsForm :item="row.item"
              @action="() => {
                isActive.value = false
                refresh().then(() => {
                  row.item.editLoading = false
                  addSnackbar(SavedSnackbar, 3)
                })
              }"/>
          </template>
        </v-dialog>

      </div>
    </template>

    <template v-slot:item.delete="row">
      <div class="text-center">
        <v-dialog width="400" persistent>
        <template v-slot:activator="{ props }">
          <v-btn icon color="red" variant="tonal" size="small" v-bind="props" @click="row.item.deleteLoading = true">
            <v-progress-circular v-if="row.item.deleteLoading" indeterminate />
            <v-icon v-else icon="mdi-delete" />
          </v-btn>
        </template>

        <template v-slot:default="{ isActive }">
          <ProductsDelete :item="row.item" @action="() => {
                      isActive.value = false
                      refresh().then(() => {
                        row.item.deleteLoading = false
                        addSnackbar(DeletedSnackbar, 3)
                      })
                    }"/>
        </template>
      </v-dialog>

      </div>
    </template>
  </v-data-table>
</template>

<style scoped lang="sass">
.price
  width: 120px
  padding-right: 30px !important

.action
  width: 50px
  padding: 0 8px !important

th
  font-weight: bold !important
</style>
