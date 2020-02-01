import React, { useState } from "react";
import { View, StyleSheet } from "react-native";
import KeyboardTile from "./KeyboardTile";

const Keyboard = ({ dispatchNote }) => {

    const onPressedKeyNote = (note) => {
        dispatchNote(note)
    }

    return (
        <View style={style.container}>
            <KeyboardTile note="A" dispatchNote={onPressedKeyNote}/>
            <KeyboardTile note="B" dispatchNote={onPressedKeyNote}/>
            <KeyboardTile note="C" dispatchNote={onPressedKeyNote}/>
            <KeyboardTile note="D" dispatchNote={onPressedKeyNote}/>
        </View>
    );
}

export default Keyboard;

const style = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "black",
        flexDirection: "row",
        justifyContent: "space-between"
    }
})