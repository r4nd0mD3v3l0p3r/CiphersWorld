/**
 * @format
 * @flow
 */

import React from 'react'
import HomeScreen from './src/components/HomeScreen'
import {Root} from 'native-base'

const App: () => React$Node = () => {
    return (
        <Root>
            <HomeScreen/>
        </Root>
    )
}

export default App
