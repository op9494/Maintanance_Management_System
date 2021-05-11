import React, { memo } from "react";
import { TouchableOpacity, Image, StyleSheet } from "react-native";
import { getStatusBarHeight } from "react-native-status-bar-height";

const RefreshButton = () => (
  <TouchableOpacity onPress={() => window.location.reload(false)} style={styles.container}>
    <Image style={styles.image} source={require("../assets/refresh.png")} />
  </TouchableOpacity>
);

const styles = StyleSheet.create({
  container: {
   
  },
 
  image: {
    width: 24,
    height: 24
  }
});

export default memo(RefreshButton);
;
