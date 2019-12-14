import {decryptText, encryptText} from './caesar'

const plainText = 'AbcdEfghijklmnopqrsTuvwxyz'
const encryptedText = 'DefgHijklmnopqrstuvWxyzabc'

test(`Encrypts '${plainText}'`, () => {
    expect(encryptText(plainText, 3)).toEqual(encryptedText)
})

test(`Decrypts '${encryptedText}'`, () => {
    expect(decryptText(encryptedText, 3)).toEqual(plainText)
})
