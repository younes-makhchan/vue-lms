import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import loadScripts from './script'
import  axios from "axios"
loadScripts();
axios.defaults.baseURL="http://127.0.0.1:8000"
createApp(App).use(store).use(router,axios).mount('#app')