import React, { memo, useState } from "react";
import { View, Text, StyleSheet,Picker,ScrollView, TouchableOpacity } from "react-native";
import Background from "../components/Background";
import Logo from "../components/Logo";
import Button from "../components/Button";
import TextInput from "../components/TextInput";
import BackButton from "../components/BackButton";
import { theme } from "../core/theme";
import Toast from 'react-native-tiny-toast';
import * as firebase from 'firebase';
import { Header, withTheme } from 'react-native-elements';
import   FIREBASE_CONFIG   from "../core/config";
import { Dropdown } from 'react-native-material-dropdown';
import RNPickerSelect from 'react-native-picker-select';




if (!firebase.apps.length) {
  firebase.initializeApp(FIREBASE_CONFIG);
}

const PriorityIndex = ({ navigation }) => {
  const [First, setFirst] = useState({ value:""});
  const [Second, setSecond] = useState({ value: ""});
  const [Third, setThird] = useState({ value: ""});
  const [Four, setFour] = useState({ value: ""});
  const [Five, setFive] = useState({ value: ""});
  const _onUpdatePressed = ()=> {
    console.log("os ",First.value,Four.value,Third.value,Second.value,Five.value)
    firebase.database().ref('Priority/').set({
      1:First.value,
      2:Second.value,
      3:Third.value,
      4:Four.value,
      5:Five.value,
      6:"OTHER"
    });

    Toast.showSuccess('Priority updated')  
  };
  return (
    <Background>
    <Header
  backgroundColor='#F6820D'
  leftComponent={<BackButton goBack={() => navigation.navigate("AdminDashboard")} />}
  centerComponent={{text:'PRIORITY INDEX'}}/>

<ScrollView>
  <Text style={styles.textsty}>Priority#1</Text>
<RNPickerSelect
            onValueChange={(value) => setFirst({value})}
            items={[
            {label : "SERVER", value : "SERVER" },
               {label : "POWER", value : "POWER"},
               {label : "HARDWARE", value : "HARDWARE" },
               {label : "SOFTWERE" ,value : "SOFTWERE" },
               {label : "OS" ,value : "OS"}
            ]}
        ></RNPickerSelect>
        <Text style={styles.textsty}>Priority#2</Text>
        
        <RNPickerSelect
            onValueChange={(value) => setSecond({value})}
            items={[
            {label : "SERVER", value : "SERVER" },
               {label : "POWER", value : "POWER"},
               {label : "HARDWARE", value : "HARDWARE" },
               {label : "SOFTWERE" ,value : "SOFTWERE" },
               {label : "OS" ,value : "OS"}
            ]}
        /><Text style={styles.textsty}>Priority#3</Text>
        <RNPickerSelect
            onValueChange={(value) => setThird({value})}
            items={[
            {label : "SERVER", value : "SERVER" },
               {label : "POWER", value : "POWER"},
               {label : "HARDWARE", value : "HARDWARE" },
               {label : "SOFTWERE" ,value : "SOFTWERE" },
               {label : "OS" ,value : "OS"}
            ]}
        />
        <Text style={styles.textsty}>Priority#4</Text>
        <RNPickerSelect
        style={{color:'white'}}
            onValueChange={(value) => setFour({value})}
            items={[
            {label : "SERVER", value : "SERVER" },
               {label : "POWER", value : "POWER"},
               {label : "HARDWARE", value : "HARDWARE" },
               {label : "SOFTWERE" ,value : "SOFTWERE" },
               {label : "OS" ,value : "OS"}
            ]}
        />
        <Text style={styles.textsty}>Priority#5</Text>
        <RNPickerSelect
            onValueChange={(value) => setFive({value})}
            items={[
            {label : "SERVER", value : "SERVER" },
               {label : "POWER", value : "POWER"},
               {label : "HARDWARE", value : "HARDWARE" },
               {label : "SOFTWERE" ,value : "SOFTWERE" },
               {label : "OS" ,value : "OS"}
            ]}
        />
      
             <Button
        mode="contained"
        onPress={_onUpdatePressed}
        style={styles.button}
      >
        UPDATE PRIORITY
      </Button>
</ScrollView>
    </Background>
  );
};

const styles = StyleSheet.create({
  textsty:{
    fontSize:20,
    fontWeight: "bold",
    color:"#F6820D",
     padding:15

  
  },

  button: {
    marginTop: 24
  },
  row: {
    flexDirection: "row",
    marginTop: 4
  },
  input: {
    backgroundColor: theme.colors.surface
  },
  link: {
    fontWeight: "bold",
    color: theme.colors.primary
  }
});

export default memo(PriorityIndex);
