import React from 'react'
import PropTypes from 'prop-types'
import {Container, Content, ScrollableTab, Tab, Tabs} from 'native-base'
import {EncryptScreen} from './EncryptScreen'
import {DecryptScreen} from './DecryptScreen'
import {Overview} from './Overview'
import {AppHeader} from './Header'
import {translate} from '../../../intl/intl'

export const CommonScreen = ({headerTitle, encryptText, decryptText, cipherDescription, referenceLinks, navigation}) => {
    return (
        <Container>
            <AppHeader navigation={navigation} customTitle={headerTitle}/>
            <Content>
                <Tabs renderTabBar={() => <ScrollableTab/>}>
                    <Tab heading={translate('ciphers_common_overview_title')}>
                        <Overview referenceLinks={referenceLinks}
                                  cipherDescription={cipherDescription}/>
                    </Tab>
                    <Tab heading={translate('ciphers_common_encryption_title')}>
                        <EncryptScreen encryptText={encryptText}/>
                    </Tab>
                    <Tab heading={translate('ciphers_common_decryption_title')}>
                        <DecryptScreen decryptText={decryptText}/>
                    </Tab>
                </Tabs>
            </Content>
        </Container>
    )
}

CommonScreen.propTypes = {
    navigation: PropTypes.object.isRequired,
    headerTitle: PropTypes.string.isRequired,
    encryptText: PropTypes.func.isRequired,
    decryptText: PropTypes.func.isRequired,
    cipherDescription: PropTypes.string.isRequired,
    referenceLinks: PropTypes.array.isRequired
}
