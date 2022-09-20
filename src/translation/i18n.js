import i18n from 'i18next'
import { initReactI18next } from 'react-i18next'
import LanguageDetector from 'i18next-browser-languagedetector'
import * as Language from './Language'

i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    resources: {
      en: {
        translation: Language.TRANSLATIONS_EN,
      },
      zh: {
        translation: Language.TRANSLATIONS_ZH,
      },
      es: {
        translation: Language.TRANSLATIONS_ES,
      },
    },
  })
export default i18n
