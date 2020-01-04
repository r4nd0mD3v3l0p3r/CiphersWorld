import AsyncStorage from '@react-native-community/async-storage'
import {getCurrentLocale, setLocale, supportedLanguages} from '../intl/intl'

const languageKey = '@Settings:language'
export const defaultLanguage = 'en'

export const setupRequired = async () => (await AsyncStorage.getItem(languageKey))=== null

export const changeLanguage = async (language) => {
    setLocale(language)
    await AsyncStorage.setItem(languageKey, language)
}

export const getLanguage = async () => {
    const language = await AsyncStorage.getItem(languageKey)

    if (language !== null) {
        return language
    } else {
        const userLanguage = getLanguageFromLocale(getCurrentLocale())

        if (supportedLanguages().some(x => x.value === userLanguage)) {
            await changeLanguage(userLanguage)

            return userLanguage
        } else {
            await changeLanguage(defaultLanguage)

            return defaultLanguage
        }
    }
}

const getLanguageFromLocale = locale => locale.split('-')[0]
