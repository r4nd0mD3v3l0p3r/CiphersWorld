export class Alphabet {
    alphabet = new Map(
        [
            ['a', {decimal: 0, lowerCase: 'a', upperCase: 'A'}],
            ['b', {decimal: 1, lowerCase: 'b', upperCase: 'B'}],
            ['c', {decimal: 2, lowerCase: 'c', upperCase: 'C'}],
            ['d', {decimal: 3, lowerCase: 'd', upperCase: 'D'}],
            ['e', {decimal: 4, lowerCase: 'e', upperCase: 'E'}],
            ['f', {decimal: 5, lowerCase: 'f', upperCase: 'F'}],
            ['g', {decimal: 6, lowerCase: 'g', upperCase: 'G'}],
            ['h', {decimal: 7, lowerCase: 'h', upperCase: 'H'}],
            ['i', {decimal: 8, lowerCase: 'i', upperCase: 'I'}],
            ['j', {decimal: 9, lowerCase: 'j', upperCase: 'J'}],
            ['k', {decimal: 10, lowerCase: 'k', upperCase: 'K'}],
            ['l', {decimal: 11, lowerCase: 'l', upperCase: 'L'}],
            ['m', {decimal: 12, lowerCase: 'm', upperCase: 'M'}],
            ['n', {decimal: 13, lowerCase: 'n', upperCase: 'N'}],
            ['o', {decimal: 14, lowerCase: 'o', upperCase: 'O'}],
            ['p', {decimal: 15, lowerCase: 'p', upperCase: 'P'}],
            ['q', {decimal: 16, lowerCase: 'q', upperCase: 'Q'}],
            ['r', {decimal: 17, lowerCase: 'r', upperCase: 'R'}],
            ['s', {decimal: 18, lowerCase: 's', upperCase: 'S'}],
            ['t', {decimal: 19, lowerCase: 't', upperCase: 'T'}],
            ['u', {decimal: 20, lowerCase: 'u', upperCase: 'U'}],
            ['v', {decimal: 21, lowerCase: 'v', upperCase: 'V'}],
            ['w', {decimal: 22, lowerCase: 'w', upperCase: 'W'}],
            ['x', {decimal: 23, lowerCase: 'x', upperCase: 'X'}],
            ['y', {decimal: 24, lowerCase: 'y', upperCase: 'Y'}],
            ['z', {decimal: 25, lowerCase: 'z', upperCase: 'Z'}],
        ]
    )
    size = this.alphabet.size

    letters = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z',]
    lettersSet = new Set(this.letters)
    capitalLettersSet = new Set(['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'W', 'X', 'Y', 'Z'])

    constructor() {
        if (!!Alphabet.instance) {
            return Alphabet.instance
        }
        Alphabet.instance = this

        return this
    }

    isCapitalLetter = letter => this.capitalLettersSet.has(letter)

    isLetter = candidate => this.lettersSet.has(candidate) || this.capitalLettersSet.has(candidate)

    letterIndex = letter => this.letters.indexOf(letter.toLowerCase())

    letterByIndex = (index, originalLetter) => {
        const letter = this.letters[index]

        const res = this.alphabet.get(letter)
        return this.isCapitalLetter(originalLetter) ? res.upperCase : res.lowerCase
    }
}
