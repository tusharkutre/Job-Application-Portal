import './assets/style.css'
import router from './router'

import { createApp } from 'vue'
import App from './App.vue'
import ToastPlugin from 'vue-toast-notification'
import 'vue-toast-notification/dist/theme-bootstrap.css';

const app = createApp(App)

//using plugins over here
app.use(router);
app.use(ToastPlugin)

app.mount('#app')
