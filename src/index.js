import { createAppContainer } from "react-navigation";
import { createStackNavigator } from "react-navigation-stack";

import {
  HomeScreen,
  LoginScreen,
  RegisterScreen,
  AdminForgotPasswordScreen,
  AuthLoadingScreen,
  Dashboard,
  Adlist,
  AdminDashboard,
  PriorityIndex,
  AdminProcessList,
  AdminResolvedlist,
  Serviceroute,
  ServiceIssuelist,
  AdminCharts,
  Form,
  Addinstruments,
  IssurRegForm
} from "./screens";

const Router = createStackNavigator(
  {
    IssurRegForm,
    Addinstruments,
    AdminResolvedlist,
    Serviceroute,
    ServiceIssuelist,
    AdminProcessList,
    Adlist,
    HomeScreen,
    LoginScreen,
    RegisterScreen,
    AdminDashboard,
    AdminForgotPasswordScreen,
    Dashboard,
    PriorityIndex,
    AuthLoadingScreen,
    AdminCharts,
    Form,
  },
  {
    initialRouteName: "AuthLoadingScreen",
    headerMode: "none"
  }
);

export default createAppContainer(Router);
