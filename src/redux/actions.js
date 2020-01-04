import {getLanguage, setupRequired} from '../core/settingsStorage'
import {setLocale} from '../intl/intl'

export const BEGIN_INITIALIZATION = 'BEGIN_INITIALIZATION'
export const INITIALIZATION_COMPLETED = 'INITIALIZATION_COMPLETED'
export const CHANGE_LANGUAGE = 'CHANGE_LANGUAGE'
export const SETUP_COMPLETED = 'SETUP_COMPLETED'

export const beginInitialization = () => ({type: BEGIN_INITIALIZATION})
export const initializationCompleted = (data) => ({type: INITIALIZATION_COMPLETED, data})

export function initialize() {
    return async dispatch => {
        dispatch(beginInitialization())

        const requiresSetup = await setupRequired()
        const language = await getLanguage()

        setLocale(language)

        const data = {language, requiresSetup}

        dispatch(initializationCompleted(data))
    }
}

export const changeLanguage = language => ({type: CHANGE_LANGUAGE, language})
export const setupCompleted = () => ({type: SETUP_COMPLETED})
