<script setup lang="ts">
import {ref} from "vue";

defineProps({
  color: String,
  icon: String,
  title: String
})

const show = ref(true)
</script>

<template>

  <v-snackbar color="transparent" variant="flat" v-model="show" class="bg-transparent" timeout="-1">
    <v-alert
        v-model="show"
        variant="tonal"
        closable
        close-label="Zamknij powiadomienie"
        :icon="icon"
        :color="color"
        :title="title"
    />

  </v-snackbar>
</template>

<style scoped>

</style>