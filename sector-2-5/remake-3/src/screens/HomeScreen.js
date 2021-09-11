import React from "react";
import { Text,View, StyleSheet,Button } from "react-native";
import ComponentsScreen from './ComponentScreen'

const HomeScreen = ({navigation}) => {
  console.log(navigation)

  return (
    <View>
      <Button 
        title="List demo"
        onPress={() =>navigation.navigate('List')}
      />
      <Button 
        title="Image demo"
        onPress={() =>navigation.navigate('Image')}
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


