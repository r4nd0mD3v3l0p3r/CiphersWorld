import {Toast} from 'native-base'

export const showInvalidKeywordToast = () =>
    Toast.show({
        text: 'Keyword not valid. Only characters are allowed.',
        duration: 5000,
        type: 'danger'
    })
