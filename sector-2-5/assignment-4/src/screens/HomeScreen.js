import React from "react";
import { Text, StyleSheet, View, Button, TouchableOpacity } from "react-native";
import ComponentsScreen from './ComponentScreen'

const HomeScreen = ({ navigation }) => {
  // console.log(props.navigation)



  return (
    <View>
      <Text style={styles.text}>HomeScreen1f</Text>
      <Button
        onPress={() => navigation.navigate('Components')}
        title="Go to Component Demo"
      />
      <Button
        title="Go to Images Demo"
        onPress={()=>navigation.navigate('Image')}
      />
      <Button
        title="Go to List Demo"
        onPress={() => navigation.navigate('List')}
      />
      {/* <TouchableOpacity
        onPress={() => props.navigation.navigate('List')}
      >
        <Text>click here </Text>
        <Text>click here </Text>
        <Text>click here </Text>
      </TouchableOpacity> */}
    </View>
  )
}


const styles = StyleSheet.create({
  text: {
    fontSize: 30
  }
})

export default HomeScreen


