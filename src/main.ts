import { createApp } from 'vue';
import './style.css';
import App from './App.vue';

import { registerVuetify } from '@/plugins';

const app = createApp(App);
registerVuetify(app)
  .mount('#app');
