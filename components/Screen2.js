import * as React from 'react';
// import React, { Component } from 'react';
import { Button, View, Text, StyleSheet } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
// import Screen1 from "./components/Screen1"

const Stack = createNativeStackNavigator();

function Screen2({  }) {
    return (
        <View>
            {/* <NavigationContainer>
                <Stack.Navigator>
                    <Stack.Screen name="s1" component={Screen1} />
                    <Stack.Screen name="s2" component={Screen2} />

                </Stack.Navigator>
            </NavigationContainer> */}

            <Button
                title="go to screen1"
                onPress={() => this.props.navigation.navigate("s1")}
            />
        </View>
    );
}

export default Screen2;