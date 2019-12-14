import React, {useState} from 'react'
import {Share} from 'react-native'
import {Body, Button, Card, CardItem, Col, Container, Content, Form, Grid, Icon, Row, Text, Textarea} from 'native-base'
import {encryptText} from '../../../ciphers/caesar'
import {ShiftPicker} from './ShiftPicker'

export const EncryptScreen = () => {
    const [inputText, setInputText] = useState('')
    const [outputText, setOutputText] = useState('')
    const [shift, setShift] = useState('3')

    const encrypt = () => {
        const encrypted = encryptText(inputText, shift)
        setOutputText(encrypted)
    }

    const share = async () => {
        try {
            await Share.share({message: outputText})
        } catch (e) {

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
                <Card>
                    <CardItem header
                              bordered
                              style={{marginBottom: 15}}>
                        <Grid>
                            <Col>
                                <Row>
                                    <Text>Encrypted text</Text>
                                </Row>
                            </Col>
                            <Col contentContainerStyle={{flex: 1}}>
                                <Row style={{justifyContent: 'flex-end'}}>
                                    <Button iconLeft small transparent onPress={() => share()}>
                                        <Icon name='share'/>
                                        <Text>Share</Text>
                                    </Button>
                                </Row>
                            </Col>
                        </Grid>
                    </CardItem>
                    <CardItem>
                        <Body>
                            <Text>{outputText}</Text>
                        </Body>
                    </CardItem>
                </Card>
            </Content>
        </Container>
    )
}
