<script setup lang="ts">
import {Product} from "@/api/products";
import {deleteProduct} from "@/api/products"
import BaseDelete from "@/components/forms/BaseDelete.vue";
import {Client, deleteClient} from "@/api/clients";

defineProps({
  item: Client
})

const emits = defineEmits(['delete', 'cancel'])
</script>

<template>
  <BaseDelete :delete-promise="deleteClient" :item="item" @cancel="emits('cancel')" @delete="emits('delete')" />
</template>

<style scoped>

</style>