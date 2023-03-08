import * as React from 'react';
// import React, { Component } from 'react';
import { Button, View, Text, StyleSheet } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
// import Screen2 from "./components/Screen2"

const Stack = createNativeStackNavigator();

function Screen1({  }) {
    return (

        <View>
            {/* <NavigationContainer>
                <Stack.Navigator>
                    <Stack.Screen name="s1" component={Screen1} />
                    <Stack.Screen name="s2" component={Screen2} />

                </Stack.Navigator>
            </NavigationContainer> */}

            <Button
                title="go to screen2"
                onPress={() => this.props.navigation.navigate("s2")}
            />
        </View>
    );
}

export default Screen1;