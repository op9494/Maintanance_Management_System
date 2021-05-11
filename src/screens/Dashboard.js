import React, { memo } from "react";
import Background from "../components/Background";
import Logo from "../components/Logo";
import Paragraph from "../components/Paragraph";
import Button from "../components/Button";
import BackButton from "../components/BackButton";
import LogoutButton from "../components/LogoutButton";
import { TouchableOpacity,Image, StyleSheet, Text, View,FlatList,ScrollView, Platform, AlertScrollView, TextBase, Alert} from "react-native";
import { Header } from 'react-native-elements';
import { logoutUser } from "../api/auth-api";
import { Card ,Badge} from 'react-native-elements'
import Dblist from "./Dblist";
import * as firebase from 'firebase';
import { Appbar } from 'react-native-paper';
import Header1 from '../components/Header';
// Initialize Firebase
const firebaseConfig = {
  apiKey: "AIzaSyDslHhZc8QSFrsonWJlsvBXBm3vesReV84",
  authDomain: "complaint-a4db2.firebaseapp.com",
  databaseURL: "https://complaint-a4db2.firebaseio.com",
  projectId: "complaint-a4db2",
  storageBucket: "complaint-a4db2.appspot.com",
  messagingSenderId: "966569668349",
  appId: "1:966569668349:web:24e2908bf9f3b5ffd6d894",
  measurementId: "G-VQXSNP4LCQ"
};

if (!firebase.apps.length) {
  firebase.initializeApp(firebaseConfig);
}

const Dashboard = ({navigation}) => (
   

  <Background>
  <Header
  backgroundColor='#F6820D'
  centerComponent={{text:'SERVICE DASHBOARD'}}
  rightComponent={<LogoutButton/>}/>
  <View style={{flexDirection:"column"}}>
 <View style={{flexDirection:"row"}}>
  <Card style={{flex:1}}>
  <Badge value={"issue"} status="error" />
    <TouchableOpacity onPress={() => navigation.navigate("ServiceIssuelist")} style={styles.img1}>
    <Image style={styles.image} source={require("../assets/issuelist.png")} 
    />
    <Text>List of Issues</Text>
  </TouchableOpacity>
  </Card><Card style={{flex:2}}>
  <TouchableOpacity onPress={() => navigation.navigate("Serviceroute")} style={styles.img2}>
    <Image style={styles.image} source={require("../assets/process.png")} />
    <Text>Processing</Text>
  </TouchableOpacity>
  </Card>
  </View>
  </View>
  </Background>
);
const styles = StyleSheet.create({
  image: {
    width: 40,
    height: 40
  }
});

export default memo(Dashboard);