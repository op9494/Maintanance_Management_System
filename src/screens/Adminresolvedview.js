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
import {Userlo} from "./AuthLoadingScreen";
import { ListItem,Overlay } from 'react-native-elements'

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
function infoFloat(id){
  const uid=Userlo()
  firebase.database().ref('Form/'+id).on('value', (snapshot)=> {
    let data = snapshot.val();
    var items = Object.values(data);
    console.log("entering into alert",items)
    Alert.alert(
      'Details of an Form Id:'+items[3],
      'System ID  :'+items[6]+"\n"+'status:   '+items[5]+"\n"+'Catagory    :'+items[0]+"\n"+'DOS            :'+items[1]+"\n"+'Description:'+'\n'+'\t\t\t\t\t\t\t\t\t\t\t'+items[2]+"\n\n",      

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
export default class Adminresolvedview extends Component {  
  constructor(){
    super();
    this.state={

      data:[]
    }
    firebase.database().ref('Form/').once('value', (snapshot)=> {
      let data = snapshot.val();
      var items = Object.values(data);

//      console.log("object javascript");
     console.log(data);
     console.log("status:",items);
     console.log("status:",items[2].Status);

      
     for(let i=0;i<items.length;i++){
       if(items[i].Status=="True"){
        this.setState({
          data:[...this.state.data,{Id:items[i]}],
        })
      }
      }

//      console.log("sucess: ",this.state.data)
 //console.log(this.state.data[0].Id.DOS)
    }); 
  }
  
  render(){
    
    return (

    <View  style={styles.container}>
      
      {this.state.data.length > 0 ?
      this.state.data.map((item, i) => (
      <ListItem 
        topDivider
        key={i}
        title={item.Id.Id}
        subtitle={item.Id.Catagory}
        leftIcon={{name:'av-timer'}}
        bottomDivider
        onPress={()=>infoFloat(item.Id.Id)}
        chevron
      />
    )):    <Text style={styles.nodata}>No data found</Text>

  }
  </View>
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