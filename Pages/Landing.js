import { StatusBar } from "expo-status-bar";
import React from "react";
import { StyleSheet, Text, View, Button, Image } from "react-native";
import { Appbar } from "react-native-paper";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";

import Home from "./Home";

export default function Landing({ navigation }) {
  return (
    <View style={styles.container}>
      <Image style={styles.tinyLogo} source={require("./exerFlow.png")} />

      <StatusBar style="auto" />
      <View style={styles.button1}>
        <Button
          onPress={() => navigation.navigate("Home")}
          title="Continue"
          color="#8f3ab2"
        ></Button>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#000000",
    alignItems: "center",
    justifyContent: "center",
  },

  button1: {
    marginTop: 20,
    marginBottom: 200,
    color: "#333333",
    width: 200,
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

  tinyLogo: {
    flex: 1,
    width: "100%",
    height: "100%",
    resizeMode: "contain",
  },
});
