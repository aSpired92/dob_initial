<script setup lang="ts">
import {computed, ref} from "vue";
import {formattedDate} from "@/helpers";

const fDate = computed(() => {
  return date.value ? formattedDate(date.value) : ""
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
          :model-value="fDate"
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