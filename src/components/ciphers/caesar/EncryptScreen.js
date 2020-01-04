import React, {useState} from 'react'
import {Button, Content, Form, Text, Textarea} from 'native-base'
import {encryptText} from '../../../ciphers/caesar'
import {ShiftPicker} from './ShiftPicker'
import {OutputTextCard} from '../common/OutputTextCard'
import {ScrollView} from 'react-native'
import {translate} from '../../../intl/intl'

export const EncryptScreen = () => {
    const [inputText, setInputText] = useState('')
    const [outputText, setOutputText] = useState('')
    const [shift, setShift] = useState('3')

    const encrypt = () => {
        const encrypted = encryptText(inputText, shift)
        setOutputText(encrypted)
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
                    <ShiftPicker onValueChange={setShift} selectedValue={shift}/>
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
