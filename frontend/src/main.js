import { createApp } from 'vue';
import App from './App.vue';
import router from './router'

import './global.css';
import './pages/assets/main.css';
import './components/public/newheader.vue'

createApp(App).use(router).mount('#app');

    
