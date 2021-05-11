import React, { memo } from "react";
import { ActivityIndicator, Alert } from "react-native";
import firebase from "firebase/app";
import "firebase/auth";
import Background from "../components/Background";
import { theme } from "../core/theme";
import { FIREBASE_CONFIG } from "../core/config";
import Toast from 'react-native-tiny-toast';
// Initialize Firebase
if (!firebase.apps.length) {
  firebase.initializeApp(FIREBASE_CONFIG);
}
const AuthLoadingScreen = ({ navigation }) => {
  firebase.auth().onAuthStateChanged(user => {
    if (user==null)
    {
      navigation.navigate("HomeScreen");
      
    }
    else if (user.email=="admin@tnce.in") {
      // User is logged in
       
      navigation.navigate("AdminDashboard");
      Toast.show('Hi '+user.displayName)

      //Toast.showSuccess('login successfull'+user.displayName)
    }
    else if(user){
      navigation.navigate("Dashboard");  
      Toast.show('Hi '+user.displayName)
    }
    else {
      Toast.show('Please login now' )

      // User is not logged in
    }
  });
  return (
    <Background>
      <ActivityIndicator size="large" color={theme.colors.primary} />
    </Background>
  );
};

export function Userlo(){
  const user = firebase.auth().currentUser;
  return user.uid;
}
export function Userloname(){
  const user = firebase.auth().currentUser;
  return user.displayName;
}
export default memo(AuthLoadingScreen);
