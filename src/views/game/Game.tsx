import React, { useState, useEffect } from "react";
import { View, Text, StyleSheet, ImageBackground, BackHandler, Image } from "react-native";
import Keyboard from "./components/Keyboard";
import LifeBar from "./components/LifeBar";
import NotSequence from "./components/NoteSequence";
import { createSequence } from "./SequenceGenerator";
import { FAIL_FACTOR, HEALTH_FACTOR } from "../../constants";
import { Audio } from "expo-av"
import BackBtn from "../components/BackBtn";
import { getEnemy } from "./EnemyGenerator";
import { totalHeight } from "../../style-helper";

const Game = ({ navigation }) => {
  const [notes, setNotes] = useState(createSequence());
  const [noteIdx, setNoteIdx] = useState(0);
  const [life, setLife] = useState(100);
  const [enemy, setEnemy] = useState(getEnemy(0))
  const [enemyState, setEnemyState] = useState(0);
  const [defeatedEnemies, setDefeatedEnemies] = useState(0);

  const sound = new Audio.Sound();

  useEffect(() => {
    async function startMusic() {
        try {
            await sound.loadAsync(require("../../../assets/battle_background.wav"));
            await sound.setIsLoopingAsync(true);
            await sound.playAsync();
        } catch (e) {
            console.error(e);
        }
    }

    startMusic();
    BackHandler.addEventListener("hardwareBackPress", onBackCalled)
  }, [])

  const updateSuccessNote = () => {
    const updatedNotes = notes.map((note, idx) => {
      return {
        ...note,
        successed: note.successed || idx === noteIdx
      };
    });

    setNotes(updatedNotes);
    setNoteIdx(noteIdx + 1);

    if (isSequenceCompleted(updatedNotes)) {

      const currentEnemyState = enemyState + 1;
      setEnemyState(currentEnemyState);
      if ((currentEnemyState) >= enemy.assets.length - 1) {
        const currentDefeatedEnemies = defeatedEnemies + 1;
        setDefeatedEnemies(currentDefeatedEnemies);
        setEnemy(getEnemy(currentDefeatedEnemies))
        setEnemyState(0);
      }

      setNotes(createSequence())
      setNoteIdx(0);
    }
  };

  const onFailedResetNotes = () => {
    const resetNotes = notes.map(note => {
      return {
        ...note,
        successed: false
      };
    });
    setNotes(resetNotes);
    setNoteIdx(0);
    setLife(life - FAIL_FACTOR);
  };

  const _onKeyReceived = note => {
    // if (isRestored(restored)) return;
    if (notes[noteIdx].name === note) {
      updateSuccessNote();
    } else {
      onFailedResetNotes();
    }
  };

  async function onBackCalled () {
      await sound.stopAsync();
      navigation.goBack();
  }

  return (
    <ImageBackground resizeMode="cover" source={{uri: "https://i.pinimg.com/originals/13/50/b3/1350b3bb1ba8c252dd4e6b75fce3e7ba.jpg"}} style={style.container}>
      <BackBtn navigator={navigation} callback={onBackCalled}/>
      <View style={style.sceneContainer}>
        <View style={{ flex: 3, justifyContent: "center", alignItems: "center" }}>
          <View style={{marginTop: 60}}>
            <Text style={style.enemyName}>{enemy.name}</Text>
          </View>
          <Image style={{height: totalHeight / 3}} resizeMode="contain" source={enemy.assets[enemyState]}/>
        </View>

        <View style={{ flex: 0.7 }}>
          <NotSequence sequence={notes} />
        </View>
      </View>

      <View style={style.playerStatusContainer}>
        <LifeBar life={life} totalLife={100} />
      </View>

      <View style={style.keyboardContainer}>
        <Keyboard dispatchNote={_onKeyReceived} />
      </View>
    </ImageBackground>
  );
};

export default Game;

const isSequenceCompleted = notes => {
  return notes.reduce((prev, curr) => {
    return prev && curr.successed;
  }, true);
};

const isRestored = (restored) => restored >= 100;

const style = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
    justifyContent: "center"
  },
  sceneContainer: {
    flex: 4,

    // backgroundColor: "blue"
  },
  keyboardContainer: {
    flex: 1,
    backgroundColor: "green"
  },
  playerStatusContainer: {
    flex: 0.3
  },
  enemyName: {
    fontSize: 20,
    fontWeight: "bold",
    backgroundColor: "#00F1E3",
    color: "white",
    padding: 5,
    borderRadius: 20,
    marginBottom: 10
  }
});
