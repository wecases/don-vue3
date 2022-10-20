import { createApp } from 'vue'
import App from './App.vue'
import 'uno.css'
import { createPinia } from 'pinia'
import router from '@/router/router'

const app = createApp(App)

app.use(createPinia())
app.use(router)

app.mount('#app')
