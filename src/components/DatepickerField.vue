<script setup lang="ts">
import {computed, ref} from "vue";

const formattedDate = computed(() => {
  return date.value ? date.value.toLocaleDateString("pl") : "";
});

defineProps({
  label: String
})

const menuShow = ref(false)
const date = ref()
</script>

<template>
  <v-menu v-model="menuShow" :close-on-content-click="false">
    <template v-slot:activator="{ props }">
      <v-text-field
          class="w-100"
          :label="label"
          :model-value="formattedDate"
          readonly
          v-bind="props"
          variant="outlined"
          color="primary"
          hide-details
      ></v-text-field>
    </template>
    <v-date-picker v-model="date" hide-actions color="primary"/>
  </v-menu>
</template>

<style scoped>

</style>