import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View } from 'react-native';
import React from 'react';
import Reg_form from './Frontend/Components/RegForm';
import Login_form from './Frontend/Components/Signin';
import ForgotPassword from './Frontend/Components/ForgotPassword';
import { ApplicationProvider, Layout, Text } from '@ui-kitten/components';
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
const Stack = createNativeStackNavigator();
import * as eva from '@eva-design/eva';
import ChangePassword from './Frontend/Components/ChangePassword';
import VerifyOTP from './Frontend/Components/VerifyOTP';

export default function App() {
  return (
    <ApplicationProvider {...eva} theme={eva.light}> 
    
    <NavigationContainer>
    <Stack.Navigator>
              <Stack.Screen name="Registration" component={Reg_form} />
              <Stack.Screen name="Log In" component={Login_form}/>
              <Stack.Screen name="Forgot" component={ForgotPassword}/>
              <Stack.Screen name="Password" component={ChangePassword}/>
              <Stack.Screen name="Verification" component={VerifyOTP}/>
  </Stack.Navigator>
  </NavigationContainer>
    
  </ApplicationProvider>
  );
}

