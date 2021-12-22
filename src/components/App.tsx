import React from 'react'
import { Provider } from 'react-redux'
import { store } from '../state'
import RepositoriesList from './RepositoriesList'

const App = () => {
    return (
        <Provider store={store}>
            <div><h1>Search NPM Package</h1></div>
             <RepositoriesList />
        </Provider>
    )
}

export default App
