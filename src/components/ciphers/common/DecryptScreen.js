import React, {useState} from 'react'
import PropTypes from 'prop-types'
import {Button, Container, Content, Form, Text, Textarea} from 'native-base'
import {OutputTextCard} from './OutputTextCard'

export const DecryptScreen = ({decryptText}) => {
    const [inputText, setInputText] = useState('')
    const [outputText, setOutputText] = useState('')

    const decrypt = () => {
        const decrypted = decryptText(inputText)
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

DecryptScreen.propTypes = {
    decryptText: PropTypes.func.isRequired,
}
