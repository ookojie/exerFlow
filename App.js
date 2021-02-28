import { StatusBar } from "expo-status-bar";
import React from "react";
import { StyleSheet, Text, View, Button, Image } from "react-native";
import { Appbar } from "react-native-paper";
import "react-native-gesture-handler";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { Camera } from "expo-camera";

import Home from "./Pages/Home";
import Landing from "./Pages/Landing";
import AppCamera from "./Pages/AppCamera";
import Deskcam from "./Pages/Deskcam";

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Landing" component={Landing} />
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="AppCamera" component={AppCamera} />
        <Stack.Screen name="Deskcam" component={Deskcam} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#E3DBDB",
    alignItems: "center",
    justifyContent: "center",
  },

  button1: {
    marginTop: 20,
    marginBottom: 200,
    color: "#333333",
  },

  button2: {
    marginTop: 20,
    marginBottom: 25,
    color: "#744474",
  },

  bottom: {
    position: "absolute",
    left: 0,
    right: 0,
    top: 0,
    backgroundColor: "#000000",
  },

  headerItem: {
    // position: "absolute",
    margin: "auto",
    alignItems: "center",
  },

  body: {
    margin: "auto",
    textAlign: "center",
  },
});
