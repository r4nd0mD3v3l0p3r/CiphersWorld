import React from 'react'
import {Container, ScrollableTab, Tab, Tabs} from 'native-base'
import {EncryptScreen} from './EncryptScreen'
import {DecryptScreen} from './DecryptScreen'
import {Overview} from '../common/Overview'

const cipherDescription = 'The Caesar cipher is a substitution cipher in which each letter of a given text is replaced by a letter some fixed number' +
    ' of positions down the alphabet. Julius Caesar used a right shift of 3 places to encrypt his messages.'
const referenceLinks = [{site: 'Wikipedia', url: 'https://en.wikipedia.org/wiki/Caesar_cipher'}]

export const CaesarScreen = () => {
    return (
        <Container>
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
            </Tabs>
        </Container>
    )
}

CaesarScreen.propTypes = {}
