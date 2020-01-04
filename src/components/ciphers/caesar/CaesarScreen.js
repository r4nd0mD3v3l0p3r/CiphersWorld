import React from 'react'
import {Container, Content, ScrollableTab, Tab, Tabs} from 'native-base'
import {EncryptScreen} from './EncryptScreen'
import {DecryptScreen} from './DecryptScreen'
import {Overview} from '../common/Overview'
import {AppHeader} from '../common/Header'
import {translate} from '../../../intl/intl'

const referenceLinks = [{site: 'Wikipedia', url: 'https://en.wikipedia.org/wiki/Caesar_cipher'}]

export const CaesarScreen = ({navigation}) => {
    const caesarTitle = translate('caesar_title')
    const cipherDescription = translate('caesar_description')

    return (
        <Container>
            <AppHeader navigation={navigation} customTitle={caesarTitle}/>
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
