import {Alphabet} from './core/Alphabet'

const cipher = ['z', 'y', 'x', 'w', 'v', 'u', 't', 's', 'r', 'q', 'p', 'o', 'n', 'm', 'l', 'k', 'j', 'i', 'h', 'g', 'f', 'e', 'd', 'c', 'b', 'a']

export const encryptText = text => atbash(text)

export const decryptText = text => atbash(text)

const atbash = inputText => {
    const alphabet = new Alphabet()
    let outputText = ''

    for (const char of inputText) {
        if (alphabet.isLetter(char)) {
            const index = cipher.indexOf(char.toLowerCase())
            const decryptedChar = alphabet.letterByIndex(index, char)
            outputText = outputText.concat(decryptedChar)
        } else
            outputText = outputText.concat(char)
    }

    return outputText
}
