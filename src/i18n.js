import i18n from "i18next";
import { initReactI18next } from "react-i18next";

import translationEN from "./locales/en/translationEN.json";
import translationBL from "./locales/bl/translationBL.json";

// translation
const resources = {
    en: {
        translation: translationEN
    },
    bl: {
        translation: translationBL 
    }
};

i18n
    .use(initReactI18next)
    .init({
        resources,
        lng: 'en',

        keySeparator: false,

        interPolation: {
            escapeValue: false
        }
    });

export default i18n;

// npm i i18next
// npm i react-i18next