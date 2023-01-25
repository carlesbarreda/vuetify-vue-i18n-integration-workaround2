import { createApp } from 'vue';
import './style.css';
import App from './App.vue';

// Vuetify
import 'vuetify/styles';
import '@mdi/font/css/materialdesignicons.css'; // Ensure you are using css-loader
import { aliases, mdi } from 'vuetify/iconsets/mdi';
import { createVuetify } from 'vuetify';
import * as components from 'vuetify/components';
import * as directives from 'vuetify/directives';

//import { createVueI18nAdapter } from 'vuetify/locale/adapters/vue-i18n';
import { createVueI18nAdapter } from '@/plugins/locales/vue-i18n.mjs';
import { useI18n } from 'vue-i18n';
import { i18n } from '@/plugins/locales';

const vuetify = createVuetify({
  components,
  directives,
  icons: {
    defaultSet: 'mdi',
    aliases,
    sets: {
      mdi,
    },
  },
  locale: {
    adapter: createVueI18nAdapter({ i18n, useI18n }),
  },
});

createApp(App).use(i18n).use(vuetify).mount('#app');
