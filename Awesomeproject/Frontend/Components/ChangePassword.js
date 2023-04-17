import React, { useEffect, useState } from "react";
import {
  View,
  TextInput,
  Alert,
  KeyboardAvoidingView,
  ScrollView,
  ToastAndroid,
} from "react-native";
import { Button, Input,  Layout } from "@ui-kitten/components";
import { changePassword } from "../../Services/User";
import Styles from "./RegFormStyle";
const ChangePassword = ({ navigation, route }) => {
  const [Code, setCode] = useState("");
  const [Password, setPassword] = useState("");
  const { Email } = route.params;
  // const submit = () => {
  //   emailvalidate(Email);

  //   if (Email == "") {
  //     Alert.alert("Please Fill All Fields");
  //   }
  //   if (Email != "" && EmailValidError == "") {
  //     sendOtp(Email).then((response) => {
  //       if (response) {
  //         ToastAndroid.show("Email Sent !", ToastAndroid.SHORT);
  //       }
  //       // else {
  //       //   navigation.navigate(" ");
  //       // }
  //     });
  //   }
  // };

  return (
    <Layout style={[Styles.container, Styles.formContainer]}>
      <Input
        style={Styles.formInput}
        label="OTP CODE"
        value={Code}
        onChangeText={(e) => {
          setCode(e);
        }}
      ></Input>
      <Input
        style={Styles.formInput}
        placeholder="Your New Password"
        label="Password"
        value={Password}
        onChangeText={(e) => {
          setPassword(e);
        }}
      ></Input>
      <Button
        style={Styles.signUpButton}
        Layout={Styles.btn}
        onPress={() => {
          changePassword(Email, Code, Password);
        }}
      >
        Send OTP
      </Button>
    </Layout>
  );
};
export default ChangePassword;
