import * as firebase from 'firebase';
import React, { Component,useState } from 'react';
import Button from "../components/Button";
import { TouchableOpacity,Alert, StyleSheet, Text, View,FlatList,Platform,ScrollView, TextBase} from "react-native";
// Optionally import the services that you want to use
//import "firebase/auth";
//import "firebase/database";
//import "firebase/firestore";
//import "firebase/functions";
//import "firebase/storage";
import {Userloname} from "./AuthLoadingScreen";
import {Userlo} from "./AuthLoadingScreen";
import { ListItem,Overlay, Card } from 'react-native-elements'
import Background from '../components/Background';
import Toast from 'react-native-tiny-toast';


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
 
function onconfirm(user_id,Form_Id){
  var date = new Date().getDate(); //Current Date
    var month = new Date().getMonth() + 1; //Current Month
    var year = new Date().getFullYear(); //Current Year
    var hours = new Date().getHours(); //Current Hours
    var min = new Date().getMinutes(); //Current Minutes
    var sec = new Date().getSeconds(); //Current Seconds
    cdate=date +'/' + month + '/' + year + ' ' + hours + ':' + min + ':' + sec
    console.log(cdate)
  console.log("reolve issue is addeding in list")
  firebase.database().ref('Resolved_issues/'+user_id+'/'+Form_Id+'/').set({
    DateTime:cdate
  });
  console.log("reolve issue is addeded in list")
  console.log(" issue is updated in list")
  firebase.database().ref('Memberjobs/'+user_id).update({
    Job:"NULL",
  });

  console.log("display nameE:"+Userloname());
  
  firebase.database().ref('Form/'+Form_Id).update({
    ZResolved_By:user_id,
    ZResolved_ByName:Userloname(),
    Status: "True"
  });
  Toast.showSuccess('Status Updated updated')  
  console.log("Sucessful")

}


function onFindstruentPressed(sysid){
  g=firebase.database().ref('Instruments/'+sysid).on('value', (snapshot)=> {
    let data = snapshot.val();
    var items = Object.values(data);
    console.log("items"+items)
    Alert.alert(
      'Details of an Instruments :'+sysid,
      'Bulding Id           :'+items[0]+'\n'+
      'Cabine Number        :'+items[1]+'\n'+
      'Instrument Catagory  :'+items[2]+'\n'+
      'Team Catagory        :'+items[3]+'\n'+
      'Unique Id            :'+items[4],      
      [
        {
          text: 'Cancel',
          onPress: () => console.log('Cancel Pressed'),
          style: 'cancel',
        },
        
      ],
      { cancelable: false }
    );
  }); 

}
function onresolvedPressed(id){
  
  const uid=Userlo()
    Alert.alert(
      'Acknowledge',
      'Conform that you have resolved the Issue rised by the user',
      [
        {
          text: 'Cancel',
          onPress: () => console.log('Cancel Pressed'),
          style: 'cancel',
        },
        { text: 'Confirm', onPress: () => onconfirm(uid,id),style: 'cancel'},        
      ],
      { cancelable: false }
    );
}
export default class ServiceConfermation extends Component {  
  constructor(){
    super();
    this.state={

      data:[]
    }
    
  }
  
  componentDidMount(){
    const uid=Userlo()
    firebase.database().ref('Memberjobs/'+uid).once('value', (snapshot)=> {
      let data = snapshot.val();
      console.log("")
  //   var items = JSON.parse(data)
  
      const id=data.Job
      if(data.Job){
            if (id=="NULL"){
        Alert.alert(
          "Message",
          "No Undertaken any Issues\n please select the job from issues list menu")
      }
      else{
        firebase.database().ref('Form/'+id).on('value', (snapshot)=> {
          let data1 = snapshot.val();
          var items1 = Object.values(data1);
          console.log("df"+items1)
         for(let i=0;i<items1.length;i++){
            this.setState({
              data:[...this.state.data,items1[i]],
            })
          }
          console.log(data1);
        }); 
      }
    }
    });
  }
  
  render(){
    
    return (

    <Background  style={styles.container}>
    { 
      this.state.data.length > 0 ?
    <Card title={'FORM ID: '+this.state.data[3]}>
    <Text>Mail_Id     :{this.state.data[4]}</Text>
<Text>Catagory    :{this.state.data[0]}</Text>
<Text>System_Id   :{this.state.data[6]}</Text>
<Text>Description :</Text>
<Text>                 {this.state.data[2]}</Text>
<Button mode="contained" onPress={()=>onFindstruentPressed(this.state.data[6])}>
        FIND INSTRUMENT
      </Button>
<Button mode="contained" onPress={()=>onresolvedPressed(this.state.data[3])}>
        Resolved
      </Button>
    
    </Card> :
    Toast.showSuccess('no datafound')  

    } 
  
  </Background>
  );
  } 
};
const styles = StyleSheet.create({
  container: {
  },
  nodata:{
    fontSize:20,
    textAlign: "center",
    fontWeight: "bold",
    color: "black",
    padding: 130

  }
});