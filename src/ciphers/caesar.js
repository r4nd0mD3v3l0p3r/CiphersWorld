import {Alphabet} from './core/Alphabet'

export const encryptText = (text, shift) => caesar(text, shift)
export const decryptText = (text, shift) => caesar(text, -shift)

const caesar = (inputText, shift) => {
    const alphabet = new Alphabet()
    let outputText = ''

    for (const char of inputText) {
        if (alphabet.isLetter(char)) {
            const index = alphabet.letterIndex(char)
            const newIndex = (alphabet.size + index + shift) % alphabet.size
            const encryptedChar = alphabet.letterByIndex(newIndex, char)

            outputText = outputText.concat(encryptedChar)
        } else {
            outputText = outputText.concat(char)
        }
    }

    return outputText
}
