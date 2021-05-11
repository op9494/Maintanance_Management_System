import React, { useState,memo,useEffect } from 'react';
import { Text, View, StyleSheet,ScrollView,Vibration} from 'react-native';
import { BarCodeScanner } from 'expo-barcode-scanner';
import * as Permissions from 'expo-permissions';
import { Card ,Badge} from 'react-native-elements';
import Background from '../components/Background';
import { Header } from 'react-native-elements';
import RNPickerSelect from 'react-native-picker-select';
import BackButton from "../components/BackButton";
import Button from "../components/Button";
import * as firebase from 'firebase';
import TextInput from "../components/TextInput"
import Toast from "../components/Toast";
import { emailValidator} from "../core/utils";
import FIREBASE_CONFIG from "../core/config"
if (!firebase.apps.length) {
    firebase.initializeApp(FIREBASE_CONFIG);
}
const IssurRegForm = ({ navigation }) => {

async function getCameraAsync() {
    // permissions returns only for location permissions on iOS and under certain conditions, see Permissions.LOCATION
    const { status, permissions } = await Permissions.askAsync(Permissions.CAMERA);
    if (status === 'granted') {
      console.log("permission granted")
        } else {
      throw new Error('Camera permission not granted');
    }
  }
  
      const [loading, setLoading] = useState(false);
      const [SystemID,setSystemId]=useState({value:""});
      const [Catagory, setCatagory] = useState({ value:""});
      const [PrimaryId, setPrimaryId] = useState({ value:""});
      const [email, setEmail] = useState({ value: "", error: "" });
      const [Description, setDescription] = useState({ value: ""});
      const [error, setError] = useState("");
      const [scanned, setScanned] = useState(false);
      const handleBarCodeScanned = ({ type, data }) => {
        Vibration.vibrate(10 * 25)
      setScanned(true);
      updateid() 
      setSystemId({ value: data })
 //     alert(`Bar code with type ${type} and data ${data} has been scanned!`);
    };

    function updateFormid(Id)
    {
      var co=parseInt(Id)+1
      firebase.database().ref('IssueInfo/').update({
        Count:co,
      })
      console.log("id updated successfully",co)
    }

    function updateid(){
      firebase.database().ref('IssueInfo/').on('value', (snapshot)   => {
            var data = snapshot.val()
            var ct=data.Count
            console.log("db value:",ct)
            setPrimaryId({...PrimaryId,value:ct})
        });       
    } 
    const _onSubmmitPressed = ()=> {
       
         console.log("hi",PrimaryId.value)
    const emailError = emailValidator(email.value);
    if (emailError && PrimaryId.value!="") {
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
        console.log("Subbmited Values1: ",SystemID.value,DOS,Catagory.value,PrimaryId.value,email.value,Description.value)
      firebase.database().ref('Form/'+PrimaryId.value).set({
      Catagory:Catagory.value,
      DOS:DOS,
      Description:Description.value,      
      Id:PrimaryId.value,
      Mail_Id:email.value,
      Status:"False",
      System_Id:SystemID.value,
        
    })
    updateFormid(PrimaryId.value)
    
    alert("form is successfully submitted")
  }
   
    };
   
    
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
       label="Scanned Code"
       value={SystemID.value}
      />
      <Text>Form Id: {PrimaryId.value} </Text>
      <TextInput
        label="Email"
        returnKeyType="next"
        value={email.value}
        onChangeText={text => setEmail({ value: text, error: "" })}
        error={!!email.error}
        errorText={email.error}
        autoCapitalize="none"
        autoCompleteType="email"
        textContentType="emailAddress"
        keyboardType="email-address"
      />
      <Text style={styles.textsty}>Catagory</Text>
<RNPickerSelect
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
        onPress={_onSubmmitPressed}
        style={styles.button}
      >
        UPDATE PRIORITY
      </Button>
      <Toast message={error} onDismiss={() => setError("")} />
</View>
      </ScrollView>
      </Background>
    );
};
const styles = StyleSheet.create({
    container: {
        width: 200,
      height: 200,
      },
      textsty:{
        fontSize:20,
        fontWeight: "bold",
        color:"#F6820D",
         padding:15
      },

});
export default memo(IssurRegForm);