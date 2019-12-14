import React from 'react'
import {Container, Content, List, ListItem, Text} from 'native-base'

const routes = [
    {name: 'Home', key: 'home'},
    {name: 'About', key: 'about'},
    {name: 'Atbash', key: 'atbash'},
    {name: 'Caesar', key: 'caesar'},
]
export const SideBar = ({navigation}) => {
    return (
        <Container>
            <Content>
                <List
                    dataArray={routes}
                    renderRow={data => {
                        return (
                            <ListItem
                                key={data.key}
                                button
                                onPress={() => navigation.navigate(data.name)}>
                                <Text>{data.name}</Text>
                            </ListItem>
                        )
                    }}
                />
            </Content>
        </Container>
    )
}
