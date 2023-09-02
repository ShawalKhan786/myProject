import { createApp } from 'vue'
import App from './App.vue'
import vuetify from './plugins/vuetify'
import { loadFonts } from './plugins/webfontloader'
import '@mdi/font/css/materialdesignicons.css';
import router from './router'
import './global.css'


loadFonts()

createApp(App).use(router)
  .use(vuetify)
  .mount('#app')
