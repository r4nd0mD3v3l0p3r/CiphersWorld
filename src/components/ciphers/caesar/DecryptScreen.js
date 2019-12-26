import React, {useState} from 'react'
import {Button, Container, Content, Form, Text, Textarea} from 'native-base'
import {decryptText} from '../../../ciphers/caesar'
import {ShiftPicker} from './ShiftPicker'
import {OutputTextCard} from '../common/OutputTextCard'

export const DecryptScreen = () => {
    const [inputText, setInputText] = useState('')
    const [outputText, setOutputText] = useState('')
    const [shift, setShift] = useState('3')

    const decrypt = () => {
        const decrypted = decryptText(inputText, shift)
        setOutputText(decrypted)
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
                            onPress={() => decrypt()}>
                        <Text>Decrypt</Text>
                    </Button>
                </Form>
                <OutputTextCard title='Decrypted text' outputText={outputText}/>
            </Content>
        </Container>
    )
}
