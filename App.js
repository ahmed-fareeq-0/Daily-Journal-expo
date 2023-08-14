import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import Home from './src/screens/home';

import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import AddDaily from './src/screens/addDaily';
import { Provider } from './src/context/Provider';

const Stack = createNativeStackNavigator();
export default function App() {
  return (
    <NavigationContainer>
      <Provider>
        <Stack.Navigator screenOptions={{ headerShown: false }} initialRouteName="Home" >
          <Stack.Screen name="Home" component={Home} />
          <Stack.Screen name="AddDaily" component={AddDaily} />
        </Stack.Navigator>
      </Provider>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    height: "100%",
    backgroundColor: "#E8EAED",
  },
});
