import {decryptText, encryptText} from './hill'

test('Encrypts \'Go away, now!\'', () => {
    const input = 'Go away, now!'
    const matrix = [[0, 11, 15], [7, 0, 1], [4, 19, 0]]

    expect(encryptText(input, matrix)).toEqual('Yq ewwk, qjg!')
})

test('Decrypts \'Yq ewwk, qjg!\'', () => {
    const input = 'Yq ewwk, qjg!'
    const matrix = [[0, 11, 15], [33, 0, 1], [4, 19, 0]]

    expect(decryptText(input, matrix)).toEqual('Go away, now!')
})
