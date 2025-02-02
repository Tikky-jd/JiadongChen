import { createApp } from 'vue'
import App from './App.vue'
import router from './router' 
import pinia from './stores'  //引入
import './assets/font/font.css'
const app = createApp(App)

app.use(router)
app.use(pinia)
app.mount('#app')
