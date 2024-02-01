<script setup lang="ts">

</script>

<template>
  <v-navigation-drawer
    expand-on-hover
    rail
  >
    <v-list density="compact" nav>
      <v-list-item prepend-icon="mdi-chart-bar" title="Raporty" value="myfiles"></v-list-item>
      <v-list-item prepend-icon="mdi-format-list-text" title="Produkty" value="shared"></v-list-item>
      <v-list-item prepend-icon="mdi-list-box-outline" title="Zamówienia" value="starred"></v-list-item>
    </v-list>
  </v-navigation-drawer>
</template>

<style scoped>

</style>
