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
import { string } from 'prop-types';

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
 
function onproceed(user_id,form_id){
  console.log("current process",user_id)
  Addjob(user_id,form_id)
  firebase.database().ref('Form/'+form_id).update({
    Status:"Processing",
  });
  console.log("Success")
}

function Addjob(id,f_id) {
  console.log("adding job1")
  console.log(id,f_id)
  firebase.database().ref('Memberjobs/'+id).update({
    Job: f_id,
    })
  console.log("job updated")
}

function infoFloat(id){
  const uid=Userlo()
  console.log("entering into alert",uid)
  firebase.database().ref('Form/'+id).on('value', (snapshot)=> {
    let data = snapshot.val();
    var items = Object.values(data);
    Alert.alert(
      'Details of an Form Id:'+items[3],
      'System ID  :'+items[6]+"\n"+'Catagory    :'+items[0]+"\n"+'DOS            :'+items[1]+"\n"+'Description:'+'\n'+'\t\t\t\t\t\t\t\t\t\t\t'+items[2]+"\n\n"+'\b**On proceed the You are taking the responsiblity to resolve issue**'+'\n'+'**To know the system Location check the system finder in an dashboard**',      

      [
        {
          text: 'Cancel',
          onPress: () => console.log('Cancel Pressed'),
          style: 'cancel',
        },
        { text: 'Proceed', onPress: () => onproceed(uid,items[3])},
        
      ],
      { cancelable: false }
    );
  }); 
}
export default class Dblist extends Component {  
  constructor(){
    super();
    this.state={
      data:[],
      priority:[]
    }
  }
  
  componentDidMount(){
    firebase.database().ref('Priority/').once('value', (snapshot)=> {
      let pdata = snapshot.val();
      var pitems = Object.values(pdata);
//      console.log("object javascript");
     for(let i=0;i<pitems.length;i++){
  //     console.log("pitem",i,pitems[i])
        this.setState({
          priority:[...this.state.priority,pitems[i]],
        })
      }
      console.log("Priority: ",this.state.priority,this.state.priority.length)
    });
   
    firebase.database().ref('Form/').once('value', (snapshot)=> {
      let rdata = snapshot.val();
      var ritems = Object.values(rdata);
//      console.log("object javascript");
     for(let i=0;i<ritems.length;i++){
       console.log("comparing",ritems[i].Catagory,this.state.priority[0])
         if (ritems[i].Catagory==this.state.priority[0]){
          firebase.database().ref('Form/'+ritems[i].Id).update({
            Zprindex:"1"
          });
         }
         else if(ritems[i].Catagory==this.state.priority[1]){
          firebase.database().ref('Form/'+ritems[i].Id).update({
            Zprindex:"2"
          });
         }
         else if(ritems[i].Catagory==this.state.priority[2]){
          firebase.database().ref('Form/'+ritems[i].Id).update({
            Zprindex:"3"
          });
        }else if(ritems[i].Catagory==this.state.priority[3]){
          firebase.database().ref('Form/'+ritems[i].Id).update({
            Zprindex:"4"
          });
        }else if(ritems[i].Catagory==this.state.priority[4]){
          firebase.database().ref('Form/'+ritems[i].Id).update({
            Zprindex:"5"
          });
        }
        else if(ritems[i].Catagory==this.state.priority[5]){
          firebase.database().ref('Form/'+ritems[i].Id).update({
            Zprindex:"6"
          });

        }
      }
    });
   /* firebase.database().ref('Priority/').set({
      1:Os.value,
      2:Power.value,
      3:Softwere.value,
      4:Hardware.value,
      5:Others.value
    });
*/



    //const snapshot = await firebase.database().ref('Form/').orderByChild('priority_index').once('value');
      //snapshot.forEach((snapshot) => {
       //console.log('Users age:', snapshot.val().age);
      //});

      
     firebase.database().ref('Form/').once('value', (snapshot)=> {
      let data = snapshot.val();
      var items = Object.values(data);
    
     for(let i=0;i<items.length;i++){
       console.log("item",i,items[i].Catagory)
       if(items[i].Status=="False" && items[i].Zprindex== 1){
        this.setState({
          data:[...this.state.data,{Id:items[i]}],
        })
      }
      }
      console.log("verifies")

      for(let i=0;i<items.length;i++){
        console.log("item",i,items[i].Catagory)
        if(items[i].Status=="False" && items[i].Zprindex== 2){
         this.setState({
           data:[...this.state.data,{Id:items[i]}],
         })
       }
       }

     for(let i=0;i<items.length;i++){
      console.log("item",i,items[i].Catagory)
      if(items[i].Status=="False" && items[i].Zprindex== 3){
       this.setState({
         data:[...this.state.data,{Id:items[i]}],
       })
     }
     }

     for(let i=0;i<items.length;i++){
      console.log("item",i,items[i].Catagory)
      if(items[i].Status=="False" && items[i].Zprindex== 4){
       this.setState({
         data:[...this.state.data,{Id:items[i]}],
       })
     }
     }
     for(let i=0;i<items.length;i++){
      console.log("item",i,items[i].Catagory)
      if(items[i].Status=="False" && items[i].Zprindex== 5){
       this.setState({
         data:[...this.state.data,{Id:items[i]}],
       })
     }
     }
     for(let i=0;i<items.length;i++){
      console.log("item",i,items[i].Catagory)
      if(items[i].Status=="False" && items[i].Zprindex== 6){
       this.setState({
         data:[...this.state.data,{Id:items[i]}],
       })
     }
     }
      console.log("sucess: ",this.state.data,this.state.data.length)
   console.log("data stored")
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
    )):
    <Text style={styles.nodata}>No data found</Text>
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