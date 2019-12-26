import React, {useState} from 'react'
import PropTypes from 'prop-types'
import {Button, Content, Form, Text, Textarea} from 'native-base'
import {OutputTextCard} from './OutputTextCard'
import {ScrollView} from 'react-native'

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
                              placeholder='Enter text here'
                              value={inputText}
                              onChangeText={setInputText}/>
                    <Button full primary
                            style={{marginBottom: 5}}
                            onPress={() => setInputText('')}>
                        <Text>Clear input text</Text>
                    </Button>
                    <Button full primary
                            style={{marginBottom: 15}}
                            onPress={() => encrypt()}>
                        <Text>Encrypt</Text>
                    </Button>
                </Form>
                <OutputTextCard title='Encrypted text' outputText={outputText}/>
            </Content>
        </ScrollView>
    )
}

EncryptScreen.propTypes = {
    encryptText: PropTypes.func.isRequired,
}
