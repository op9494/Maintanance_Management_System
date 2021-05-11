import React, { memo } from "react";
import AdminList from "./AdminList";
import Background from "../components/Background";
import BackButton from "../components/BackButton";
import {View,StyleSheet } from "react-native";
import { Header } from 'react-native-elements';
import { WebView } from 'react-native-webview';
export const AdminCharts = ({navigation}) => (
   <Background>
   <Header
  backgroundColor='#F6820D'
  leftComponent={<BackButton goBack={() => navigation.navigate("AdminDashboard")} />}
  centerComponent={{text:'STATISTICS'}}/>   
  
    <WebView style={{flexDirection: 'row'}} source={{ uri: 'https://view-awesome-table.com/-M2X4FJrybApxTVRY6b4/view' }}   />
    </Background>
  );
export default memo(AdminCharts);

const styles = StyleSheet.create({
 
})