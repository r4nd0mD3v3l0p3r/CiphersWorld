import React, {useState} from 'react'
import {Button, Container, Content, Form, Text, Textarea} from 'native-base'
import {encryptText} from '../../../ciphers/caesar'
import {ShiftPicker} from './ShiftPicker'
import {OutputTextCard} from '../common/OutputTextCard'

export const EncryptScreen = () => {
    const [inputText, setInputText] = useState('')
    const [outputText, setOutputText] = useState('')
    const [shift, setShift] = useState('3')

    const encrypt = () => {
        const encrypted = encryptText(inputText, shift)
        setOutputText(encrypted)
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
                    <ShiftPicker onValueChange={setShift} selectedValue={shift}/>
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
        </Container>
    )
}
