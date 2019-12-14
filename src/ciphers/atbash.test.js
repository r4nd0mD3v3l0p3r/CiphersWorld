import {decryptText, encryptText} from './atbash'

test('Encrypts \'Flee at once!\'', () => {
    expect(encryptText('Flee at once!')).toEqual('Uovv zg lmxv!')
})

test('Decrypts \'Zggzxp, zg wzdm!\'', () => {
    expect(decryptText('Zggzxp, zg wzdm!')).toEqual('Attack, at dawn!')
})
