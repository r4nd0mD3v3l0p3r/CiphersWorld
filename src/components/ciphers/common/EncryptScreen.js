import React, {useState} from 'react'
import PropTypes from 'prop-types'
import {Button, Content, Form, Text, Textarea} from 'native-base'
import {OutputTextCard} from './OutputTextCard'
import {ScrollView} from 'react-native'
import {translate} from '../../../intl/intl'

export const EncryptScreen = ({encryptText}) => {
    const [inputText, setInputText] = useState('')
    const [outputText, setOutputText] = useState('')

    const encrypt = () => {
        const encrypted = encryptText(inputText)
        setOutputText(encrypted)
    }

    return (
        <ScrollView>
            <Content padder>
                <Form>
                    <Textarea style={{marginBottom: 15}}
                              rowSpan={5}
                              bordered
                              placeholder={translate('ciphers_common_encrypted_text')}
                              value={inputText}
                              onChangeText={setInputText}/>
                    <Button full primary
                            style={{marginBottom: 5}}
                            onPress={() => setInputText('')}>
                        <Text>{translate('ciphers_common_clear_input_text_button')}</Text>
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

EncryptScreen.propTypes = {
    encryptText: PropTypes.func.isRequired,
}
