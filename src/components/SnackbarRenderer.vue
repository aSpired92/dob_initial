<script setup lang="ts">
import {useSnackbarStore} from "@/stores/snackbar";

const {snackbars} = useSnackbarStore()

const calcMargin = (i: number) => {
  return (i*70+15) + 'px'
}
</script>

<template>
<div>
  <component :style="{'margin-bottom':calcMargin(i)}" v-for="(s,i) in snackbars" :key="i" :is="s.component"></component>
</div>
</template>

<style scoped>

</style>