import DesignSystem from "@cleancloud/design-system";
import { createI18n } from "vue-i18n";

import { en, pt } from "@/locales";

export default defineNuxtPlugin(({ vueApp }) => {
  vueApp.use(DesignSystem);

  // required dependency
  const i18n = createI18n({
    legacy: false, // composition API
    globalInjection: true, // inject on vue instance ==> $i18n
    locale: "en", // default locale ==> english
    messages: {
      en,
      pt,
    },
  });

  vueApp.use(i18n);
});
