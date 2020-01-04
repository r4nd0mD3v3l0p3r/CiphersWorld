import {defaultLanguage} from '../core/settingsStorage'
import {BEGIN_INITIALIZATION, CHANGE_LANGUAGE, INITIALIZATION_COMPLETED, SETUP_COMPLETED} from './actions'
import {setLocale} from '../intl/intl'

const initialState = {
    language: defaultLanguage,
    working: false,
    initializationCompleted: false,
    requiresSetup: true
}

export default (state = initialState, action) => {
    switch (action.type) {
        case BEGIN_INITIALIZATION:
            return {...state, working: true}
        case INITIALIZATION_COMPLETED:
            state = {language: action.data.language, initializationCompleted: true, working: false, requiresSetup: action.data.requiresSetup}
            return state
        case CHANGE_LANGUAGE:
            setLocale(action.language)
            return {...state, language: action.language}
        case SETUP_COMPLETED:
            return {...state, requiresSetup: false}
        default:
            return state

    }
}
