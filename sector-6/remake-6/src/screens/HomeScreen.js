import React from "react";
import { Text, StyleSheet, Button, View } from "react-native";
import ComponentsScreen from './ComponentScreen'
import CounterScreen from './CounterScreen'

const HomeScreen = ({ navigation }) => {

  return (
    <View>
      <Button
        title='List Screen'
        onPress={() => navigation.navigate('List')}
      />
      <Button
        title='Image Screen'
        onPress={() => navigation.navigate('Image')}
      />

      <Button
        title='Counter Screen'
        onPress={() => navigation.navigate('Counter')}
      />

      <Button
        title='Color Screen'
        onPress={() => navigation.navigate('Color')}
      />

      <Button
        title='Square Screen'
        onPress={() => navigation.navigate('Square')}
      />
      <Button
        title='Style Screen'
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


