import React from 'react'
import AccountScreen from './src/screens/AccountScreen'
import SingupScreen from './src/screens/SingupScreen'
import SigninScreen from './src/screens/SigninScreen'
import TrackListScreen from './src/screens/TrackListScreen'
import TrackCreateScreen from './src/screens/TrackCreateScreen'
import TrackDetailScreen from './src/screens/TrackDetailScreen'
import ResolveLocalSigninScreen from './src/screens/ResolveLocalSigninScreen'

import { createSwitchNavigator, createAppContainer } from 'react-navigation'
import { createStackNavigator } from 'react-navigation-stack'
import { createBottomTabNavigator } from 'react-navigation-tabs'
import { Provider as AuthProvider } from './src/context/AuthContext'
import { Provider as LocationProvider } from './src/context/LocationContext'
import { Provider as TrackProvider } from './src/context/TrackContext'
import { setNavigator } from './src/navigationRef'

const switchNavigator = createSwitchNavigator({
  authFlow: createStackNavigator({
    Signup: SingupScreen,
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
  ResolveLocalSignin: ResolveLocalSigninScreen
}, {
  initialRouteName: 'ResolveLocalSignin'
})

const App = createAppContainer(switchNavigator)
export default () => {
  return <TrackProvider>
    <LocationProvider>
      <AuthProvider >
        <App ref={setNavigator} />
      </AuthProvider>
    </LocationProvider>
  </TrackProvider>
}