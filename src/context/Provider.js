import React, { createContext, useState } from "react";
import { Alert } from "react-native";
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useNavigation } from "@react-navigation/native";
import uuid from "react-native-uuid";
export const Context = createContext();

export const Provider = ({ children }) => {

  const navigation = useNavigation();
  const [notes, setNotes] = useState([]);
  // const [notesAsync, setNotesAsync] = useState([]);

  const addAndSave = async (title, desc) => {

    if (title === "" || desc === "") {
      Alert.alert("Oops", "Input is empty", [
        {
          text: "Ok",
        },
      ]);
      return;
    }


    const newItem = {
      id: uuid.v4(),
      title: title,
      desc: desc
    };

    AsyncStorage.setItem('Notes', JSON.stringify(newItem));
    await AsyncStorage.getItem('Notes', (err, result) => {
      setNotes([JSON.parse(result), ...notes]);
    });

    navigation.navigate('Home');

  }

  console.log(notes);

  const deleteFromList = (id) => {
    setNotes(notes.filter((note) => note.id != id));

  }

  const showThinkers = (item) => {
    navigation.navigate("thinkersScreen", {
      id: item.id,
      title: item.title,
      desc: item.desc
    })
  }

  return (
    <Context.Provider
      value={{
        addAndSave,
        deleteFromList,
        notes,
        setNotes,
        showThinkers,
      }}>
      {children}
    </Context.Provider>
  );
};