import i18next from "i18next";
import LanguageDetector from 'i18next-browser-languagedetector';
import { initReactI18next } from "react-i18next";

//Import all translation files
import English from "./Translation/English.json";
import Deutsch from "./Translation/Deutsch.json";

const resources = {
    en: {
        translation: English,
    },
    de: {
        translation: Deutsch,
    },
}

i18next
.use(LanguageDetector)
.use(initReactI18next)
.init({
  resources,
  lng:"en", //default language
});

export default i18next;