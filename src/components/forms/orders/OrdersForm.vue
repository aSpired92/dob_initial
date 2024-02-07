<script lang="ts" setup>
import {onMounted, ref} from "vue";
import {addProduct, getAllProducts, getProductCategories, Product, updateProduct} from "@/api/products";
import BaseForm from "@/components/forms/BaseForm.vue";
import {addClient, Client, getAllClients, getClientCategories, updateClient} from "@/api/clients";
import {addOrder, Order, type OrderElementInterface, updateOrder} from "@/api/orders";

const clients = ref<Client[]>()
const products = ref<Product[]>()

const field = ref(true)

const emptyElement: OrderElementInterface = {
  product: null,
  quantity: null
}

const order = ref<Order>({
  client: null,
  elements: [
      structuredClone(emptyElement)
  ]
})

const emits = defineEmits(['save', 'cancel'])

const props = defineProps({
  item: Order
})

const submit = () => {
  const newOrder = order.value
  if (newOrder.elements) newOrder.elements = newOrder.elements.slice(0, -1);
  if (!props.item) {
    if (order.value){
      addOrder(removeBlanks(newOrder)).then(() => {
        emits('save')
      })
    }
  } else {
    updateOrder(removeBlanks(newOrder)).then(() => {
      emits('save')
    })
  }
}

const removeBlanks = (order: Order) => {
  const obj = order
  if (obj.elements) {
    for (let index = obj.elements.length - 1; index >= 0; index--) {
      if (obj.elements[index] === emptyElement) {
        obj.elements.splice(index, 1)
      }
    }
  }
  return obj
}

const update = () => {



  if (order.value.elements) {
    order.value = removeBlanks(order.value)
    if (order.value.elements) order.value.elements.push(structuredClone(emptyElement))
  } else {
    order.value.elements = [structuredClone(emptyElement)]
  }

}

onMounted(() => {
  getAllClients().then((response) => {
    clients.value = response.data
  })
  getAllProducts().then((response) => {
    products.value = response.data
  })
  if (props.item) {
    order.value = props.item
    update()
  }
})

</script>

<template>
  <BaseForm width="400" :new-object="!props.item" name="obiekt zamówienia" @save="submit" @cancel="() => {
    emits('cancel')

  }">
    <v-autocomplete
        label="Klient"
        :items="clients"
        item-title="name"
        return-object
        color="primary"
        variant="outlined"
        v-model="order.client"
    />
    <v-row v-for="(productElement, index) in order.elements" label="Imię i nazwisko zbieracza" class="q-mb-md" :key="index" >
      <v-col>
        <v-autocomplete
            v-if="field"
            v-model="order.elements[index].product"
            label="Produkt"
            :items="products"
            item-title="name"
            return-object
            color="primary"
            variant="outlined"
            @update:model-value="update"
            hide-details
        />
      </v-col>
      <v-col cols="4">
        <v-text-field label="Ilość" type="number" variant="outlined" color="primary" v-model="order.elements[index].quantity" hide-details/>
      </v-col>
    </v-row>



  </BaseForm>
</template>


