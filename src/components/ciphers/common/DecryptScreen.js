import React, {useState} from 'react'
import PropTypes from 'prop-types'
import {Body, Button, Card, CardItem, Col, Container, Content, Form, Grid, Icon, Row, Text, Textarea} from 'native-base'
import {Share} from 'react-native'

export const DecryptScreen = ({decryptText}) => {
    const [inputText, setInputText] = useState('')
    const [outputText, setOutputText] = useState('')

    const decrypt = () => {
        const decrypted = decryptText(inputText)
        setOutputText(decrypted)
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
                <Card>
                    <CardItem header
                              bordered
                              style={{marginBottom: 15}}>
                        <Grid>
                            <Col>
                                <Row>
                                    <Text>Decrypted text</Text>
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

DecryptScreen.propTypes = {
    decryptText: PropTypes.func.isRequired,
}
