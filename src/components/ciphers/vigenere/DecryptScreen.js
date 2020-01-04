import React, {useState} from 'react'
import {Button, Content, Form, Text, Textarea} from 'native-base'
import {decryptText} from '../../../ciphers/vigenere'
import {charactersOnly} from '../../../utils/stringUtils'
import {showInvalidKeywordToast} from './validation'
import {OutputTextCard} from '../common/OutputTextCard'
import {ScrollView} from 'react-native'
import {translate} from '../../../intl/intl'

export const DecryptScreen = () => {
    const [inputText, setInputText] = useState('')
    const [outputText, setOutputText] = useState('')
    const [keyword, setKeyword] = useState('')

    const decrypt = () => {
        if (charactersOnly(keyword)) {
            const decrypted = decryptText(inputText, keyword)
            setOutputText(decrypted)
        } else {
            showInvalidKeywordToast()
        }
    }

    return (
        <ScrollView>
            <Content padder>
                <Form>
                    <Textarea style={{marginBottom: 15}}
                              rowSpan={5}
                              bordered
                              placeholder={translate('ciphers_common_input_text')}
                              value={inputText}
                              onChangeText={setInputText}/>
                    <Textarea style={{marginBottom: 15}}
                              rowSpan={5}
                              bordered
                              placeholder={translate('vigenere_keyword_placeholder')}
                              value={keyword}
                              onChangeText={setKeyword}/>
                    <Button full primary
                            style={{marginBottom: 5}}
                            onPress={() => setInputText('')}>
                        <Text>{translate('ciphers_common_clear_input_text_button')}</Text>
                    </Button>
                    <Button full primary
                            style={{marginBottom: 5}}
                            onPress={() => setKeyword('')}>
                        <Text>{translate('vigenere_clear_keyword_button')}</Text>
                    </Button>
                    <Button full primary
                            style={{marginBottom: 15}}
                            onPress={() => decrypt()}>
                        <Text>{translate('ciphers_common_decrypt_button')}</Text>
                    </Button>
                </Form>
                <OutputTextCard title={translate('ciphers_common_decrypted_text')} outputText={outputText}/>
            </Content>
        </ScrollView>
    )
}
