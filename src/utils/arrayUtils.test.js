import {splitInSmallerArrays} from './arrayUtils'

test.each`
input                    |size     | output
${[1, 2, 3, 4]}          |${2}     | ${[[1, 2], [3, 4]]}
${[1, 2, 3, 4, 5, 6]}    |${3}     | ${[[1, 2, 3], [4, 5, 6]]}
${[1, 2, 3, 4, 5, 6, 7]} |${3}     | ${[[1, 2, 3], [4, 5, 6], [7]]}
`(`it splits $input using size $size in an array of smaller arrays.`, ({input, size, output}) => expect(splitInSmallerArrays(input, size)).toEqual(output))
