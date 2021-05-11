import React, { memo,Component } from "react";
import Background from "../components/Background";
import Logo from "../components/Logo";
import Header from "../components/Header";
import Button from "../components/Button";
import {View ,StyleSheet} from "react-native";
import { theme } from "../core/theme";


const HomeScreen = ({ navigation }) => (
  <Background>
  <View>
    <Logo />
    <Header>Select Catogory</Header>
    <Button mode="contained" onPress={() => navigation.navigate("LoginScreen")}>SERVICE</Button>
    <Button mode="outlined" onPress={() => navigation.navigate("IssurRegForm")} >Worker</Button>
  </View>
  </Background>
);


const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  
  row: {
    flexDirection: "row",
    marginTop: 4
  },
  label: {
    color: theme.colors.secondary
  },
  link: {
    fontWeight: "bold",
    color: theme.colors.primary
  }
});

export default memo(HomeScreen);
