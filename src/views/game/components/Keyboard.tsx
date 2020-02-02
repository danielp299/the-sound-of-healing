import React, { useState } from "react";
import { View, StyleSheet } from "react-native";
import KeyboardTile from "./KeyboardTile";

const Keyboard = ({ dispatchNote, paused = false }) => {

    const onPressedKeyNote = (note) => {
        dispatchNote(note)
    }

    return (
        <View style={style.container}>
            <KeyboardTile note="A" paused={paused} dispatchNote={onPressedKeyNote}/>
            <KeyboardTile note="B" paused={paused} dispatchNote={onPressedKeyNote}/>
            <KeyboardTile note="C" paused={paused} dispatchNote={onPressedKeyNote}/>
            <KeyboardTile note="D" paused={paused} dispatchNote={onPressedKeyNote}/>
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