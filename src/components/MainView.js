import {createDrawerNavigator} from 'react-navigation-drawer'
import {HomeScreen} from './HomeScreen'
import {AboutScreen} from './AboutScreen'
import {SettingsScreen} from './SettingsScreen'
import {AtbashScreen} from './ciphers/atbash/AtbashScreen'
import {CaesarScreen} from './ciphers/caesar/CaesarScreen'
import {VigenereScreen} from './ciphers/vigenere/VigenereScreen'
import {SideBar} from './SideBar'
import {createAppContainer} from 'react-navigation'
import React, {useEffect} from 'react'
import {useDispatch, useSelector} from 'react-redux'
import {initialize} from '../redux/actions'

const RootDrawer = createDrawerNavigator(
    {
        Home: {screen: HomeScreen},
        About: {screen: AboutScreen},
        Settings: {screen: SettingsScreen},
        Atbash: {screen: AtbashScreen},
        Caesar: {screen: CaesarScreen},
        Vigenere: {screen: VigenereScreen}
    },
    {
        contentComponent: props => <SideBar {...props} />,
    },
)

let Navigation = createAppContainer(RootDrawer)

export const MainView = () => {
    const requiresSetup = useSelector(state => state.requiresSetup)
    const dispatch = useDispatch()

    useEffect(() => {
        if (requiresSetup) {
            dispatch(initialize())
        }
    }, [requiresSetup])

    return (
        <Navigation/>
    )
}
