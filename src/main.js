import './assets/main.css';

import { createApp } from 'vue';
import { createYmaps } from 'vue-yandex-maps';
import App from './App.vue';

const app = createApp(App);

app.use(createYmaps({
  apikey: '91d4f8e9-ab4e-403c-8d7f-621f183d7b95',
}));

app.mount('#app');
