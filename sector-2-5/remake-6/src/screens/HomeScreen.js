import React from "react";
import { Text, StyleSheet, Button,View } from "react-native";
import ComponentsScreen from './ComponentScreen'

const HomeScreen = ({ navigation }) => {

  return (
    <View>
      <Button 
        title='List Screen'
        onPress={()=>navigation.navigate('List')}
      /> 
           <Button 
        title='Image Screen'
        onPress={()=>navigation.navigate('Image')}
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


