import React from 'react'
import {HomeScreen} from './HomeScreen'
import {SideBar} from '../SideBar/SideBar'
import {createDrawerNavigator} from 'react-navigation-drawer'
import {createAppContainer} from 'react-navigation'
import {AboutScreen} from '../AboutScreen/AboutScreen'
import {AtbashScreen} from '../ciphers/atbash/AtbashScreen'
import {CaesarScreen} from '../ciphers/caesar/CaesarScreen'
import {VigenereScreen} from '../ciphers/vigenere/VigenereScreen'

const HomeScreenRouter = createDrawerNavigator(
    {
        Home: {screen: HomeScreen},
        About: {screen: AboutScreen},
        Atbash: {screen: AtbashScreen},
        Caesar: {screen: CaesarScreen},
        Vigenere: {screen: VigenereScreen}
    },
    {
        contentComponent: props => <SideBar {...props} />,
    },
)
export default createAppContainer(HomeScreenRouter)
