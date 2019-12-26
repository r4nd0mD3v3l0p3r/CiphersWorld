const lettersOnlyRegex = /^[a-zA-Z]+$/

export const charactersOnly = input => {
    return lettersOnlyRegex.test(input)
}
