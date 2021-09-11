import React from "react";
import { Button, StyleSheet, View } from "react-native";
import ComponentsScreen from './ComponentScreen'

const HomeScreen = ({ navigation }) => {

  return (
    <View>
      <Button
        title='List demo'
        onPress={() => navigation.navigate('List')}
      />
      <Button
        title='Image demo'
        onPress={() => navigation.navigate('Image')}
      />
      <Button
        title='Counter demo'
        onPress={() => navigation.navigate('Counter')}
      />
      <Button
        title='Color demo'
        onPress={() => navigation.navigate('Color')}
      />     
       <Button
        title='Square demo'
        onPress={() => navigation.navigate('Square')}
      /> 
          <Button
        title='Style demo'
        onPress={() => navigation.navigate('Style')}
      />
    </View>
  )
};

const styles = StyleSheet.create({
  text: {
    fontSize: 30
  }
});

export default HomeScreen


