import React from "react";
import { View, Text, TouchableOpacity, StyleSheet } from "react-native";
import { totalHeight, totalWidth } from "../../style-helper";

const BackBtn = ({ navigator, callback = null }) => {

  const goBack = async () => {
    navigator.goBack();

    if (callback != null) await callback();
  }

  return (
    <View style={style.backButton}>
      <TouchableOpacity style={{flex: 1}} onPress={goBack}>
        <Text style={style.backText}>{"<"}</Text>
      </TouchableOpacity>
    </View>
  )
}

export default BackBtn;

const style = StyleSheet.create({
  backButton: {
    width: 50,
    height: 50,
    backgroundColor: "white",
    position: "absolute",
    top: totalHeight * 0.06,
    left: totalWidth * 0.01,
    borderRadius: 25,
    justifyContent: "center",
    alignItems: "center"
  },
  backText: {
    fontSize: 30,
    fontWeight: "bold"
  }
})