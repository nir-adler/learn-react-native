import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { createAppContainer } from 'react-navigation'
import { createStackNavigator } from 'react-navigation-stack'
import SearchScreen from './src/screens/SearchScreen'
import TestScreen from './src/screens/TestScreen'
import ResultsShowScreen from './src/screens/ResultsShowScreen'

const navigator = createStackNavigator({
  Search: SearchScreen,
  ResultsShow:ResultsShowScreen,
}, {
  intialRouteName: 'Search',
  defaultNavigationOptions: {
    title: 'Business Search'
  }
})

const styles = StyleSheet.create({

})


export default createAppContainer(navigator)