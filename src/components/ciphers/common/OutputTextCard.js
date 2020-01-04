import React from 'react'
import PropTypes from 'prop-types'
import {Body, Button, Card, CardItem, Icon, Text, Toast} from 'native-base'
import {Clipboard, Share} from 'react-native'
import {translate} from '../../../intl/intl'

export const OutputTextCard = ({title, outputText}) => {
    const share = async () => {
        try {
            await Share.share({message: outputText})
        } catch (e) {

        }
    }

    const copy = () => {
        Clipboard.setString(outputText)

        Toast.show({
            text: translate('output_text_card_text_copied'),
            duration: 3000,
            type: 'success'
        })
    }

    return (
        <Card>
            <CardItem header
                      bordered>
                <Text>{title}</Text>
            </CardItem>
            <CardItem>
                <Body>
                    <Text>{outputText}</Text>
                </Body>
            </CardItem>
            <CardItem footer contentContainerStyle={{flex: 1}} style={{justifyContent: 'space-between'}}>
                <Button iconLeft small bordered onPress={() => share()}>
                    <Icon name='share'/>
                    <Text>{translate('output_text_card_share')}</Text>
                </Button>
                <Button iconLeft small bordered onPress={() => copy()}>
                    <Icon name='copy'/>
                    <Text>{translate('output_text_card_copy')}</Text>
                </Button>
            </CardItem>
        </Card>
    )
}

OutputTextCard.propTypes = {
    title: PropTypes.string.isRequired,
    outputText: PropTypes.string.isRequired,
}
