import React from 'react'
import PropTypes from 'prop-types'
import {Body, Button, Card, CardItem, Icon, Text, Toast} from 'native-base'
import {Clipboard, Share} from 'react-native'

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
            text: 'Copied to clipboard',
            duration: 3000,
            type: 'success'
        })
    }

    return (
        <Card>
            <CardItem header
                      bordered
                      style={{marginBottom: 15}}>
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
                    <Text>Share</Text>
                </Button>
                <Button iconLeft small bordered onPress={() => copy()}>
                    <Icon name='copy'/>
                    <Text>Copy</Text>
                </Button>
            </CardItem>
        </Card>
    )
}

OutputTextCard.propTypes = {
    title: PropTypes.string.isRequired,
    outputText: PropTypes.string.isRequired,
}
