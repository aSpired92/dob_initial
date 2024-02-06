<script lang="ts" setup>
import {onMounted, ref} from "vue";
import {addProduct, getProductCategories, Product, updateProduct} from "@/api/products";
import ProductsCancel from "@/components/forms/ProductsCancel.vue";

const categories = ref()

const newItem = ref<Product>({
  category: null,
  name: null,
  price: null
})

const loading = ref(false)
const notification = ref(false)
const correct = ref(false)

const showNotification = () => {
  loading.value = true
  notification.value = true
}

const onResponse = (ok: boolean) => {
  emits('action')
  correct.value = ok
  loading.value = false
}

const emits = defineEmits(['action'])

const props = defineProps({
  item: Product
})

const submit = () => {
  showNotification()
  if (!props.item) {
    if (newItem.value){
      addProduct(newItem.value).then(() => {
        onResponse(true)
      })
    }
  } else {
    updateProduct(props.item).then(() => {
      onResponse(true)
    })
  }
}

onMounted(() => {
  getProductCategories().then(response => {
    categories.value = response.data
  })
  if (props.item) {
    newItem.value = props.item
  }
})

</script>

<template>
  <v-sheet
    border="md"
    class="pa-6"
  >


    <h4 class="text-h5 font-weight-bold text-center mb-4">{{ props.item ? "Edytuj produkt" : "Nowy produkt" }}</h4>

    <v-form @submit.prevent @submit="submit">
      <v-autocomplete
          label="Kategoria"
          :items="categories"
          item-title="name"
          return-object
          color="primary"
          variant="outlined"
          v-model="newItem.category"
      />
      <v-text-field label="Nazwa" variant="outlined" color="primary" v-model="newItem.name" />
      <v-text-field label="Cena" variant="outlined" color="primary" type="number" step="0.01" v-model="newItem.price" />

      <v-btn
          block
          class="text-none mb-2"
          color="primary"
          size="x-large"
          variant="flat"
          type="submit"
      >
        ZAPISZ
      </v-btn>

      <v-dialog width="400" persistent>
        <template v-slot:activator="{ props }">
          <v-btn
              block
              class="text-none text-black"
              color="primary"
              size="x-large"
              variant="outlined"
              v-bind="props"
          >
            ANULUJ
          </v-btn>
        </template>

        <template v-slot:default="{ isActive }">
          <ProductsCancel @action="() => {
             isActive.value = false
             emits('action')
          }"/>
        </template>
      </v-dialog>

    </v-form>


  </v-sheet>
</template>


