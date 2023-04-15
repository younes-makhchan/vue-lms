import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import loadScripts from './script'
import  axios from "axios"
loadScripts();
axios.defaults.baseURL="https://younes102.pythonanywhere.com/"
createApp(App).use(store).use(router,axios).mount('#app')
