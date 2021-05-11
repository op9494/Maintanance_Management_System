import * as firebase from 'firebase';
import React, { Component,useState,useEffect } from 'react';
import { TouchableOpacity,Alert, StyleSheet, Text, View,FlatList,Platform,ScrollView, TextBase} from "react-native";
// Optionally import the services that you want to use
//import "firebase/auth";
import { BarCodeScanner } from 'expo-barcode-scanner';
//import "firebase/database";
//import "firebase/firestore";
//import "firebase/functions";
//import "firebase/storage";
import * as Permissions from 'expo-permissions';
import { Card ,Badge} from 'react-native-elements';
import Background from '../components/Background';
import { Header } from 'react-native-elements';
import RNPickerSelect from 'react-native-picker-select';
import BackButton from "../components/BackButton";
import Button from "../components/Button";
import TextInput from "../components/TextInput"
import Toast from "../components/Toast";
import { emailValidator} from "../core/utils";
import FIREBASE_CONFIG from "../core/config";
if (!firebase.apps.length) {
    firebase.initializeApp(FIREBASE_CONFIG);
}

/*
Catagory:Catagory.value
DOS:DOS
Description:Description
Id:Id
Mail_Id:email.value
Status:"False"
System_Id:SystemID.value 
};


const [SystemID,setSystemId]=useState({value:""});
const [Catagory, setCatagory] = useState({ value:""});
const [PrimaryId, setPrimaryId] = useState({ value:""});
const [email, setEmail] = useState({ value: "", error: "" });
const [Description, setDescription] = useState({ value: ""});
const [error, setError] = useState("");
const [scanned, setScanned] = useState(false);
*/


export default class Formreg extends Component {  
  constructor(){

 /*   async function getCameraAsync() {
      // permissions returns only for location permissions on iOS and under certain conditions, see Permissions.LOCATION
      const { status, permissions } = await Permissions.askAsync(Permissions.CAMERA);
      if (status === 'granted') {
        console.log("permission granted")
          } else {
        throw new Error('Camera permission not granted');
      }
    }*/
    super(props);
    this.state={
      email:"",
      data:[],
      priority:[]
    }

  }

  componentDidMount(){
    const [hasPermission, setHasPermission] = useState(null);
    const [scanned, setScanned] = useState(false);
       /* firebase.database().ref('Priority/').set({
      1:Os.value,
      2:Power.value,
      3:Softwere.value,
      4:Hardware.value,
      5:Others.value
    });
*/    
     firebase.database().ref('IssueInfo/').once('value', (snapshot)=> {
      let data = snapshot.val();
      var items = Object.values(data);
         this.setState({
           data:[...this.state.data,{Id:items}],
         })

      console.log("sucess: ",this.state.data,this.state.data.length)
      console.log("sucess1: ",this.state.data[0].Id[0])
   console.log("data stored")
    }); 
  }
  handleemailChange(email) {
    this.setState({ email });
  }
  
  render(){
    const [hasPermission, setHasPermission] = useState(null);
    const [scanned, setScanned] = useState(false);

const handleBarCodeScanned = ({ type, data }) => {
  setScanned(true);
  setSystemId({ value: data })
}
    return (
      <Background>
  <ScrollView>
        <Text>Scan the system Qr code</Text>
        <View  style={styles.container}>
        <BarCodeScanner
          onBarCodeScanned={scanned ? undefined : handleBarCodeScanned}
          style={StyleSheet.absoluteFillObject}
        />
        {scanned && <Button title={'Scan Again'} onPress={() => setScanned(false)} />}
      </View>
      <View>
   
      <TextInput
        label="Email"
        returnKeyType="next"
        value={this.state.email}
        onChangeText={this.handleNameChange}
        error={!!email.error}
        errorText={email.error}
        autoCapitalize="none"
        autoCompleteType="email"
        textContentType="emailAddress"
        keyboardType="email-address"
      />
      <Text style={styles.textsty}>Catagory</Text>
<RNPickerSelect
            value={Catagory.value}
            onValueChange={(value) => setCatagory({value})}
            items={[
            {label : "SERVER", value : "SERVER" },
               {label : "POWER", value : "POWER"},
               {label : "HARDWARE", value : "HARDWARE" },
               {label : "SOFTWERE" ,value : "SOFTWERE" },
               {label : "OS" ,value : "OS"},
               {label :"OTHERS",value:"OTHERS"}
            ]}
        ></RNPickerSelect>

      <TextInput
        label="Description"
        returnKeyType="next"
        value={Description.value}
        onChangeText={text => setDescription({ value: text})}
        autoCapitalize="none"
      />
      <Button
        mode="contained"
        onPress={()=>_onSubmmitPressed(this.state.data[0].Id[0])}
        style={styles.button}
      >
        UPDATE PRIORITY
      </Button>
      <Toast message={error} onDismiss={() => setError("")} />
</View>
      </ScrollView>
      </Background>
  );
  } 
};
function _onSubmmitPressed (Id){ 
  console.log("sumbmit pressed")  
  const emailError = emailValidator(email.value);
  if (emailError) {
    setEmail({ ...email, error: emailError });
    return;
  }
  else{
    var date = new Date().getDate(); //Current Date
    var month = new Date().getMonth() + 1; //Current Month
    var year = new Date().getFullYear(); //Current Year
    var hours = new Date().getHours(); //Current Hours
    var min = new Date().getMinutes(); //Current Minutes
    var sec = new Date().getSeconds(); //Current Seconds
    DOS=date +'/' + month + '/' + year + ' ' + hours + ':' + min + ':' + sec
    console.log("Subbmited Values1: ",SystemID.value,Catagory.value,email.value,Description.value,Id)
    alert("form is successfully submitted")
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