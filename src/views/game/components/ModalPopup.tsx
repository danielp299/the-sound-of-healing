import React from "react";
import { View, StyleSheet, ColorPropType, Text } from "react-native"
import { totalWidth, totalHeight } from "../../../style-helper";


const ModalPopup = ({ visible, message, color = "#0099EB" }) => {

  if (visible) {
    return (
      <View style={[style.container, {backgroundColor: color}]}>
        <Text style={style.text}>{message}</Text>
      </View>
    )
  }

  return <></>
}

export default ModalPopup;

const style = StyleSheet.create({
  container: {
    position: "absolute",
    justifyContent: "center",
    alignItems: "center",
    width: totalWidth * 0.9,
    height: totalHeight / 10,
    top: totalHeight * 0.5,
    left: totalWidth * 0.05,
    zIndex: 3000,
    borderRadius: 50
  },
  text: {
    color: "white",
    fontSize: 18,
    textAlign: "center"
  }
})