import {Body, Button, Header, Icon, Left, Right, Title} from 'native-base'
import {DrawerActions} from 'react-navigation-drawer'
import React from 'react'
import PropTypes from 'prop-types'

const defaultTitle = 'Cipher\'s World'

export const AppHeader = ({navigation, customTitle}) => {
    return (
        <Header>
            <Left>
                <Button
                    transparent
                    onPress={() => navigation.dispatch(DrawerActions.toggleDrawer())}>
                    <Icon name="menu"/>
                </Button>
            </Left>
            <Body>
                <Title>{customTitle === undefined ? defaultTitle : customTitle}</Title>
            </Body>
            <Right/>
        </Header>
    )
}
AppHeader.propTypes = {
    navigation: PropTypes.object.isRequired,
    customTitle: PropTypes.string
}
