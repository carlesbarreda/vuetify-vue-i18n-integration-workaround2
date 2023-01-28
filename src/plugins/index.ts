// Vuetify
import 'vuetify/styles';
import '@mdi/font/css/materialdesignicons.css'; // Ensure you are using css-loader
import { aliases, mdi } from 'vuetify/iconsets/mdi';
import { createVuetify } from 'vuetify';
import * as components from 'vuetify/components';
import * as directives from 'vuetify/directives';

// Translations provided by Vuetify
//import { ca, es, en } from 'vuetify/locale';
//import { i18n } from '@/plugins/locales';

import { i18n, useI18n, createVueI18nAdapter } from '@/plugins/vue-i18n';

// Types
import type { App } from 'vue';

export const registerVuetify = (app: App): App => {
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
      /*
      locale: import.meta.env.APP_LOCALE ? import.meta.env.APP_LOCALE : 'ca',
      fallback: import.meta.env.APP_FALLBACK_LOCALE
        ? import.meta.env.APP_FALLBACK_LOCALE
        : 'ca',
      messages: { ca, es, en },
      */
      adapter: createVueI18nAdapter({ i18n, useI18n }),
    },
  });
  return app
    .use(i18n)
    .use(vuetify);
}
