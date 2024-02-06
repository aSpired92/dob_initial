import {ref, computed, type Component} from 'vue'
import { uuid } from 'vue-uuid';
import { defineStore } from 'pinia'


export const useSnackbarStore = defineStore('snackbar', () => {

  interface Snackbar {
    id: string
    component: Component,
    timeout: null | number
  }

  const snackbars = ref<Snackbar[]>([])

  const addSnackbar = (component: Component, timeout?: number) => {

    let snackbar: Snackbar = {
      id: uuid.v4(),
      component: component,
      timeout: null
    }

    if (timeout) {
      snackbar.timeout = timeout * 1000
    }

    snackbars.value.push(snackbar)
  }

  async function timer() {
    const delay = 500
    setTimeout(() => {
      snackbars.value.forEach((snackbar: Snackbar) => {
        if (snackbar.timeout !== null) {
          snackbar.timeout -= delay
          if (snackbar.timeout < 0) {
            const index = snackbars.value.indexOf(snackbar, 0);
            snackbars.value.splice(index, 1);
          }
        }
      })
      timer()
    }, 500)
  }

  timer()

  return { snackbars, addSnackbar }
})