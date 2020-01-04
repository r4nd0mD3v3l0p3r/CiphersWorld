import React from 'react'
import {Container, Content, ScrollableTab, Tab, Tabs} from 'native-base'
import {EncryptScreen} from './EncryptScreen'
import {DecryptScreen} from './DecryptScreen'
import {Overview} from '../common/Overview'
import {AppHeader} from '../common/Header'
import {translate} from '../../../intl/intl'

const referenceLinks = [{site: 'Wikipedia', url: 'https://en.wikipedia.org/wiki/Vigen%C3%A8re_cipher'}]

export const VigenereScreen = ({navigation}) => {
    const vigenereTitle = translate('vigenere_title')
    const cipherDescription = translate('vigenere_description')

    return (
        <Container>
            <AppHeader navigation={navigation} customTitle={vigenereTitle}/>
            <Content>
                <Tabs renderTabBar={() => <ScrollableTab/>}>
                    <Tab heading={translate('ciphers_common_overview_title')}>
                        <Overview referenceLinks={referenceLinks}
                                  cipherDescription={cipherDescription}/>
                    </Tab>
                    <Tab heading={translate('ciphers_common_encryption_title')}>
                        <EncryptScreen/>
                    </Tab>
                    <Tab heading={translate('ciphers_common_decryption_title')}>
                        <DecryptScreen/>
                    </Tab>
                </Tabs></Content>
        </Container>
    )
}

VigenereScreen.propTypes = {}
