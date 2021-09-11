import * as React from 'react'
import { Context as AuthContext } from './src/context/AuthContext'
import trackerApi from './src/api/trackerApi'
import * as SecureStore from 'expo-secure-store'
import { View, ActivityIndicator, StyleSheet, Text } from 'react-native'
import { createStackNavigator } from '@react-navigation/stack'
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import { Provider as LocationProvider } from './src/context/LocationContext'
import { Provider as TrackProvider } from './src/context/TrackContext'
import { navigationRef } from './src/navigationRef'

import AccountScreen from './src/screens/AccountScreen'
import SignupScreen from './src/screens/SignupScreen'
import SigninScreen from './src/screens/SigninScreen'
import TrackListScreen from './src/screens/TrackListScreen'
import TrackDetailScreen from './src/screens/TrackDetailScreen'
import TrackCreateScreen from './src/screens/TrackCreateScreen'

const AuthStack = createStackNavigator()
const TrackListStack = createStackNavigator()
const Tab = createBottomTabNavigator()

const TrackListFlow = () => <TrackListStack.Navigator>
  <TrackListStack.Screen options={{ headerShown: false }} name='TrackList' component={TrackListScreen} />
  <TrackListStack.Screen  name='TrackDetail' component={TrackDetailScreen} />
</TrackListStack.Navigator>


const styles = StyleSheet.create({
  isLoadingContainer: {
    flex: 1,
    justifyContent: 'center',
  }
})


export default () => {
  const [state, dispatch] = React.useReducer((state, action) => {
    switch (action.type) {
      case 'try_local_token':
        return { ...state, token: action.payload, isLoading: false }
      case 'signin':
        return { ...state, token: action.payload }
      case 'add_error_message':
        return { ...state, errorMessage: action.payload }
      default:
        return state
    }
  }, {
    token: null,
    isLoading: true,
    errorMessage: ''
  })


  React.useEffect(() => {
    const localToken = async () => {
      const token = await SecureStore.getItemAsync('token')
      dispatch({ type: 'try_local_token', payload: token })
    }
    localToken()
  }, [])

  const authContext = React.useMemo(() => ({
    signOut: async () => {
      try {
        await SecureStore.deleteItemAsync('token')
        dispatch({ type: 'signin', payload: null })
      } catch (e) {

      }
    },
    signIn: async ({ email, password }) => {
      try {
        const response = await trackerApi.post('/signin', {
          email,
          password
        })
        await SecureStore.setItemAsync('token', response.data.token)
        dispatch({ type: 'signin', payload: response.data.token })
      } catch (e) {
        console.log(e)
        dispatch({ type: 'add_error_message', payload: JSON.stringify(e.message) })
      }
    },
    signUp: async ({ email, password }) => {
      try {
        const response = await trackerApi.post('/signup', {
          email,
          password
        })
        await SecureStore.setItemAsync('token', response.data.token)
        dispatch({ type: 'signin', payload: response.data.token })
      } catch (e) {
        dispatch({ type: 'add_error_message', payload: e.response.data.error })
      }
    },
    clearErrorMessage: () => {
      dispatch({ type: 'add_error_message', payload: '' })
    }
  }), [])


  if (state.isLoading) {
    return <View style={styles.isLoadingContainer}>
      <ActivityIndicator size='large' color='#000' />
    </View>
  }

  return (
    <TrackProvider>
      <LocationProvider>
        <AuthContext.Provider
          value={{ state, ...authContext }}
        >

          <NavigationContainer ref={navigationRef}>
            {state.token
              ?
              <Tab.Navigator>
                <Tab.Screen options={{ headerShown: false }} name='TrackListFlow' component={TrackListFlow} />
                <Tab.Screen options={{ headerShown: false }} name='TrackCreate' component={TrackCreateScreen} />
                <Tab.Screen options={{ headerShown: false }} name='Account' component={AccountScreen} />
              </Tab.Navigator>
              :
              <AuthStack.Navigator>
                <AuthStack.Screen options={{ headerShown: false }} name='Signup' component={SignupScreen} />
                <AuthStack.Screen options={{ headerShown: false }} name='Signin' component={SigninScreen} />
              </AuthStack.Navigator>}

          </NavigationContainer>
        </AuthContext.Provider>
      </LocationProvider>
    </TrackProvider>

  )

}




