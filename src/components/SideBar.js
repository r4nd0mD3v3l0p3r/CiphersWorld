import React from 'react'
import {Container, Content, List, ListItem, Text} from 'native-base'
import {translate} from '../intl/intl'

export const SideBar = ({navigation}) => {

    const routes = [
        {name: 'Home', key: 'home', displayName: translate('sidebar_route_home')},
        {name: 'About', key: 'about', displayName: translate('sidebar_route_about')},
        {name: 'Settings', key: 'settings', displayName: translate('sidebar_route_settings')},
    ]

    const ciphers = [
        {name: 'Atbash', key: 'atbash', displayName: translate('sidebar_route_ciphers_atbash')},
        {name: 'Caesar', key: 'caesar', displayName: translate('sidebar_route_ciphers_caesar')},
        {name: 'Vigenere', key: 'vigenere', displayName: translate('sidebar_route_ciphers_vigenere')},
    ]
    const listItem = item =>
        (<ListItem
            key={item.key}
            button
            onPress={() => navigation.navigate(item.name, item.params)}>
            <Text>{item.displayName}</Text>
        </ListItem>)

    return (
        <Container>
            <Content>
                <List>
                    <ListItem itemHeader first>
                        <Text>{translate('sidebar_category_general')}</Text>
                    </ListItem>
                    {routes.map(x => listItem(x))}
                </List>

                <List>
                    <ListItem itemHeader first>
                        <Text>{translate('sidebar_category_ciphers')}</Text>
                    </ListItem>
                    {ciphers.map(x => listItem(x))}
                </List>
            </Content>
        </Container>
    )
}
