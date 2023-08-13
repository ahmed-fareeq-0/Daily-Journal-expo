import react from "react";
import { View, Text, StyleSheet, TextInput, TouchableOpacity } from "react-native";
import { MaterialIcons } from "@expo/vector-icons";

const AddDaily = () => {
    return (
        <View style={styles.addDailyWrapper}>
            <TextInput style={styles.title} placeholder="العنوان" />
            <TextInput style={styles.addInput} placeholder="اكتب شيء" />
            <TouchableOpacity style={styles.btnSave}>
                <Text style={{ color: "white" }} >حفظ المذكرة</Text>
            </TouchableOpacity>
        </View>
    );
}

const styles = StyleSheet.create({
    addDailyWrapper: {
        flexDirection: 'column',
        paddingTop: 30,
        paddingHorizontal: 20,
        // backgroundColor: "red"
    },
    addInput: {
        // backgroundColor: "blue",
        height: "80%",
        textAlignVertical: 'top',
        borderRadius: 10,
        padding: 10,
        marginTop: 15,
        backgroundColor: '#fff',
        // width: '100%',
    },
    title: {
        backgroundColor: '#fff',
        height: 40,
        marginBottom: 15,
        fontWeight: 'bold',
        marginTop: 30,
        padding: 10,
        borderRadius: 10,
    },
    btnSave: {
        flexDirection: "row",
        padding: 10,
        borderRadius: 5,
        alignItems: "center",
        justifyContent: "center",
        borderRadius: 10,
        marginTop: 10,
        backgroundColor: "#008080",
        color: "#ffffff",
    }
})



export default AddDaily