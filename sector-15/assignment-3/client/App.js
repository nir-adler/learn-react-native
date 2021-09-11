import AccountScreen from './src/screens/AccountScreen'
import CreateTrackScreen from './src/screens/CreateTrackScreen'
import SigninScreen from './src/screens/SigninScreen'
import SignupScreen from './src/screens/SignupScreen'
import TrackDetailScreen from './src/screens/TrackDetailScreen'
import TrackListScreen from './src/screens/TrackListScreen'
import { createStackNavigator } from 'react-navigation-stack'
import { createAppContainer, createSwitchNavigator } from 'react-navigation'
import { createBottomTabNavigator } from 'react-navigation-tabs'
import { Provider as AuthProvider } from './src/context/AuthContext'
import React from 'react'

const switchNavigator = createSwitchNavigator({
  loginFlow: createStackNavigator({
    Signup: SignupScreen,
    Signin: SigninScreen,
  }),
  mainFlow: createBottomTabNavigator({
    trackListFlow: createStackNavigator({
      TrackList: TrackListScreen,
      TrackDetail: TrackDetailScreen
    }),
    Account: AccountScreen,
    CreateTrack: CreateTrackScreen
  }),
})

const App = createAppContainer(switchNavigator)
export default () => {
  return (
    <AuthProvider>
      <App />
    </AuthProvider>
  )
}