import React, { memo } from "react";
import AdminList from "./AdminList";
import Background from "../components/Background";
import BackButton from "../components/BackButton";
import RefreshButton from "../components/RefreshButton";
import { View } from "react-native";
import { Header } from 'react-native-elements';
import  ServiceConfermation  from "./ServiceConfermation";
export const Serviceroute = ({navigation}) => (
   <Background>
   <Header
  backgroundColor='#F6820D'
  rightComponent={<RefreshButton/>}
  leftComponent={<BackButton goBack={() => navigation.navigate("Dashboard")} />}
  centerComponent={{text:'Current Job'}}/>   
    <ServiceConfermation/>
    </Background>
  );
export default memo(Serviceroute);