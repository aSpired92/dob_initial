<script setup lang="ts">
import {Product} from "@/api/products";
import {deleteProduct} from "@/api/products"
import BaseDelete from "@/components/forms/BaseDelete.vue";
import {Client, deleteClient} from "@/api/clients";
import {deleteOrder, Order} from "@/api/orders";

defineProps({
  item: Order
})

const emits = defineEmits(['delete', 'cancel'])
</script>

<template>
  <BaseDelete :delete-promise="deleteOrder" :item="item" @cancel="emits('cancel')" @delete="emits('delete')" obj-message="Czy na pewno chcesz usunąć to zamówienie?" />
</template>

<style scoped>

</style>