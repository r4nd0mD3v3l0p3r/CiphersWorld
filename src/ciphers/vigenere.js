import {Alphabet} from './core/Alphabet'
import {CircularArray} from './core/circularArray'

export const encryptText = (inputText, key) => vigenere(inputText, key, true)
export const decryptText = (inputText, key) => vigenere(inputText, key, false)

const generateKeyArray = key => {
    const array = []
    const alphabet = new Alphabet()

    for (const char of key) {
        array.push(alphabet.letterIndex(char))
    }

    return array
}

const vigenere = (inputText, key, encrypt) => {
    const alphabet = new Alphabet()
    const keyArray = new CircularArray(generateKeyArray(key))
    let outputText = ''

    for (const char of inputText) {
        if (alphabet.isLetter(char)) {
            const index = alphabet.letterIndex(char)
            const keyValue = keyArray.next() * (encrypt ? 1 : -1)
            const newIndex = (alphabet.size + index + keyValue) % alphabet.size
            const encryptedChar = alphabet.letterByIndex(newIndex, char)

            outputText = outputText.concat(encryptedChar)
        } else {
            outputText = outputText.concat(char)

        }
    }

    return outputText
}
