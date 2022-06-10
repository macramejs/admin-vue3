import { createApp } from 'vue'
import { router } from './modules/router';
import App from './App.vue'
import './index.css'

const app = createApp(App);

app.use(router);

app.mount('#app');
    
