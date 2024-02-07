<script lang="ts" setup>
import {onMounted, ref} from "vue";
import {addProduct, getProductCategories, Product, updateProduct} from "@/api/products";
import BaseForm from "@/components/forms/BaseForm.vue";
import {addClient, Client, getClientCategories, updateClient} from "@/api/clients";

const categories = ref()

const newItem = ref<Client>({
  city: null,
  number: null,
  postcode: null,
  street: null,
  category: null,
  name: null
})

const emits = defineEmits(['save', 'cancel'])

const props = defineProps({
  item: Client
})

const submit = () => {
  if (!props.item) {
    if (newItem.value){
      addClient(newItem.value).then(() => {
        emits('save')
      })
    }
  } else {
    updateClient(props.item).then(() => {
      emits('save')
    })
  }
}

onMounted(() => {
  getClientCategories().then(response => {
    categories.value = response.data
  })
  if (props.item) {
    newItem.value = props.item
  }
})

</script>

<template>
  <BaseForm width="400" :new-object="!props.item" name="klient" @save="submit" @cancel="() => {
    emits('cancel')
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
    <v-text-field label="Miejscowość" variant="outlined" color="primary" v-model="newItem.city" />
    <v-text-field label="Ulica" variant="outlined" color="primary" v-model="newItem.street" />
    <v-row>
      <v-col>
        <v-text-field label="Numer" variant="outlined" color="primary" v-model="newItem.number" />
      </v-col>
      <v-col>
        <v-text-field label="Kod pocztowy" variant="outlined" color="primary" v-model="newItem.postcode" />
      </v-col>
    </v-row>
  </BaseForm>
</template>


