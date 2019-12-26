import React from 'react'
import {Container, Content, List, ListItem, Text} from 'native-base'

const routes = [
    {name: 'Home', key: 'home'},
    {name: 'About', key: 'about'},
]

const ciphers = [
    {name: 'Atbash', key: 'atbash'},
    {name: 'Caesar', key: 'caesar'},
    {name: 'Vigenere', key: 'vigenere'},
]

export const SideBar = ({navigation}) => {
    const listItem = item =>
        (<ListItem
            key={item.key}
            button
            onPress={() => navigation.navigate(item.name)}>
            <Text>{item.name}</Text>
        </ListItem>)

    return (
        <Container>
            <Content>
                <List>
                    <ListItem itemHeader first>
                        <Text>GENERAL</Text>
                    </ListItem>
                    {routes.map(x => listItem(x))}
                </List>

                <List>
                    <ListItem itemHeader first>
                        <Text>CIPHERS</Text>
                    </ListItem>
                    {ciphers.map(x => listItem(x))}
                </List>
            </Content>
        </Container>
    )
}
