import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './storage/store';

import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.css';

// createApp(App).use(router).use(store).mount('#app')
// createApp(App).use(router, store).mount('#app')

const app = createApp(App);
app.use(router);
app.use(store);
app.mount('#app');