import React from "react";
import { View, TouchableOpacity, StyleSheet, Text } from "react-native";

const KeyboardTile = ({ note, dispatchNote, paused = false }) => {

    const _onKeyPressed = () => {
       if (!paused) {
           dispatchNote(note)
       }
    }

    return (
        <TouchableOpacity onPress={_onKeyPressed} style={style.tileContainer}>
            <View style={style.tileTextContainer}>
                <Text style={style.tileText}>{note}</Text>
            </View>
        </TouchableOpacity>
    );
}

export default KeyboardTile;

const style = StyleSheet.create({
    tileContainer: {
        flex: 1,
        margin: 5,
        backgroundColor: "white"
    },
    tileTextContainer: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center"
    },
    tileText: {
        fontSize: 30,
        fontWeight: "bold"
    }
})