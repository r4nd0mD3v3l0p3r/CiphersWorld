import {charactersOnly} from './stringUtils'

test.each`
input                             | valid
${'lettersOnly'}                  | ${true}
${'This 1 is not letters (only)'} | ${false}
${'123, test'}                    | ${false}
${''}                             | ${false}
${'  '}                           | ${false}
`(`it determines whether '$input' is chars only`, ({input, valid}) => expect(charactersOnly(input)).toEqual(valid))
