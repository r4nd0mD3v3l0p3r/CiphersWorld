import {Body, Card, CardItem, Container, Content, Text} from 'native-base'
import React from 'react'
import {Linking} from 'react-native'
import {AppHeader} from '../ciphers/common/Header'

const repoUrl = 'https://github.com/r4nd0mD3v3l0p3r/CiphersWorld'

export const AboutScreen = ({navigation}) => {
    return (
        <Container>
            <AppHeader navigation={navigation}/>
            <Content padder>
                <Card>
                    <CardItem>
                        <Body>
                            <Text>This app is licensed under GPL3. You can find the source code in my </Text>
                            <Text
                                onPress={() => Linking.openURL(repoUrl)}
                                style={{color: 'blue'}}>
                                Github repository
                            </Text>
                        </Body>
                    </CardItem>
                </Card>
            </Content>
        </Container>
    )
}
