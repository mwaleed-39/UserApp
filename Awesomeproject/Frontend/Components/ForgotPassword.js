import React, { useEffect, useState } from "react";
import {
  View,
  TextInput,
  Alert,
  KeyboardAvoidingView,
  ScrollView,
  ToastAndroid,
} from "react-native";
import { Button, Input, Text, Layout } from "@ui-kitten/components";
import { sendOtp } from "../../Services/User";
import Styles from "./RegFormStyle";

const ForgotPassword = ({ navigation }) => {
  const [Email, setEmail] = useState("");
  const [EmailValidError, setEmailValidError] = useState("");
  const [otpForm, showForm] = useState(true);
  const emailvalidate = (Email) => {
    const reg =
      /^(?:[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*|"(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21\x23-\x5b\x5d-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])*")@(?:(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?|\[(?:(?:(2(5[0-5]|[0-4][0-9])|1[0-9][0-9]|[1-9]?[0-9]))\.){3}(?:(2(5[0-5]|[0-4][0-9])|1[0-9][0-9]|[1-9]?[0-9])|[a-z0-9-]*[a-z0-9]:(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21-\x5a\x53-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])+)\])*$/;
    if (reg.test(Email) === false) {
      setEmailValidError("Enter valid email");
    } else {
      setEmailValidError("");
    }
  };
  const submit = () => {
    emailvalidate(Email);

    if (Email == "") {
      Alert.alert("Please Fill All Fields");
    }
    if (Email != "" && EmailValidError == "") {
      sendOtp(Email).then((response) => {
        if (response) {
          ToastAndroid.show("Email Sent !", ToastAndroid.SHORT);
          navigation.navigate("Password", { Email: Email });
        }
        // else {
        //   navigation.navigate(" ");
        // }
      });
    }
  };

  return (
    <Layout style={[Styles.container, Styles.formContainer]}>
      <Input
        style={Styles.formInput}
        placeholder="syed.ahmad@gmail.com"
        label="EMAIL"
        value={Email}
        onChangeText={(e) => {
          setEmail(e);
          emailvalidate(e);
        }}
      ></Input>
      {EmailValidError ? (
        <Text style={Styles.text}>{EmailValidError}</Text>
      ) : (
        <></>
      )}
      <Button
        style={Styles.signUpButton}
        Layout={Styles.btn}
        onPress={() => {
          submit()
        }}
      >
        Verify OTP
      </Button>
    </Layout>
  );
};
export default ForgotPassword;
