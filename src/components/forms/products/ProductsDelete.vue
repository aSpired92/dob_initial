<script setup lang="ts">
import {Product} from "@/api/products";
import {deleteProduct} from "@/api/products"
import BaseDelete from "@/components/forms/BaseDelete.vue";

defineProps({
  item: Product
})

const emits = defineEmits(['delete', 'cancel'])
</script>

<template>
  <BaseDelete :delete-promise="deleteProduct" :item="item" @cancel="emits('cancel')" @delete="emits('delete')" />
</template>

<style scoped>

</style>