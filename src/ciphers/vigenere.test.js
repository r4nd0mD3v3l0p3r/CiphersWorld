import {decrypt, encrypt} from './vigenere'

test.each`
input                                        | key            | output
${'To be or not to be that is the question'} | ${'relations'} | ${'Ks me hz bbl ks me mpog aj xse jcsflzsy'}
${'What fools these mortals be'} | ${'puck'} | ${'Lbcd uiqvh njohy oygncvh vg'}
`(`encrypts '$input' to '$output' using vigenere and key '$key'`, ({input, key, output}) => expect(encrypt(input, key)).toEqual(output))

test.each`
input                                        | key            | output
${'Ks me hz bbl ks me mpog aj xse jcsflzsy'} | ${'relations'} | ${'To be or not to be that is the question'}
${'Lbcd uiqvh njohy oygncvh vg'} | ${'puck'} | ${'What fools these mortals be'}
`(`decrypts '$input' to '$output' using vigenere and key '$key'`, ({input, key, output}) => expect(decrypt(input, key)).toEqual(output))
