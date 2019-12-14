import React from 'react'
import {Body, Button, Card, CardItem, Container, Content, Header, Icon, Left, Right, Text, Title} from 'native-base'
import {DrawerActions} from 'react-navigation-drawer'

export const HomeScreen = ({navigation}) => {
    return (
        <Container>
            <Header>
                <Left>
                    <Button
                        transparent
                        onPress={() => navigation.dispatch(DrawerActions.toggleDrawer())}>
                        <Icon name="menu"/>
                    </Button>
                </Left>
                <Body>
                    <Title>Cipher's World</Title>
                </Body>
                <Right/>
            </Header>
            <Content padder>
                <Card>
                    <CardItem>
                        <Body>
                            <Text style={{marginBottom: 5}}>Welcome to Cipher's World!</Text>
                            <Text>It's a simple app to learn about ciphers and have some fun with them!</Text>
                        </Body>
                    </CardItem>
                </Card>
            </Content>
        </Container>
    )
}
