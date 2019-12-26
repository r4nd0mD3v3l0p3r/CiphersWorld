import React, {useState} from 'react'
import {Button, Content, Form, Text, Textarea} from 'native-base'
import {decryptText} from '../../../ciphers/vigenere'
import {charactersOnly} from '../../../utils/stringUtils'
import {showInvalidKeywordToast} from './validation'
import {OutputTextCard} from '../common/OutputTextCard'
import {ScrollView} from 'react-native'

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
                            onPress={() => decrypt()}>
                        <Text>Decrypt</Text>
                    </Button>
                </Form>
                <OutputTextCard title='Decrypted text' outputText={outputText}/>
            </Content>
        </ScrollView>
    )
}
