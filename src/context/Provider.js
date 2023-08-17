import React, {createContext, useState} from "react";
import { useNavigation } from "@react-navigation/native";
import uuid from "react-native-uuid";
export const Context = createContext();

export const Provider = ({children}) => {
  
    const navigation = useNavigation();
    const [notes, setNotes] = useState([]);

    const addAndSave = (title, desc) => {

        if (title === "") {
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

        setNotes([newItem, ...notes]);
        // setTitle("");
        // setDesc("");
        navigation.navigate('Home');
        
    }

    const deleteFromList = (id) => {
        setNotes(notes.filter((note) => note.id != id));
        
      }

      const showThinkers = (item) => {
        navigation.navigate("thinkersScreen",{
          id: item.id,
          title: item.title,
          desc: item.desc
        })
      }

    console.log(notes);

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