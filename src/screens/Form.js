import React, { memo } from "react";
import AdminList from "./AdminList";
import Background from "../components/Background";
import BackButton from "../components/BackButton";
import { View } from "react-native";
import RefreshButton from "../components/RefreshButton"
import { Header } from 'react-native-elements';
import  IssurRegForm  from "./IssurRegForm";
import Formreg  from "./Formreg";

export const Form = ({navigation}) => (
   <Background>
   <Header
  backgroundColor='#F6820D'
  leftComponent={<BackButton goBack={() => navigation.navigate("HomeScreen")} />}
  centerComponent={{text:'ISSUE REGISTRATION FORM'}}/>
     <Formreg/>
    </Background>
  );
export default memo(Form);