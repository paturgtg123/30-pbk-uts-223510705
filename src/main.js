import { createApp } from 'vue';
import './styles/style.css';
import { createPinia } from 'pinia';
import App from './App.vue';
import router from './router/index';
import { Quasar } from 'quasar';
import 'quasar/dist/quasar.css';
import '@quasar/extras/material-icons/material-icons.css';

const app = createApp(App);

app.use(createPinia());
app.use(router);
app.use(Quasar, {
  plugins: {}, // Add Quasar plugins here if needed
});

app.mount('#app');