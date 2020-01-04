import {Toast} from 'native-base'
import {translate} from '../../../intl/intl'

export const showInvalidKeywordToast = () =>
    Toast.show({
        text: translate('vigenere_keyword_not_valid'),
        duration: 5000,
        type: 'danger'
    })
