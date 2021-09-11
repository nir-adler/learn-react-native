import IndexScreen from './src/screens/IndexScreen'
import { createStackNavigator } from 'react-navigation-stack'
import { createAppContainer } from 'react-navigation'
import { Provider } from './src/context/BlogContext'
import CreateScreen from './src/screens/CreateScreen'
import ShowScreen from './src/screens/ShowScreen'
import EditScreen from './src/screens/EditScreen'
import React from 'react'

const navigator = createStackNavigator({
  Index: IndexScreen,
  Create:CreateScreen,
  Show:ShowScreen,
  Edit:EditScreen
}, {
  initialRouteName: 'Index',
  defaultNavigationOptions: {
    title: 'Blog Posts'
  }
})

const App = createAppContainer(navigator)

export default () => {
  return <Provider>
    <App />
  </Provider>
}