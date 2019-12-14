import React from 'react'
import PropTypes from 'prop-types'
import {Container, ScrollableTab, Tab, Tabs} from 'native-base'
import {EncryptScreen} from './EncryptScreen'
import {DecryptScreen} from './DecryptScreen'
import {Overview} from './Overview'

export const CommonScreen = ({encryptText, decryptText, cipherDescription, referenceLinks}) => {
    return (
        <Container>
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
        </Container>
    )
}

CommonScreen.propTypes = {
    encryptText: PropTypes.func.isRequired,
    decryptText: PropTypes.func.isRequired,
    cipherDescription: PropTypes.string.isRequired,
    referenceLinks: PropTypes.array.isRequired
}
