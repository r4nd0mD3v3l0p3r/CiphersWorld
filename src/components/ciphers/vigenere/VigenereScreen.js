import React from 'react'
import {Container, Content, ScrollableTab, Tab, Tabs} from 'native-base'
import {EncryptScreen} from './EncryptScreen'
import {DecryptScreen} from './DecryptScreen'
import {Overview} from '../common/Overview'
import {AppHeader} from '../common/Header'

export const VigenereTitle = 'Vigenere cipher'
const cipherDescription = 'The Vigenere cipher is a polyalphabetic cipher. It uses a series of interwoven Caesar ciphers, based on the letters of a keyword.'
const referenceLinks = [{site: 'Wikipedia', url: 'https://en.wikipedia.org/wiki/Vigen%C3%A8re_cipher'}]

export const VigenereScreen = ({navigation}) => {
    return (
        <Container>
            <AppHeader navigation={navigation} customTitle={VigenereTitle}/>
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

VigenereScreen.propTypes = {}
