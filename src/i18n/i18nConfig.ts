import i18next from "i18next";
// import { initReactI18next } from "react-i18next";
import translation_en from "./locales/en/translation.json";
import translation_es from "./locales/es/translation.json";

i18next
  // .use(initReactI18next) 
  .init({resources: {
      en: translation_en,
      es: translation_es
    },
    lng: "en",
    fallbackLng: "en",

    interpolation: {
      escapeValue: false
    }
  });

  export default i18next;