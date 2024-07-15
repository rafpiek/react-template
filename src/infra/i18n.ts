import i18n from 'i18next'
import { initReactI18next } from 'react-i18next'
import Backend from 'i18next-http-backend'
import LanguageDetector from 'i18next-browser-languagedetector'
import en from 'config/locales/en.json'
import pl from 'config/locales/pl.json'

i18n
  .use(Backend)
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    fallbackLng: 'en',
    resources: {
      en: {
        translation: en
      },
      pl: {
        translation: pl
      }
    },
    debug: true,
    interpolation: {
      escapeValue: false
    }
  })

export default i18n
