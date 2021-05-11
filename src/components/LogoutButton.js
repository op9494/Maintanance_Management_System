import React, { memo } from "react";
import { TouchableOpacity, Image, StyleSheet } from "react-native";
import { getStatusBarHeight } from "react-native-status-bar-height";
import { logoutUser } from "../api/auth-api";
const LogoutButton=()=> (
  <TouchableOpacity onPress={() => logoutUser()} style={styles.container}>
    <Image style={styles.image} source={require("../assets/logout.png")} />
  </TouchableOpacity>
);


const styles = StyleSheet.create({

  container: {
    //position: "absolute",
    //top: 10 + getStatusBarHeight(),
    //right:10
  },
  image: {
    width: 24,
    height: 24
  }
});


export default memo(LogoutButton);
