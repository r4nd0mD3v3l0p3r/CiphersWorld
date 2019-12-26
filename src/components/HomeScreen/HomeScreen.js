import React from 'react'
import {Body, Card, CardItem, Container, Content, Text} from 'native-base'
import {AppHeader} from '../ciphers/common/Header'

export const HomeScreen = ({navigation}) => {
    return (
        <Container>
            <AppHeader navigation={navigation}/>
            <Content padder>
                <Card>
                    <CardItem>
                        <Body>
                            <Text style={{marginBottom: 5}}>Welcome to Cipher's World!</Text>
                            <Text>It's a simple app to learn about ciphers and have some fun with them!</Text>
                        </Body>
                    </CardItem>
                </Card>
            </Content>
        </Container>
    )
}
