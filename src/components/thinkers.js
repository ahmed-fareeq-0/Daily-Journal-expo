import react from "react";
import { View, Text, StyleSheet, TextInput } from "react-native";
import { MaterialIcons } from "@expo/vector-icons";

const thinkers = () => {
    return (
        <View style={styles.item}>
            <View style={styles.itemLeft}>
                <Text style={styles.itemText}>تذكير</Text>
                <Text style={{ marginVertical: 10 }}> لا تنسى ان تزور فلان</Text>
                <Text style={styles.date}>24 اغسطس </Text>
            </View>

            <MaterialIcons
                name='delete'
                size={24}
                color='red'
            />
        </View>
    );
}

const styles = StyleSheet.create({
    item: {
        backgroundColor: "#fff",
        padding: 13,
        borderRadius: 20,
        flexDirection: "row",
        alignItems: "flex-start",
        justifyContent: "space-between",
        marginVertical: 15,
    },
    itemLeft: {
        flexDirection: "column",
        alignItems: "flex-start",
        justifyContent: "center",
        flexWrap: "wrap",
        // width:'100%'
    },
    square: {
        width: 24,
        height: 24,
        backgroundColor: "#55bcf6",
        opacity: 0.4,
        borderRadius: 5,
        marginRight: 15,
    },
    itemText: {
        maxWidth: "80%",
        fontSize: 20,
        fontWeight: "500",
    },
    circular: {
        height: 16,
        width: 16,
        borderRadius: 50,
        borderColor: "lightblue",
        borderWidth: 2,
    },
    date: {
        fontSize: 10,
        marginVertical: 10,
    }
})

export default thinkers