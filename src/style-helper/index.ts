import { StyleSheet, Dimensions } from "react-native";

export const totalWidth = Dimensions.get("screen").width;
export const totalHeight = Dimensions.get("screen").height;

const styleHelper = StyleSheet.create({
  fullwidth: {
    width: Dimensions.get("screen").width
  }
});

export const fullWidth = styleHelper.fullwidth;

export default { ...styleHelper };