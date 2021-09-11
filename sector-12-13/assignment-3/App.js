import { createStackNavigator } from 'react-navigation-stack'
import { createAppContainer } from 'react-navigation'
import IndexScreen from './src/screens/IndexScreen'
import {Provider} from './src/context/BlogContext'
import React from 'react'

const navigator = createStackNavigator({
  Index: IndexScreen
}, {
  initialRouteName: 'Index',
  defaultNavigationOptions: {
    title: 'project'
  }
})

const App= createAppContainer(navigator)
export default ()=>{
  return(
    <Provider>
      <App/>
    </Provider>
  )
}