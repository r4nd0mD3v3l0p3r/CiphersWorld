import * as math from 'mathjs'
import {translate} from '../intl/intl'

export const areCoprimes = (a, b) => {
    const absA = math.abs(a)

    if (absA === 0 || b === 0)
        return false
    else if (absA === b)
        return false
    else {
        const gcd = (absA > b) ? math.gcd(absA - b, b) : math.gcd(absA, b - a)

        return gcd === 1
    }
}

export const modularMultiplicativeInverse = (a, m) => {
    const xgcdResult = math.xgcd(math.abs(a), m).valueOf()

    return xgcdResult[1]
}

export const isSquareMatrix = matrix => {
    const dimensions = matrix.size()

    return dimensions.every(x => x === dimensions[0])
}

export const matrixModularInverse = (matrix, mod) => {
    const det = math.round(math.det(matrix))

    if (det === 0) {
        throw translate('hill_error_matrix_det_zero')
    }

    const candidateMatrix = math.matrix(matrix)

    const inv = math.inv(candidateMatrix)
    const absDet = math.abs(det)
    const invMulDet = math.multiply(inv, absDet)

    const detModInverse = modularMultiplicativeInverse(absDet, mod)

    const modInverse = math.mod(math.multiply(invMulDet, detModInverse), mod)

    return math.round(modInverse)
}
