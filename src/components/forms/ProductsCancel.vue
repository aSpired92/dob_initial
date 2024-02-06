<script setup lang="ts">
const emits = defineEmits(['action'])
</script>

<template>
  <v-sheet
      border="md"
      class="pa-6"
  >
    <h4 class="text-h5 font-weight-bold mb-4">Anulowanie</h4>

    <p class="mb-8">
      Czy na pewno chcesz anulować zmiany?
      <br>
      Wszelkie niezapisane zmiany zostaną utracone
    </p>

    <v-btn
        block
        class="text-none text-white mb-4"
        color="red"
        size="x-large"
        variant="flat"
        @click="emits('action')"
    >
      TAK
    </v-btn>

    <v-btn
        block
        class="text-none text-black"
        color="red"
        size="x-large"
        variant="outlined"
        @click="emits('action')"
    >
      NIE
    </v-btn>
  </v-sheet>
</template>

<style scoped>

</style>