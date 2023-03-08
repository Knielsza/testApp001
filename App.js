import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { StatusBar } from 'expo-status-bar';
import { Button, StyleSheet, Text, View } from 'react-native';
import Screen1 from "./components/Screen1.js"
import Screen2 from "./components/Screen2.js"

const Stack = createNativeStackNavigator();

function App({ navigation }) {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen name="s1" component={Screen1} />
          <Stack.Screen name="s2" component={Screen2} />

        </Stack.Navigator>

      </NavigationContainer>
      <Button
        title="go to screen2"
        onPress={() => this.props.navigation.navigate("s2")}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },

}

)

export default App;
