import React, {useState} from 'react'
import {Button, Container, Content, Form, Text, Textarea} from 'native-base'
import {charactersOnly} from '../../../utils/stringUtils'
import {encryptText} from '../../../ciphers/vigenere'
import {showInvalidKeywordToast} from './validation'
import {OutputTextCard} from '../common/OutputTextCard'

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
        <Container>
            <Content padder>
                <Form>
                    <Textarea style={{marginBottom: 15}}
                              rowSpan={5}
                              bordered
                              placeholder='Enter text here'
                              value={inputText}
                              onChangeText={setInputText}/>
                    <Textarea style={{marginBottom: 15}}
                              rowSpan={5}
                              bordered
                              placeholder='Enter keyword here'
                              value={keyword}
                              onChangeText={setKeyword}/>
                    <Button full primary
                            style={{marginBottom: 5}}
                            onPress={() => setInputText('')}>
                        <Text>Clear input text</Text>
                    </Button>
                    <Button full primary
                            style={{marginBottom: 5}}
                            onPress={() => setKeyword('')}>
                        <Text>Clear keyword</Text>
                    </Button>
                    <Button full primary
                            style={{marginBottom: 15}}
                            onPress={() => encrypt()}>
                        <Text>Encrypt</Text>
                    </Button>
                </Form>
                <OutputTextCard title='Encrypted text' outputText={outputText}/>
            </Content>
        </Container>
    )
}
