import React, {useState} from 'react'
import PropTypes from 'prop-types'
import {Button, Content, Form, Text, Textarea} from 'native-base'
import {OutputTextCard} from './OutputTextCard'
import {ScrollView} from 'react-native'
import {translate} from '../../../intl/intl'

export const DecryptScreen = ({decryptText}) => {
    const [inputText, setInputText] = useState('')
    const [outputText, setOutputText] = useState('')

    const decrypt = () => {
        const decrypted = decryptText(inputText)
        setOutputText(decrypted)
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
                    <Button full primary
                            style={{marginBottom: 5}}
                            onPress={() => setInputText('')}>
                        <Text>{translate('ciphers_common_clear_input_text_button')}</Text>
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

DecryptScreen.propTypes = {
    decryptText: PropTypes.func.isRequired,
}
