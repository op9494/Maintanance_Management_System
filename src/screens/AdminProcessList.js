import React, { memo } from "react";
import AdminProcessview from "./AdminProcessview";
import Background from "../components/Background";
import BackButton from "../components/BackButton";
import { View } from "react-native";
import { Header } from 'react-native-elements';


export const AdminProcessList = ({navigation}) => (
   <Background>
   <Header
  backgroundColor='#F6820D'
  leftComponent={<BackButton goBack={() => navigation.navigate("AdminDashboard")} />}
  centerComponent={{text:'Current Job'}}/>   

    <AdminProcessview/>
    </Background>
  );
export default memo(AdminProcessList);