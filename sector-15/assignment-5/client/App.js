import TrackListScreen from './src/screens/TrackListScreen'
import AccountScreen from './src/screens/AccountScreen'
import CreateTrackScreen from './src/screens/CreateTrackScreen'
import SigninScreen from './src/screens/SigninScreen'
import SignupScreen from './src/screens/SignupScreen'
import TrackDetailScreen from './src/screens/TrackDetailScreen'
import { createStackNavigator } from 'react-navigation-stack'
import { createAppContainer, createSwitchNavigator } from 'react-navigation'
import { createBottomTabNavigator } from 'react-navigation-tabs'
import { Provider as AuthProvider } from './src/context/AuthContext'
import React from 'react'
import { setNavigator } from './src/navigationRef'


const switchNavigator = createSwitchNavigator({
  authFlow: createStackNavigator({
    Signup: SignupScreen,
    Signin: SigninScreen
  }),
  mainFlow: createBottomTabNavigator({
    trackFlow: createStackNavigator({
      TrackList: TrackListScreen,
      TrackDetail: TrackDetailScreen
    }),
    CreateTrack: CreateTrackScreen,
    Account: AccountScreen
  })

})


const App = createAppContainer(switchNavigator)
export default () => {
  return <AuthProvider>
    <App ref={(navigator)=>{setNavigator(navigator)}} />
  </AuthProvider>
}