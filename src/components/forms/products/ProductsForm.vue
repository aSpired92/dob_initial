<script lang="ts" setup>
import {onMounted, ref} from "vue";
import {addProduct, getProductCategories, Product, updateProduct} from "@/api/products";
import BaseForm from "@/components/forms/BaseForm.vue";

const categories = ref()

const newItem = ref<Product>({
  category: null,
  name: null,
  price: null
})

const emits = defineEmits(['save', 'cancel'])

const props = defineProps({
  item: Product
})

const submit = () => {
  if (!props.item) {
    if (newItem.value){
      addProduct(newItem.value).then(() => {
        emits('save')
      })
    }
  } else {
    updateProduct(props.item).then(() => {
      emits('save')
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
  <BaseForm width="400" :new-object="!props.item" name="produkt" @save="submit" @cancel="() => {
    emits('cancel')
    console.log('CANCEL')
  }">
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
  </BaseForm>
</template>


