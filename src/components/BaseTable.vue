<script lang="ts" setup>
import {onMounted, ref, useSlots} from "vue";
import {getAllProducts} from "@/api/products";
import ProductsForm from "@/components/forms/products/ProductsForm.vue";
import ProductsDelete from "@/components/forms/products/ProductsDelete.vue";
import {useSnackbarStore} from "@/stores/snackbar";
import SavedSnackbar from "@/components/snackbars/SavedSnackbar.vue";
import DeletedSnackbar from "@/components/snackbars/DeletedSnackbar.vue";
import type {AxiosResponse} from "axios";
import {formatNumber, getCategoryColor} from "@/helpers";
import BaseDelete from "@/components/forms/BaseDelete.vue";

const props = defineProps({
  dataPromise: {
    required: true,
    type: Function
  },
  headers: {
    required: true,
    type: Object
  },
  icon: {
    required: true,
    type: String
  },
  title: {
    required: true,
    type: String
  },
  itemForm: Object,
  itemDelete: Object,
})

const slots = useSlots()

const items = ref()
const search = ref()

const addLoading = ref(false)

const actionsWidth = '70px'

const {addSnackbar} = useSnackbarStore()

const headers = [
  ...props.headers,
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
  return props.dataPromise().then((response: AxiosResponse) => {
    items.value = response.data
  })
}



onMounted(() => {
  refresh()
})
</script>

<template>
  <v-data-table v-model:search="search" :items="items" :headers="headers" fixed-header fixed-footer
                class="border-md mx-auto" style="max-height: 100%; width: 900px" no-data-text='Brak rekordów. Dodaj rekord używając przycisku "Dodaj"'>

    <template v-slot:top>
      <div class="d-flex align-center pa-3">
        <v-icon :icon="icon" size="25pt"/>
        <span class="mx-4 font-weight-bold" style="font-size: 15pt">{{title}}</span>

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
            <component :is="itemForm"
                 @save="() => {
                    isActive.value = false
                    refresh().then(() => {
                      addLoading = false
                      addSnackbar(SavedSnackbar, 3)
                    })
                  }"
                 @cancel="() => {
                   addLoading = false
                    isActive.value = false
                  }"
          />/>
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
                <component :is="itemForm" :item="row.item"
                  @save="() => {
                    isActive.value = false
                    refresh().then(() => {
                      row.item.editLoading = false
                      addSnackbar(SavedSnackbar, 3)
                    })
                  }"
                  @cancel="() => {
                    isActive.value = false
                    row.item.editLoading = false
                  }"
                />
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
              <component :is="itemDelete" :item="row.item"
                @delete="() => {
                  isActive.value = false
                  refresh().then(() => {
                    row.item.deleteLoading = false
                    addSnackbar(DeletedSnackbar, 3)
                  })
                }"
                 @cancel="() => {
                  isActive.value = false
                  row.item.deleteLoading = false
                }"
              />
            </template>
          </v-dialog>

          </div>
        </template>

    <template v-for="(_, slot) in slots" #[slot]="props">
      <slot :name="slot" v-bind="props" />
    </template>

  </v-data-table>
</template>

<style scoped lang="sass">
th
  font-weight: bold !important
</style>
