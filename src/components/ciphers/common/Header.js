import {Body, Button, Header, Icon, Left, Title} from 'native-base'
import {DrawerActions} from 'react-navigation-drawer'
import React from 'react'
import {translate} from '../../../intl/intl'
import PropTypes from 'prop-types'

export const AppHeader = ({navigation, customTitle}) => {
    const defaultTitle = translate('app_title')

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
        </Header>
    )
}
AppHeader.propTypes = {
    navigation: PropTypes.object.isRequired,
    customTitle: PropTypes.string
}
