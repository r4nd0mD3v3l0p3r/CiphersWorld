import I18n from 'react-native-i18n'
import en from './en'
import it from './it'

I18n.fallbacks = true
I18n.defaultLocale = 'en'

I18n.translations = {
    en,
    it
}

export const supportedLanguages = () => [
    {label: 'English', value: 'en'},
    {label: 'Italian', value: 'it'},
]

export const setLocale = (locale) => {
    I18n.locale = locale
}

export const getCurrentLocale = () => I18n.locale

export const translate = (key) => I18n.t(key)
