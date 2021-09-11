import React from 'react'
import { createStackNavigator } from 'react-navigation-stack'
import { createAppContainer, createSwitchNavigator } from 'react-navigation'
import { createBottomTabNavigator } from 'react-navigation-tabs'

import AccountScreen from './src/screens/AccountScreen'
import TrackListScreen from './src/screens/TrackListScreen'
import TrackDetailScreen from './src/screens/TrackDetailScreen'
import TrackCreateScreen from './src/screens/TrackCreateScreen'
import SignupScreen from './src/screens/SignupScreen'
import SigninScreen from './src/screens/SigninScreen'
import { Provider as AuthProvider } from './src/context/AuthContext'
import { Provider as LocationProvider } from './src/context/LocationContext'
import { setNavigator } from './src/navigationRef'
import ResolveAuthScreen from './src/screens/ResolveAuthScreen'

const switchNavigator = createSwitchNavigator({
  authFlow: createStackNavigator({
    Signup: SignupScreen,
    Signin: SigninScreen
  }),
  mainFlow: createBottomTabNavigator({
    trackListFlow: createStackNavigator({
      TrackList: TrackListScreen,
      TrackDetail: TrackDetailScreen
    }),
    TrackCreate: TrackCreateScreen,
    Account: AccountScreen
  }),
  ResolveAuth: ResolveAuthScreen
}, {
  initialRouteName: 'ResolveAuth'
})

const App = createAppContainer(switchNavigator)

export default () => {
  return <LocationProvider>
    <AuthProvider>
      <App ref={setNavigator} />
    </AuthProvider>
  </LocationProvider>

}