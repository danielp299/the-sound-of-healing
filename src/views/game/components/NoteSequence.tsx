import React from "react";
import { View, StyleSheet, Text } from "react-native";

const NoteSequence = ({ sequence }) => {
  const _renderSequence = () => {
    return sequence.map((note, idx) => {
      return (
        <View
          style={[
            style.note,
            note.successed ? style.noteSuccessed : style.none
          ]}
          key={`s${idx}`}
        >
          <Text
            style={[
              style.noteText,
              note.successed ? style.successedText : style.none
            ]}
          >
            {note.name}
          </Text>
        </View>
      );
    });
  };

  return (
    <View style={{ flex: 1 }}>
      <View style={{ alignItems: "center" }}>
        <Text style={style.castTitle}>Cast this Spell</Text>
      </View>
      <View style={style.container}>{_renderSequence()}</View>
    </View>
  );
};

export default NoteSequence;

const style = StyleSheet.create({
  none: {},
  container: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "space-between",
    margin: 10,
    marginLeft: 40,
    marginRight: 40,
    paddingLeft: 5,
    paddingRight: 5,
    backgroundColor: "purple"
  },
  note: {
    flex: 1,
    margin: 10,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "white",
    borderRadius: 25,
    overflow: "hidden"
  },
  noteSuccessed: {
    backgroundColor: "#00ED5A"
  },
  noteText: {
    fontSize: 20,
    fontWeight: "bold"
  },
  successedText: {
    color: "white"
  },
  castTitle: {
    color: "white",
    fontSize: 16,
    fontWeight: "bold",
    padding: 5,
    borderRadius: 10,
    backgroundColor: "#FF4600"
  }
});
