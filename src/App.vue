<script lang="ts" setup>
import 'animate.css'
import DefaultLayout from "@/layouts/DefaultLayout.vue";
</script>

<template>
  <DefaultLayout>
    <router-view v-slot="{ Component }" class="animate__animated animate__fadeIn animate__fast">
        <component  :is="Component" />
    </router-view>
  </DefaultLayout>
</template>

<style lang="sass">
html
  overflow-y: hidden

.fade-enter-active, .fade-leave-active
  transition-property: opacity
  transition-duration: .25s


.fade-enter-active
  transition-delay: .25s


.fade-enter, .fade-leave-active
  opacity: 0

</style>

