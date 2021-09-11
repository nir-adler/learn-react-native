import React from "react";
import { View, Text, StyleSheet, Button } from "react-native";

const HomeScreen = ({ navigation }) => {
  return (
    <View>
      <Button
        title="List demo"
        onPress={() => navigation.navigate('List')}
      />
      <Button
        title="Image demo"
        onPress={() => navigation.navigate('Image')}
      />
      <Button
        title="Counter demo"
        onPress={() => navigation.navigate('Counter')}
      />
      <Button
        title="Color demo"
        onPress={() => navigation.navigate('Color')}
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


