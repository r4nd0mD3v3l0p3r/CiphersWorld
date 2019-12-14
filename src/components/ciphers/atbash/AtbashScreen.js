import React from 'react'
import {decryptText, encryptText} from '../../../ciphers/atbash'
import {CommonScreen} from '../common/CommonScreen'

const cipherDescription = 'The Atbash cipher is a monoalphabetic substitution cipher, originally used to encrypt the Hebrew alphabet.'
const referenceLinks = [{site: 'Wikipedia', url: 'https://en.wikipedia.org/wiki/Atbash'}]

export const AtbashScreen = () => {
    return (
        <CommonScreen decryptText={encryptText}
                      encryptText={decryptText}
                      cipherDescription={cipherDescription}
                      referenceLinks={referenceLinks}
        />
    )
}

