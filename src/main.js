import { createApp } from 'vue'
import './style.css'
import App from './App.vue'

// Import Bootstrap and BootstrapVue CSS files (order is important)
import 'bootstrap/dist/css/bootstrap.css'
import 'vue3-toastify/dist/index.css';
import router from "./router";
import {createPinia} from "pinia";

const app = createApp(App)
app.use(router)
app.use(createPinia())
app.mount('#app')
