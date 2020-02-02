import React from "react";
import { View, StyleSheet, ImageBackground, Text } from "react-native";
import { totalWidth, totalHeight } from "../../style-helper";
import { TouchableOpacity } from "react-native-gesture-handler";
import BackBtn from "../components/BackBtn";

const CreditsView = ({ navigation }) => {

  const goBack = () => {
    navigation.goBack();
  }

  return (
    <ImageBackground
      style={style.container}
      source={require("../../../assets/menu_background.png")}
    >
      <BackBtn navigator={navigation}/>
      <Text style={style.title}>C R E D I T S</Text>

      <Text style={style.subtitle}>Created By:</Text>
      <Text style={[style.separator, style.text]}>Carlos Montes (Kaito)</Text>

      <Text style={style.subtitle}>Developer:</Text>
      <Text style={[style.separator, style.text]}>Carlos Montes (Kaito)</Text>

      <Text style={style.subtitle}>Digital Artists:</Text>
      <Text style={[style.text]}>Daniel Pernia</Text>
      <Text style={[style.separator, style.text]}>Adriana Urdaneta</Text>

      <Text style={[style.separator, style.subtitle]}>External Resources:</Text>
      <Text style={style.text}>TuesdayNight</Text>
      <Text style={style.text}>With the song: </Text>
      <Text style={style.text}>
        "Piano Chord Progression {`\n`} No 2 Sad Dramatic Cm"
      </Text>
    </ImageBackground>
  );
};

export default CreditsView;

const style = StyleSheet.create({
  container: {
    flex: 1,
    width: totalWidth,
    justifyContent: "center",
    alignItems: "center"
  },
  title: {
    fontSize: 30,
    color: "white",
    fontWeight: "bold",
    marginBottom: 20
  },
  separator: {
    marginBottom: 20
  },
  subtitle: {
    fontSize: 18,
    color: "white",
    fontWeight: "bold"
  },
  text: {
    fontSize: 16,
    color: "white"
  }
});
