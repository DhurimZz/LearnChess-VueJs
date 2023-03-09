// src/plugins/vuetify.js

import Vue from 'vue'
import Vuetify from 'vuetify'
import 'vuetify/dist/vuetify.min.css'
import 'material-design-icons-iconfont/dist/material-design-icons.css'
import '@mdi/font/css/materialdesignicons.css'
import '@fortawesome/fontawesome-free/css/all.css'

Vue.use(Vuetify)

// const opts = {}

export default new Vuetify({
  icons: {
    iconfont: 'fa' || 'md'
  },
  theme: {
    themes: {
      dark: {
        background: '#EEEEEE'
      }
    }
  }
})
