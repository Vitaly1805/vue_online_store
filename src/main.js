import { createApp } from 'vue'
import App from './App.vue'
import {store} from './assets/store/store'
import {router} from './router/router'

const app = createApp(App)
app.use(store)
app.use(router)
app.mount('#app')