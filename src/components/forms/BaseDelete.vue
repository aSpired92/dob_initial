<script setup lang="ts">
import {Product} from "@/api/products";
import {deleteProduct} from "@/api/products"

const props = defineProps({
  item: Object,
  deletePromise: {
    type: Function,
    required: true
  }
})

const deleteItem = () => {
  if (props.item?._id) {
    props.deletePromise(props.item?._id).then(() => {
      emits('delete')
    })
  }
}

const emits = defineEmits(['delete', 'cancel'])
</script>

<template>
  <v-sheet
      border="md"
      class="pa-6"
      v-if="item"
  >
    <h4 class="text-h5 font-weight-bold mb-4">Usuwanie</h4>

    <p class="mb-8">
      Czy na pewno chcesz usunąć obiekt: <span class="font-weight-bold">{{item.name}}</span>?
      <br>
      Usuniętych danych nie da się już odzyskać
    </p>

    <v-btn
        block
        class="text-none text-white mb-4"
        color="red"
        size="x-large"
        variant="flat"
        @click="deleteItem"
    >
      Usuń
    </v-btn>

    <v-btn
        block
        class="text-none text-black"
        color="red"
        size="x-large"
        variant="outlined"
        @click="emits('cancel')"
    >
      Anuluj
    </v-btn>
  </v-sheet>
</template>

<style scoped>

</style>