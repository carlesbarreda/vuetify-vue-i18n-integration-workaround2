# vuetify-vue-i18n-integration-workaround2

This is a workaround to vue-i18n integration with Vuetify 3 to the "interpolation" issue. As described at the [vue-i18n docs](https://vue-i18n.intlify.dev/guide/essentials/syntax.html), the `t` function expects an object for named interpolation and an array for list interpolation, while Vuetify 3 use a list of params. The next screenshot shows a VFileInput that renders a wrong string.

![Wrong string](/vfileinput1.png)

The patched version of the vue-i18n adapter is inside src/plugins/locales. It's possible to switch between adapters in index.ts for check the results.

![Expected string](/vfileinput2.png)

![index.ts](/index_ts.png)

[Edit on StackBlitz ⚡️](https://stackblitz.com/edit/vuetify-vue-i18n-integration-workaround2)
