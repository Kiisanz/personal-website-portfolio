// i18n.js
import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';
import HttpApi from 'i18next-http-backend';

const fallbackLng = localStorage.getItem('selectedLanguage') || 'EN';

i18n.use(HttpApi)
    .use(LanguageDetector)
    .use(initReactI18next)
    .init({
        supportedLngs: ['EN', 'ID', 'SU', 'SUA'],
        fallbackLng,
        debug: true,
        backend: {
            loadPath: '/locales/{{lng}}/translation.json',
        },
        detection: {
            order: ['cookie', 'localStorage', 'htmlTag', 'path', 'subdomain'],
            caches: ['cookie', 'localStorage'],
        },
        react: {
            useSuspense: false,
        },
    });

export default i18n;
