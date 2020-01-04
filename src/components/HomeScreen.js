import React from 'react'
import {Body, Card, CardItem, Container, Content, Text} from 'native-base'
import {AppHeader} from './ciphers/common/Header'
import {useSelector} from 'react-redux'
import {translate} from '../intl/intl'

export const HomeScreen = ({navigation}) => {
    const requiresSetup = useSelector(state => state.requiresSetup)

    return (
        <>
            {requiresSetup && navigation.navigate('Settings', {firstSetup: true})}
            {!requiresSetup &&
            <Container>
                <AppHeader navigation={navigation}/>
                <Content padder>
                    <Card>
                        <CardItem>
                            <Body>
                                <Text style={{marginBottom: 5}}>{translate('home_screen_welcome_title')}</Text>
                                <Text>{translate('home_screen_welcome_text')}</Text>
                            </Body>
                        </CardItem>
                    </Card>
                </Content>
            </Container>
            }
        </>
    )
}
