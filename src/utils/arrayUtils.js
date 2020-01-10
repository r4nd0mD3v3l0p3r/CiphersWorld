export const splitInSmallerArrays = (array, size) => {
    const copy = array.slice(0)
    const smallerArrays = []

    while (copy.length > 0) {
        smallerArrays.push(copy.splice(0, size))
    }

    return smallerArrays
}
