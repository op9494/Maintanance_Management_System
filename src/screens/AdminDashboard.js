import React, { memo } from "react";
import Background from "../components/Background";
import Paragraph from "../components/Paragraph";
import Button from "../components/Button";
import { logoutUser } from "../api/auth-api";
import LogoutButton from "../components/LogoutButton";
import { TouchableOpacity, Image, StyleSheet ,Text, View,ScrollView} from "react-native";
import { TextInput } from "react-native-paper";
import { getStatusBarHeight } from "react-native-status-bar-height";
import { Card } from 'react-native-elements'
import { Header } from 'react-native-elements';
//import AdminVisualrep from './AdminVisualrep';
//import CardDeck from 'react-bootstrap/CardDeck'

import {ProcessingCount,ResolvedCount,IssueCount} from './DatabaseAssets'
const AdminDashboard = ({navigation}) => (
  <Background>
  <Header
  backgroundColor='#F6820D'
  centerComponent={{text:'ADMIN DASBOARD'}}
  rightComponent={<LogoutButton/>}/>
  <ScrollView>  
    <Card   title="ISSUE RELATED SERVICES">
     <Card >
    <TouchableOpacity onPress={() => navigation.navigate("PriorityIndex")} style={styles.img1}>
    <Image style={styles.image} source={require("../assets/update2x.png")}/>
    <Text>PRIORITY</Text>
  </TouchableOpacity>
  </Card>

  <Card>
  <TouchableOpacity onPress={() => navigation.navigate("AdminCharts")} style={styles.img2}>
    <Image style={styles.image} source={require("../assets/statistic2x.png")} />
    <Text>Statistics</Text>
  </TouchableOpacity>
  </Card>

  <Card>
  <TouchableOpacity onPress={() => navigation.navigate("Adlist")} style={styles.img3}>
    <Image style={styles.image} source={require("../assets/list2x.png")} />
    <Text>ISSUE LIST</Text>  
  </TouchableOpacity>
  </Card>
  <Card>
  <TouchableOpacity onPress={() => navigation.navigate("AdminProcessList")} style={styles.img4}>
    <Image style={styles.image} source={require("../assets/processli.png")} />
    <Text>Issue in Process</Text>
  </TouchableOpacity>
  </Card>
  
  <Card>
  <TouchableOpacity onPress={() => navigation.navigate("AdminResolvedlist")} style={styles.img3}>
    <Image style={styles.image} source={require("../assets/processsed.png")} />
    <Text>PROCESSED ISSUE LIST</Text>  
  </TouchableOpacity>
  </Card>
  
  </Card>
  <Card title="SERVICE MEMBER ADDING/UPDATION">
  <Card>
  <TouchableOpacity onPress={() => navigation.navigate("Addinstruments")} style={styles.img4}>
    <Image style={styles.image} source={require("../assets/Addins.png")} />
    <Text>ADD INSTRUMENTS</Text>
  </TouchableOpacity>
  </Card>
  </Card>
  <Card title="SERVICE MEMBER ADDING/UPDATION">
  <Card>
  <TouchableOpacity onPress={() => navigation.navigate("RegisterScreen")} style={styles.img4}>
    <Image style={styles.image} source={require("../assets/adduser.png")} />
    <Text>ADD USER</Text>
  </TouchableOpacity>
  </Card>
  <Card >
  <TouchableOpacity onPress={() => navigation.navigate("AdminForgotPasswordScreen")} style={styles.img4}>
    <Image style={styles.image} source={require("../assets/resetpswd.png")} />
    <Text>Reset Password</Text>
  </TouchableOpacity>
  </Card>
</Card>

</ScrollView>



  </Background> 
);
const styles = StyleSheet.create({
  head:{
    position: "absolute",
    top: 10 + getStatusBarHeight(),
    left: 10
  },

  img10: {
    position: "absolute",
    top: 50,
    left: 10
  },
  img20: {
    position: "absolute",
    top: 120 ,
    left: 10
  },

  img30: {
    position: "absolute",
    top: 190 ,
    left: 10
  },
  img40: {
    position: "absolute",
    top: 50 ,
    left: 150
  },
  image: {
    width: 40,
    height: 40
  }
});

export default memo(AdminDashboard);
