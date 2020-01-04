import {Body, Card, CardItem, Container, Content, Text} from 'native-base'
import React from 'react'
import {Linking} from 'react-native'
import {AppHeader} from './ciphers/common/Header'
import {translate} from '../intl/intl'

const repoUrl = 'https://github.com/r4nd0mD3v3l0p3r/CiphersWorld'

export const AboutScreen = ({navigation}) => {
    return (
        <Container>
            <AppHeader navigation={navigation}/>
            <Content padder>
                <Card>
                    <CardItem>
                        <Body>
                            <Text>{translate('about_screen_text')}</Text>
                            <Text
                                onPress={() => Linking.openURL(repoUrl)}
                                style={{color: 'blue'}}>
                                {translate('about_screen_repo')}
                            </Text>
                        </Body>
                    </CardItem>
                </Card>
            </Content>
        </Container>
    )
}
