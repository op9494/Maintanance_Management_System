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
const DatabaseAssets = ({ navigation }) => {
return "hi"
}
export function IssueCount(){
  firebase.database().ref('Form/').once('value', (snapshot)=> {
    let data = snapshot.val();
    var items = Object.values(data);
   var isscount=0;
    for(let i=0;i<items.length;i++){
     if(items[i].Status=="False"){
      isscount+=1
    }
    }
    console.log("returning issue count: ", isscount)
    return isscount
    
  }); 
  
}

export function ResolvedCount(){
  firebase.database().ref('Form/').once('value', (snapshot)=> {
    let data = snapshot.val();
    var items = Object.values(data);
   var rsscount=0;
    for(let i=0;i<items.length;i++){
 //    console.log("item",i,items[i].Catagory)
     if(items[i].Status=="True"){
      rsscount+=1
    }
    }
    console.log("returning issue count: ", rsscount)
    return rsscount
  }); 
}

 

export const ProcessingCount=()=>{
  firebase.database().ref('Form/').once('value', (snapshot)=> {
    let data = snapshot.val();
    var items = Object.values(data);
   prcounts=0
    for(let i=0;i<items.length;i++){
//     console.log("item",i,items[i].Catagory)
     if(items[i].Status=="False"){
      prcounts+=1
    }
    }
    console.log("returning Processing count: ", prcounts)
    return <Text>{prcounts} </Text>
  })
  
}




export default memo(DatabaseAssets);
