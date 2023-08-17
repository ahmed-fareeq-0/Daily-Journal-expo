import { Text, View, FlatList, StyleSheet } from 'react-native';
import React, { useContext } from 'react';
import { Context } from "../context/Provider";

const ThinkersScreen = ({ route, navigation }) => {

  const { notes } = useContext(Context)
  const { title, desc } = route.params;
  return (
    <View style={styles.thinkersScreenWrapper}>
      <Text style={styles.title}>{title}</Text>
      <Text style={styles.desc}>{desc}</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  thinkersScreenWrapper: {
    flexDirection: 'column',
    paddingTop: 30,
    paddingHorizontal: 20,
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

  desc: {
    height: "80%",
    textAlignVertical: 'top',
    borderRadius: 10,
    padding: 10,
    marginTop: 15,
    backgroundColor: '#fff',
    // width: '100%',
  },
})

export default ThinkersScreen