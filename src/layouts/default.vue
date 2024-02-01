<template>
  <v-app>
    <DefaultBar />
    <DefaultDrawer />
    <DefaultView />
  </v-app>
</template>

<script lang="ts" setup>
  import DefaultBar from './default/AppBar.vue'
  import DefaultView from './default/View.vue'
  import DefaultDrawer from './default/AppDrawer.vue'
</script>
