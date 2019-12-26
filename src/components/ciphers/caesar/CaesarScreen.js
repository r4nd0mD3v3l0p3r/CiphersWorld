import React from 'react'
import {Container, Content, ScrollableTab, Tab, Tabs} from 'native-base'
import {EncryptScreen} from './EncryptScreen'
import {DecryptScreen} from './DecryptScreen'
import {Overview} from '../common/Overview'
import {AppHeader} from '../common/Header'

export const CaesarTitle = 'Caesar cipher'
const cipherDescription = 'The Caesar cipher is a substitution cipher in which each letter of a given text is replaced by a letter some fixed number' +
    ' of positions down the alphabet. Julius Caesar used a right shift of 3 places to encrypt his messages.'
const referenceLinks = [{site: 'Wikipedia', url: 'https://en.wikipedia.org/wiki/Caesar_cipher'}]


export const CaesarScreen = ({navigation}) => {
    return (
        <Container>
            <AppHeader navigation={navigation} customTitle={CaesarTitle}/>
            <Content>
                <Tabs renderTabBar={() => <ScrollableTab/>}>
                    <Tab heading='Overview'>
                        <Overview referenceLinks={referenceLinks}
                                  cipherDescription={cipherDescription}/>
                    </Tab>
                    <Tab heading='Encryption'>
                        <EncryptScreen/>
                    </Tab>
                    <Tab heading='Decryption'>
                        <DecryptScreen/>
                    </Tab>
                </Tabs></Content>
        </Container>
    )
}

CaesarScreen.propTypes = {}
