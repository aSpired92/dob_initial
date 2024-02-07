<script lang="ts" setup>

import BaseCancel from "@/components/forms/BaseCancel.vue";

const props = defineProps({
  name: {
    required: true,
    type: String
  },
  newObject: {
    required: true,
    type: Boolean
  },
  width: {
    required: true,
    type: String
  }
})

const emits = defineEmits(['save', 'cancel'])

</script>

<template>
  <v-sheet
      border="md"
      class="pa-6"
  >


    <h4 class="text-h5 font-weight-bold text-center mb-4">{{ newObject ? `Nowy ${name}` : `Edytuj ${name}` }}</h4>

    <v-form @submit.prevent @submit="emits('save')">
      <slot/>

      <v-btn
          block
          class="text-none mb-2"
          color="primary"
          size="x-large"
          variant="flat"
          type="submit"
      >
        ZAPISZ
      </v-btn>

      <v-dialog :width="width" persistent>
        <template v-slot:activator="{ props }">
          <v-btn
              block
              class="text-none text-black"
              color="primary"
              size="x-large"
              variant="outlined"
              v-bind="props"
          >
            ANULUJ
          </v-btn>
        </template>

        <template v-slot:default="{ isActive }">
          <BaseCancel
            @yes="() => {
              console.log('YES')
              isActive.value = false
              emits('cancel')
            }"
            @no="() => {
              isActive.value = false
            }"
          />
        </template>
      </v-dialog>

    </v-form>


  </v-sheet>
</template>