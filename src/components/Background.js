import React, { memo } from "react";
import {
  ImageBackground,
  StyleSheet,
  KeyboardAvoidingView
} from "react-native";

const Background = ({ children }) => (
  <ImageBackground
    source={require("../assets/background_dot.png")}
    resizeMode="repeat"
    style={styles.background}
  >
    <KeyboardAvoidingView style={styles.container} behavior="padding">
      {children}
    </KeyboardAvoidingView>
  </ImageBackground>
);


const Background1 = ({ children }) => (
  <ImageBackground
    source={require("../assets/background_dot.png")}
    resizeMode="repeat"
    style={styles.background1}
  >
    <KeyboardAvoidingView style={styles.container1} behavior="padding">
      {children}
    </KeyboardAvoidingView>
  </ImageBackground>
);
const styles = StyleSheet.create({
  background: {
    flex: 1,
    width: "100%"
  },
  container: {
    flex: 1,
    padding: 20,
    width: "100%",

  },
  background1: {
    flex: 1,
    width: "100%"
  },
  container1: {
    flex: 1,
    padding: 10,
    width: "100%",
    alignSelf: "center",

  }
});

export default memo(Background);
