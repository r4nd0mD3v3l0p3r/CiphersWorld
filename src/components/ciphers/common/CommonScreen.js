import React from 'react'
import PropTypes from 'prop-types'
import {Container, Content, ScrollableTab, Tab, Tabs} from 'native-base'
import {EncryptScreen} from './EncryptScreen'
import {DecryptScreen} from './DecryptScreen'
import {Overview} from './Overview'
import {AppHeader} from './Header'

export const CommonScreen = ({headerTitle, encryptText, decryptText, cipherDescription, referenceLinks, navigation}) => {
    return (
        <Container>
            <AppHeader navigation={navigation} customTitle={headerTitle}/>
            <Content>
                <Tabs renderTabBar={() => <ScrollableTab/>}>
                    <Tab heading='Overview'>
                        <Overview referenceLinks={referenceLinks}
                                  cipherDescription={cipherDescription}/>
                    </Tab>
                    <Tab heading='Encryption'>
                        <EncryptScreen encryptText={encryptText}/>
                    </Tab>
                    <Tab heading='Decryption'>
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
