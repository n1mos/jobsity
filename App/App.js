import React, { Component } from 'react'
import { Provider } from 'react-redux'
import { PersistGate } from 'redux-persist/lib/integration/react'
import createStore from 'App/Stores'
import RootScreen from './Containers/Root/RootScreen'

const { store, persistor } = createStore()

export default class App extends Component {
  render() {
    return (
      <Provider store={store}>
        {/* PersistGate delays the rendering of the app's UI until the persisted state has been retrieved */}
        <PersistGate loading={null} persistor={persistor}>
          <RootScreen />
        </PersistGate>
      </Provider>
    )
  }
}
