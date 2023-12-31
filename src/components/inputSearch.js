import React, { useState, useContext } from 'react';
import { View, Text, StyleSheet, TextInput, TouchableOpacity } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { Context } from "../context/Provider";

const inputSearch = () => {

    const navigation = useNavigation();
    const {notes, setNotes} = useContext(Context);

    function handleSearch (event) {
        setNotes(
            notes.filter((note) => note.title.toUpperCase().includes(event.toUpperCase()))
        )
    }
    return (
        <View>
            {/* <Text style={styles.title}>مفكرة حرة</Text> */}

            <View style={styles.addAndSearch}>
                <TextInput style={styles.searchInput} placeholder='ابحث' onChangeText={(event) => handleSearch(event)} />
                <TouchableOpacity onPress={() => navigation.navigate('AddDaily')}>
                    <View style={styles.btn}>
                        <Text style={{ color: "white" }} >اضف مذكرة جديدة</Text>
                    </View>
                </TouchableOpacity>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    searchInput: {
        backgroundColor: "#fff",
        padding: 15,
        borderRadius: 10,
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",
    },
    title: {
        fontSize: 24,
        fontWeight: "bold",
        marginBottom: 15,
    },

    btn: {
        flexDirection: "row",
        padding: 10,
        borderRadius: 5,
        alignItems: "center",
        justifyContent: "center",
        borderRadius: 10,
        marginTop: 10,
        backgroundColor: "#008080",
        color: "#ffffff",
    },
})

export default inputSearch