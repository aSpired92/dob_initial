<script setup lang="ts">
import {computed, ref} from "vue";
import {formattedDate} from "@/helpers";
import {useDate} from "vuetify";

const fDate = computed(() => {
  return model.value ? formattedDate(model.value) : ""
});

const model = defineModel()

defineProps({
  label: String
})

const menuShow = ref(false)



const convertDate = (item) => {
  model.value = new Date(item) // Wed Nov 29 2023 18:00:00 GMT-0600
}
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
          clearable
          @click:clear="model = null"
      ></v-text-field>
    </template>
    <v-date-picker v-model="model" hide-actions color="primary" @update:modelValue.prevent() @update="convertDate" />
  </v-menu>
</template>

<style scoped>

</style>