import React, { memo, useState } from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import Background from "../components/Background";
import Logo from "../components/Logo";
import Button from "../components/Button";
import TextInput from "../components/TextInput";
import BackButton from "../components/BackButton";
import { theme } from "../core/theme";
import Toast from 'react-native-tiny-toast';
import * as firebase from 'firebase';
import { Header } from 'react-native-elements';
import   FIREBASE_CONFIG   from "../core/config";
if (!firebase.apps.length) {
  firebase.initializeApp(FIREBASE_CONFIG);
}

const Addinstruments = ({ navigation }) => {
  const [TeamCatagory, setTeamCatagory] = useState({ value: ""});
  const [CabineNo, setCabineNo] = useState({ value: ""});
  const [InstrumentCatagory, setInstrumentCatagory] = useState({ value: ""});
  const [UniqueId, setUniqueId] = useState({ value: ""});
  const [BuldingId, setBuldingId] = useState({ value: ""});
  const _onAddPressed = ()=> {
    console.log("os ",TeamCatagory.value,UniqueId.value,InstrumentCatagory.value,CabineNo.value,BuldingId.value)
    UnId=BuldingId.value.toString()+TeamCatagory.value.toString()+CabineNo.value.toString()+InstrumentCatagory.value.toString()+UniqueId.value.toString()
    console.log("result="+UnId)
    firebase.database().ref('Instruments/'+UnId).set({
      TeamCatagory:TeamCatagory.value,
      CabineNo:CabineNo.value,
      InstrumentCatagory:InstrumentCatagory.value,
      UniqueId:UniqueId.value,
      BuldingId:BuldingId.value
    });
    // Result=BuldingID+TeamCatagory+CabinNo+InstrumentCatagory+UniqueID   
    Toast.showSuccess('Instrument added Successfully..')  
  
  };

  return (
    <Background>
    <Header
  backgroundColor='#F6820D'
  leftComponent={<BackButton goBack={() => navigation.navigate("AdminDashboard")} />}
  centerComponent={{text:'Add Instruments'}}/>

      <TextInput
        label="Unique Id"
        returnKeyType="next"
        value={UniqueId.value}
        onChangeText={text => setUniqueId({ value: text})}
      />
      
      <TextInput
        label="Team Catagory"
        returnKeyType="next"
        value={TeamCatagory.value}
        onChangeText={text => setTeamCatagory({ value: text})}
      />
      <TextInput
        label="Bulding Id"
        returnKeyType="next"
        value={BuldingId.value}
        onChangeText={text => setBuldingId({ value: text})}
      />

      <TextInput
        label="Cabine NO"
        returnKeyType="next"
        value={CabineNo.value}
        onChangeText={text => setCabineNo({ value: text})}
      />
      <TextInput
        label="Instrument Catagory"
        returnKeyType="next"
        value={InstrumentCatagory.value}
        onChangeText={text => setInstrumentCatagory({ value: text})}
      />
      
             <Button
        mode="contained"
        onPress={_onAddPressed}
        style={styles.button}
      >
        Add Instrument
      </Button>

    </Background>
  );
};

const styles = StyleSheet.create({

  button: {
    marginTop: 24
  },
  row: {
    flexDirection: "row",
    marginTop: 4
  },
  link: {
    fontWeight: "bold",
    color: theme.colors.primary
  }
});

export default memo(Addinstruments);
