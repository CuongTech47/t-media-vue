import { createApp } from 'vue'
// import { createPinia } from 'pinia'
import ViewUIPlus from 'view-ui-plus'

import App from './App.vue'
import router from './router'

import './style.css'
// import './assets/js/script.js'
// import './assets/base.css'
import 'view-ui-plus/dist/styles/viewuiplus.css'

const app = createApp(App)

// app.use(createPinia())
app.use(router)
app.use(ViewUIPlus)

app.mount('#app')