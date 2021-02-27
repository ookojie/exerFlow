import { StatusBar } from "expo-status-bar";
import React from "react";
import { StyleSheet, Text, View, Button, Image } from "react-native";
import { Appbar } from "react-native-paper";

export default function Home() {
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
        and posture during exercise, specifically squatting.
      </Text>
      <StatusBar style="auto" />
      <View style={styles.button1}>
        <Button onPress="" title="Start Recording" color="#5e4352"></Button>
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
