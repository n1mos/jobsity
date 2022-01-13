import React from 'react'
import { createAppContainer, createStackNavigator } from 'react-navigation'

import Header from 'App/Containers/Header/Header'
import HomeScreen from 'App/Containers/HomeScreen/HomeScreen'
import ShowScreen from 'App/Containers/ShowScreen/ShowScreen'
import EpisodeScreen from 'App/Containers/EpisodeScreen/EpisodeScreen'

import { Colors } from 'App/Theme'

const StackNavigator = createStackNavigator(
  {
    MainScreen: HomeScreen,
    ShowScreen: ShowScreen,
    EpisodeScreen: EpisodeScreen,
  },
  {
    initialRouteName: 'MainScreen',
    headerMode: 'float',
    defaultNavigationOptions: {
      headerStyle: {
        backgroundColor: Colors.black,
        height: 60,
      },
      header: (options) => <Header options={options} />,
    },
  }
)

export default createAppContainer(StackNavigator)
