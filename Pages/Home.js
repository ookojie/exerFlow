import { StatusBar } from "expo-status-bar";
import React from "react";
import { StyleSheet, Text, View, Button, Image } from "react-native";
import { Appbar } from "react-native-paper";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";

export default function Home({ navigation }) {
  return (
    <View style={styles.container}>
      <Appbar style={styles.bottom}>
        <Appbar.Content
          style={styles.headerItem}
          title="exerFlow"
          subtitle="Get it Right"
        />
      </Appbar>

      <Text style={styles.body}>
        Welcome to exerFlow, an app designed to help maintain proper technique
        and posture during exercise, specifically squatting. Click on the Start
        Recording button to begin.
      </Text>
      <StatusBar style="auto" />
      <View style={styles.button1}>
        <Button
          onPress={() => navigation.navigate("AppCamera")}
          title="Start Recording"
          color="#5e4352"
        ></Button>
      </View>
      <Text>Proper Position Counter</Text>

      <View style={styles.button2}>
        <Button color="#000" onPress="" title="Restart"></Button>
      </View>
    </View>
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
