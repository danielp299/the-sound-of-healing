import React from "react";
import { View, StyleSheet } from "react-native"


const LifeBar = ({ life, totalLife }) => {

  return (
    <View style={style.container}>
      <View style={style.lifeBackground}>
        <View style={{...style.life, flex: life / totalLife }}></View>
      </View>
    </View>
  )
}

export default LifeBar;

const style = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "row",
    padding: 10,
    backgroundColor: "white"
  },
  lifeBackground: {
    flex: 1,
    flexDirection: "row",
    backgroundColor: "white",
    borderWidth: 2,
    borderColor: "black",
    borderTopRightRadius: 10,
    borderTopLeftRadius: 10,
    borderBottomRightRadius: 10,
    borderBottomLeftRadius: 10,
    overflow: "hidden"
  },
  life: {
    flex: 0.5,
    backgroundColor: "lightgreen"
  }
});

