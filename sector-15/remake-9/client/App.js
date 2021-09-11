import * as React from 'react'
import { View, Text, ActivityIndicator, StyleSheet } from 'react-native'
import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'

import AccountScreen from './src/screens/AccountScreen'
import TrackListScreen from './src/screens/TrackListScreen'
import TrackCreateScreen from './src/screens/TrackCreateScreen'
import TrackDetailScreen from './src/screens/TrackDetailScreen'
import SignupScreen from './src/screens/SignupScreen'
import SigninScreen from './src/screens/SigninScreen'
import * as SecureStore from 'expo-secure-store'
import { AuthContext } from './src/context/AuthContext'
import trackerApi from './src/api/trackerApi'
import { Provider as LocationProvider } from './src/context/LocationContext'
import { Provider as TrackProvider } from './src/context/TrackContext'
import { navigationRef } from './src/navigationRef'


const Stack = createNativeStackNavigator()
const TrackList = createNativeStackNavigator()
const Tab = createBottomTabNavigator()

const TrackListFlow = () => <TrackList.Navigator initialRouteName='TrackList'>
    <Stack.Screen name="TrackList" options={{ headerShown: false }} component={TrackListScreen} />
    <Stack.Screen name="TrackDetail" component={TrackDetailScreen} />
</TrackList.Navigator>

const styles = StyleSheet.create({
    loadingTokenContainer: {
        flex: 1,
        justifyContent: 'center'
    }
})

export default ({ navigation }) => {

    const [state, dispatch] = React.useReducer((state, action) => {
        switch (action.type) {
            case 'signin':
                return { ...state, token: action.payload }
            case 'local_signin':
                return { ...state, token: action.payload, isLoading: false }
            case 'add_error_message':
                return { ...state, errorMessage: action.payload }
            default:
                return state
        }
    }, {
        isLoading: true,
        isSignout: false,
        token: null,
        errorMessage: ''
    })


    React.useEffect(() => {
        const tryLoadtoken = async () => {
            const token = await SecureStore.getItemAsync('token')
            if (token) {
                dispatch({ type: 'local_signin', payload: token })
            }
        }
        tryLoadtoken()
    }, [])


    const authContext = React.useMemo(
        () => ({
            signOut: async () => {
                try {
                    await SecureStore.deleteItemAsync('token')
                    dispatch({ type: 'signin', payload: null })
                } catch (e) {
                    dispatch({ type: 'add_error_message', payload: JSON.stringify(e) })
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
                    // console.log(e.response.data)
                    dispatch({ type: 'add_error_message', payload: e.response.data.error })
                }
            },
            clearErrorMessage: () => {
                dispatch({ type: 'add_error_message', payload: '' })
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
                    // console.log(e.response.data)
                    dispatch({ type: 'add_error_message', payload: e.response.data.error })
                }
            }
        }), [])


    if (state.isLoading) {
        return <View style={styles.loadingTokenContainer}>
            <ActivityIndicator size='large' />
        </View>
    }

    return (
        <TrackProvider>
            <LocationProvider>
                <AuthContext.Provider value={{ state, ...authContext }}>
                    <NavigationContainer ref={navigationRef}>
                        {!state.token
                            ?
                            <Stack.Navigator initialRouteName='Signup'>
                                <Stack.Screen options={{ title: 'OverView', headerShown: false }} name="Signup" component={SignupScreen} />
                                <Stack.Screen options={{ headerShown: false }} name="Signin" component={SigninScreen} />
                            </Stack.Navigator>
                            :
                            <Tab.Navigator>
                                <Tab.Screen name='TrackListFlow' options={{ headerShown: false }} component={TrackListFlow} />
                                <Tab.Screen options={{ headerShown: false }} name="TrackCreate" component={TrackCreateScreen} />
                                <Tab.Screen options={{ headerShown: false }} name="Account" component={AccountScreen} />
                            </Tab.Navigator>
                        }
                    </NavigationContainer>
                </AuthContext.Provider>
            </LocationProvider>
        </TrackProvider>

    )
}


