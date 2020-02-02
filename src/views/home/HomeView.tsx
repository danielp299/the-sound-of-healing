import React from "react";
import { View, Text, StyleSheet, Image, ImageBackground, Button } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";
import { totalHeight } from "../../style-helper";

const HomeView = ({ navigation }) => {
  const goToCredits = () => {
    navigation.navigate("Credits");
  };

  const goToGame = () => {
    navigation.navigate("Game");
  };

  return (
    <ImageBackground
      style={style.container}
      source={require("../../../assets/menu_background.png")}
    >
      <View style={{ flex: 2, justifyContent: "center" }}>
        <Image
          source={require("../../../assets/title.png")}
          resizeMode="contain"
          style={style.titleImg}
        />
      </View>
      <View style={style.btnContainer}>
        <TouchableOpacity style={style.playBtn} onPress={goToGame}>
          <Text style={style.playText}>PLAY</Text>
        </TouchableOpacity>
        <View style={style.creditsContainer}>
          <Button title="Credits" onPress={goToCredits}/>
        </View>
      </View>
    </ImageBackground>
  );
};

export default HomeView;

const style = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    backgroundColor: "blue"
  },
  playText: {
    alignSelf: "center",
    color: "white",
    fontWeight: "bold",
    fontSize: 20
  },
  playBtn: {
    width: 100,
    height: 50,
    backgroundColor: "red",
    justifyContent: "center",
    shadowColor: "#000",
    shadowOffset: {
      width: 10,
      height: 8
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,

    elevation: 5
  },
  btnContainer: {
    flex: 1,
    alignItems: "center"
  },
  titleImg: {
    height: 150,
    alignSelf: "center"
  },
  creditsContainer: {
    marginTop: totalHeight / 6
  }
});
