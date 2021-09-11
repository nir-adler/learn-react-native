import React from 'react'
import { createStackNavigator } from 'react-navigation-stack'
import { createAppContainer, createSwitchNavigator } from 'react-navigation'
import { createBottomTabNavigator } from 'react-navigation-tabs'

import AccountScreen from './src/screens/AccountScreen'
import SignupScreen from './src/screens/SignupScreen'
import SigninScreen from './src/screens/SigninScreen'
import TrackCreateScreen from './src/screens/TrackCreateScreen'
import TrackDetailScreen from './src/screens/TrackDetailScreen'
import TrackListScreen from './src/screens/TrackListScreen'
import { Provider as AuthProvider } from './src/context/AuthContext'
import {setNavigator} from './src/navigationRef'
import ResolveAuthScreen from './src/screens/ResolveAuthScreen'

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
    TrackCreate: TrackCreateScreen,
    Account: AccountScreen
  }),
  ResolveAuth:ResolveAuthScreen
},{
  initialRouteName:'ResolveAuth'
})




const App = createAppContainer(switchNavigator)

export default ()=>{
  return <AuthProvider>
    <App ref={setNavigator}/>
  </AuthProvider>
}