import React, {useState} from 'react'
import {Button, Content, Form, Text, Textarea} from 'native-base'
import {charactersOnly} from '../../../utils/stringUtils'
import {encryptText} from '../../../ciphers/vigenere'
import {showInvalidKeywordToast} from './validation'
import {OutputTextCard} from '../common/OutputTextCard'
import {ScrollView} from 'react-native'
import {translate} from '../../../intl/intl'

export const EncryptScreen = () => {
    const [inputText, setInputText] = useState('')
    const [outputText, setOutputText] = useState('')
    const [keyword, setKeyword] = useState('')

    const encrypt = () => {
        if (charactersOnly(keyword)) {
            const encrypted = encryptText(inputText, keyword)
            setOutputText(encrypted)
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
                            onPress={() => encrypt()}>
                        <Text>{translate('ciphers_common_encrypt_button')}</Text>
                    </Button>
                </Form>
                <OutputTextCard title={translate('ciphers_common_encrypted_text')} outputText={outputText}/>
            </Content>
        </ScrollView>
    )
}
