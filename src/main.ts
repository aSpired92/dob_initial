import { createApp } from 'vue'
import { createPinia } from 'pinia'

import App from './App.vue'
import router from './router'


// Vuetify
import 'vuetify/styles'
import { createVuetify } from 'vuetify'
import * as components from 'vuetify/components'
import * as directives from 'vuetify/directives'
import '@mdi/font/css/materialdesignicons.css'

import { pl } from 'vuetify/locale'

const app = createApp(App)

const vuetify = createVuetify({
  components,
  directives,
  locale: {
    locale: 'pl',
    messages: { pl },
  },
})

app.use(createPinia())
app.use(router)
app.use(vuetify)

app.mount('#app')
