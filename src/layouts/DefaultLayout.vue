<template>
  <v-app class="h-screen overflow-hidden">
    <DefaultBar />
    <DefaultDrawer />
    <DefaultView>
      <slot />
    </DefaultView>
  </v-app>
</template>

<script lang="ts" setup>
  import DefaultBar from './default/AppBar.vue'
  import DefaultView from './default/AppContent.vue'
  import DefaultDrawer from './default/AppDrawer.vue'
</script>
