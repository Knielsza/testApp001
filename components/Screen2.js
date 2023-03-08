import * as React from 'react';
// import React, { Component } from 'react';
import { Button, View, Text, StyleSheet } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
// import Screen1 from "./components/Screen1"

const Stack = createNativeStackNavigator();

function Screen2() {
    return (
        <NavigationContainer>
            <Stack.Navigator>
                <Stack.Screen name="s1" component={Screen1} />
                <Stack.Screen name="s2" component={Screen2} />
                <Button
                    title="go to screen2"
                    onPress={() => this.props.navigation.navigate("s1")}
                />
            </Stack.Navigator>
        </NavigationContainer>
    );
}

export default Screen2;