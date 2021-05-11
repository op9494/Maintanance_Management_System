import * as firebase from 'firebase';
import React, { Component,memo } from 'react';
import Button from "../components/Button";
import { TouchableOpacity,Alert, StyleSheet, Text, View,FlatList,ScrollView,Platform, AlertScrollView, TextBase} from "react-native";
import { List, Card } from 'react-native-paper';
// Optionally import the services that you want to use
//import "firebase/auth";
//import "firebase/database";
//import "firebase/firestore";
//import "firebase/functions";
//import "firebase/storage";
import { ListItem } from 'react-native-elements'
import Background from '../components/Background';
import Header from "../components/Header";

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
        
      ],
      { cancelable: false }
    );
  }); 
}

export default class AdminList extends Component{  
  constructor(){
    super();
    this.state={
      data:[]
    }
  }
  componentDidMount()
  {
    firebase.database().ref('Form/').once('value', (snapshot)=> {
      let data = snapshot.val();
      var items = Object.values(data);
      console.log("object javascript");
      console.log(data);
      for(let i=0;i<items.length;i++){
        if(items[i].Status=="False"){
          this.setState({
            data:[...this.state.data,{Id:items[i]}],
          })
        }
      }
      console.log(this.state.data)
    }); 
  }
  render(){
    return (
      <View  style={styles.container}>
      {this.state.data.length > 0 ?
      this.state.data.map((item, i) => (
        <Card>
      <ListItem 
        key={i}
        title={item.Id.Id}
        subtitle={item.Id.Catagory}
        leftIcon={{name:'av-timer'}}
        bottomDivider
        onPress={()=>infoFloat(item.Id.Id)}
        chevron
      />
      </Card>
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


