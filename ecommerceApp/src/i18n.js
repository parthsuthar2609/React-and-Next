// src/i18n.js
import i18n from "i18next";
import HttpBackend from "i18next-http-backend";
import LanguageDetector from "i18next-browser-languagedetector";
import { initReactI18next } from "react-i18next";

const apiKey = "LT8tmyJP-jikxMmL_hpGuQ";
const loadPath = `https://api.i18nexus.com/project_resources/translations/{{lng}}/{{ns}}.json?api_key=${apiKey}`;

i18n
  .use(HttpBackend)
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    fallbackLng: "en",
    ns: ["default"],
    defaultNS: "default",
    supportedLngs: ["en", "hi", "gu"],
    backend: {
      loadPath: loadPath,
    },
    react: {
      useSuspense: false,
    },
  });

export default i18n;
