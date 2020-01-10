import * as math from 'mathjs'
import {translate} from '../intl/intl'
import {areCoprimes, isSquareMatrix, matrixModularInverse} from '../utils/mathUtils'
import {Alphabet, AlphabetSize} from './core/Alphabet'
import {splitInSmallerArrays} from '../utils/arrayUtils'

export const encryptText = (text, inputMatrix) => {
    const matrix = math.matrix(inputMatrix)

    checkMatrix(matrix)

    return hill(text, matrix)
}
export const decryptText = (text, inputMatrix) => {
    const encryptionMatrix = math.matrix(inputMatrix)

    checkMatrix(encryptionMatrix)

    const decryptionMatrix = matrixModularInverse(encryptionMatrix, AlphabetSize)

    return hill(text, decryptionMatrix)
}

const hill = (text, matrix) => {
    const alphabet = new Alphabet()
    const matrixSize = matrix.size()[0]
    let result = ''

    const cipherChunks = splitInSmallerArrays(text.replace(/[^a-zA-Z]+/g, '').split('').map(x => alphabet.letterIndex(x)), matrixSize)
    const processedLetters = []

    cipherChunks.forEach(x => math.multiply(matrix, x).forEach((value, index, matrix) => {
        processedLetters.push(value % AlphabetSize)
    }))

    for (const char of text) {
        if (alphabet.isLetter(char)) {
            const newChar = processedLetters.shift()

            result = result.concat(alphabet.letterByIndex(newChar, char))

        } else {
            result = result.concat(char)
        }
    }

    return result
}

const checkMatrix = matrix => {
    let det = null

    try {
        det = math.round(math.det(matrix))
    } catch (e) {
        throw translate('hill_error_bad_matrix')
    }

    if (!isSquareMatrix(matrix)) {
        throw translate('hill_error_not_square_matrix')
    } else if (det === 0) {
        throw translate('hill_error_matrix_det_zero')
    } else if (!areCoprimes(det, AlphabetSize)) {
        throw translate('hill_error_matrix_det_mod_not_coprimes')
    }
}
