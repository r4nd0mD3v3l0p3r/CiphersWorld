import React from 'react'
import {decryptText, encryptText} from '../../../ciphers/atbash'
import {CommonScreen} from '../common/CommonScreen'
import {translate} from '../../../intl/intl'

const referenceLinks = [{site: 'Wikipedia', url: 'https://en.wikipedia.org/wiki/Atbash'}]

export const AtbashScreen = ({navigation}) => {
    const cipherDescription = translate('atbash_description')

    return (
        <CommonScreen
            navigation={navigation}
            headerTitle={translate('atbash_title')}
            decryptText={encryptText}
            encryptText={decryptText}
            cipherDescription={cipherDescription}
            referenceLinks={referenceLinks}
        />
    )
}

