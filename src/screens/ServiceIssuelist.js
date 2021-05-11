import React, { memo } from "react";
import AdminList from "./AdminList";
import Background from "../components/Background";
import BackButton from "../components/BackButton";
import { View } from "react-native";
import RefreshButton from "../components/RefreshButton"
import { Header } from 'react-native-elements';
import  Dblist  from "./Dblist";
export const ServiceIssuelist = ({navigation}) => (
   <Background>
   <Header
  backgroundColor='#F6820D'
  rightComponent={<RefreshButton/>}
  leftComponent={<BackButton goBack={() => navigation.navigate("Dashboard")} />}
  centerComponent={{text:'Jobs List'}}/>   
    <Dblist/>
    </Background>
  );
export default memo(ServiceIssuelist);