import React from 'react'
import { useLocalization } from '../context/LocalizationContext'

export const TranslationContext = () => {
  const {setLocale,translate} = useLocalization();

  return (
    <div>
        <h1>Translation App</h1>
        <p>{translate('greeting')}</p>
        <p>{translate('welcome')}</p>
        <button onClick={()=> setLocale('en')}>English</button>
        <button onClick={()=> setLocale('es')}>Spanish</button>
    </div>
  )
}
