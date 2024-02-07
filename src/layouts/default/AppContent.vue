<template>
  <v-main class="fill-height overflow-hidden">
    <SnackbarRenderer />

    <v-container class="fill-height overflow-auto">
        <slot />
    </v-container>
  </v-main>
</template>

<script lang="ts" setup>
import SnackbarRenderer from "@/components/SnackbarRenderer.vue";
</script>
