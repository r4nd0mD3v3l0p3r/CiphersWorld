import React from 'react'
import {Body, Button, Card, CardItem, Container, Form, Picker, Text} from 'native-base'
import {ScrollView} from 'react-native'
import {AppHeader} from './ciphers/common/Header'
import {supportedLanguages, translate} from '../intl/intl'
import {useDispatch, useSelector} from 'react-redux'
import {changeLanguage, setupCompleted} from '../redux/actions'

export const SettingsScreen = ({navigation}) => {
    const firstSetup = navigation.getParam('firstSetup', false)
    const language = useSelector(state => state.language)
    const dispatch = useDispatch()

    const setupDone = () => {
        dispatch(setupCompleted())
        navigation.navigate('Home')
    }

    return (
        <Container>
            {!firstSetup && <AppHeader navigation={navigation} customTitle='Settings'/>}

            <ScrollView>
                {firstSetup && <Card style={{marginBottom: 20}}>
                    <CardItem>
                        <Body>
                            <Text style={{marginBottom: 5}}>{translate('home_screen_welcome_title')}</Text>
                            <Text>{translate('settings_screen_please_configure')}</Text>
                        </Body>
                    </CardItem>
                </Card>}
                <Form>
                    <Text style={{marginLeft: 5}}>{translate('settings_screen_language')}</Text>
                    <Picker
                        mode="dropdown"
                        selectedValue={language}
                        onValueChange={v => dispatch(changeLanguage(v))}>
                        {supportedLanguages().map(x => (<Picker.Item key={x.value} label={x.label} value={x.value}/>))}
                    </Picker>
                    {firstSetup &&
                    <Button full
                            primary
                            style={{marginTop: 10}}
                            onPress={setupDone}>
                        <Text>{translate('settings_screen_done')}</Text>
                    </Button>
                    }
                </Form>
            </ScrollView>
        </Container>
    )
}
