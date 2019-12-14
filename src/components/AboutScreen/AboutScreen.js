import {Body, Card, CardItem, Container, Content, Text} from 'native-base'
import React from 'react'

export const AboutScreen = () => {
    return (
        <Container>
            <Content padder>
                <Card>
                    <CardItem>
                        <Body>
                            <Text>This app is licensed under GPL3. You can find the source code in my github repository</Text>
                        </Body>
                    </CardItem>
                </Card>
            </Content>
        </Container>
    )
}
