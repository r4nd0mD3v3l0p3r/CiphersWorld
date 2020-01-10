import {isSquareMatrix, matrixModularInverse, modularMultiplicativeInverse} from './mathUtils'
import * as math from 'mathjs'

test.each`
input                                  | square
${'[[1, 2], [3, 4]]'}                  | ${true}
${'[[1, 2], [3, 4], [5, 6]]'}          | ${false}
${'[[1, 2, 3], [4, 5, 6], [7, 8, 9]]'} | ${true}
`(`it determines whether $input is a square matrix`, ({input, square}) => expect(isSquareMatrix(math.matrix(JSON.parse(input)))).toEqual(square))

test.each`
integer |   modulo  |   modMulInverse
${3}    | ${26}     |   ${9}
${6}    | ${17}     |   ${3}
`(`the modular multiplicative inverse of $input modulo $modulo is $modMulInverse`, ({integer, modulo, modMulInverse}) => expect(modularMultiplicativeInverse(integer, modulo)).toEqual(modMulInverse))

test(`Computes the modular inverse of a matrix`, () => {
    const matrix = math.matrix([[6, 24, 1], [13, 16, 10], [20, 17, 15]])
    const expected = math.matrix([[8, 5, 10], [21, 8, 21], [21, 12, 8]])

    expect(matrixModularInverse(matrix, 26)).toEqual(expected)
})

