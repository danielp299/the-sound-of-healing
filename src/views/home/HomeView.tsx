import React from "react";
import { View, Text, Button } from "react-native";

const HomeView = ({ navigation }) => {


  const goToMap = () => {
    console.log("hell yeah")
    navigation.navigate("GameMap")
  }

  return (
    <View style={{flex: 1, flexDirection: "column", justifyContent: "center", alignItems: "center", alignContent: "center", backgroundColor: "red"}}>
      <Text>This is home</Text>
      <Button title="Go to Map" onPress={goToMap}>
      </Button>
    </View>
  )
}

export default HomeView;