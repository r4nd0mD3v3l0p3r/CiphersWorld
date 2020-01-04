/**
 * @format
 * @flow
 */
import {Provider} from 'react-redux'
import {applyMiddleware, createStore} from 'redux'
import React from 'react'
import rootReducer from './src/redux/rootReducer'
import thunk from 'redux-thunk'
import {MainView} from './src/components/MainView'

const store = createStore(rootReducer, applyMiddleware(thunk))

const App = () => {
    return (
        <Provider store={store}>
            <MainView/>
        </Provider>
    )
}

export default App
