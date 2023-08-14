import react from "react";
import { View, Text, StyleSheet } from "react-native";
import InputSearch from "../components/inputSearch"
import Thinkers from "../components/thinkers";

const Home = () => {

    return (
        <View style={styles.homeWrapper}>
            <InputSearch />
            <Thinkers />
        </View>
    );
}

const styles = StyleSheet.create({
    homeWrapper: {
    flex: 1,
    paddingTop: 50,
    paddingHorizontal: 20,
    backgroundColor:"#E8EAED"
    },
})

export default Home