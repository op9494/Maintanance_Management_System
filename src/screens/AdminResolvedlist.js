import React, { memo } from "react";
import AdminList from "./AdminList";
import Background from "../components/Background";
import BackButton from "../components/BackButton";
import { View } from "react-native";
import { Header } from 'react-native-elements';
import RefreshButton from '../components/RefreshButton';
import  Adminresolvedview from './Adminresolvedview';
export const AdminResolvedlist = ({navigation}) => (
   <Background>
   <Header
  backgroundColor='#F6820D'
  rightComponent={<RefreshButton/>}
  leftComponent={<BackButton goBack={() => navigation.navigate("AdminDashboard")} />}
  centerComponent={{text:'LIST OF RESOLVED ISSUES'}}/>   
    <Adminresolvedview/>
    </Background>
  );
export default memo(AdminResolvedlist);