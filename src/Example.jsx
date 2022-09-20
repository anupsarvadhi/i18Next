import React from 'react'
import i18n from 'i18next'
import { useTranslation } from 'react-i18next'
import './translation/i18n'

// this file is only for expamle

const Example = () => {
  const { t } = useTranslation()

  const languageSubmit = (lang) => {
    localStorage.setItem('items', JSON.stringify(lang))
    const data = JSON.parse(localStorage.getItem('items'))
    i18n.changeLanguage(data)
    console.log(data)
  }

  return (
    <div>
      <p>{t('come')}</p>
      <p>{t('welcome')}</p>
      <button onClick={() => languageSubmit('en')}>English</button>
      <button onClick={() => languageSubmit('zh')}>chiness</button>
    </div>
  )
}

export default Example
