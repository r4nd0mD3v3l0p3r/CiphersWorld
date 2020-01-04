import React from 'react'
import PropTypes from 'prop-types'
import {Linking} from 'react-native'
import {Body, Card, CardItem, Container, Text} from 'native-base'
import {translate} from '../../../intl/intl'

export const Overview = ({cipherDescription, referenceLinks}) => {
    return (
        <Container>
            <Card>
                <CardItem header bordered>
                    <Text>{translate('overview_cipher_description')}</Text>
                </CardItem>
                <CardItem>
                    <Body>
                        <Text>{cipherDescription}</Text>
                    </Body>
                </CardItem>
            </Card>
            <Card>
                <CardItem header bordered>
                    <Text>{translate('overview_reference_links')}</Text>
                </CardItem>
                <CardItem>
                    <Body>
                        {referenceLinks.map((x, index) => (
                            <Text key={index}
                                  onPress={() => Linking.openURL(x.url)}
                                  style={{color: 'blue'}}>
                                {x.site}
                            </Text>
                        ))}
                    </Body>
                </CardItem>
            </Card>
        </Container>
    )
}
Overview.propTypes = {
    cipherDescription: PropTypes.string.isRequired,
    referenceLinks: PropTypes.array.isRequired
}
