import { Text, View, FlatList, StyleSheet } from 'react-native';
import React, { useContext } from 'react';
import { Context } from "../context/Provider";

const ThinkersScreen = ({ route, navigation }) => {

    const { notes } = useContext(Context)
    const { title, desc } = route.params;
    return (
      <View>
        
        <Text>{title}</Text>
        <Text>{desc}</Text>
      </View>
    )
}

const styles = StyleSheet.create({
    box:{
        padding:20,
        backgroundColor:'red',
        marginHorizontal:40,
        marginVertical:50
    }
})

export default ThinkersScreen