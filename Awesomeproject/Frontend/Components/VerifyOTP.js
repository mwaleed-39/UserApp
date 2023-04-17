import React, { useEffect, useState } from "react";
import { ToastAndroid } from "react-native";
import { Button, Input, Text, Layout } from "@ui-kitten/components";
import { AddUser } from "../../Services/User";
import Styles from "./RegFormStyle";
const VerifyOTP = ({ navigation, route }) => {
  const [Code, setCode] = useState("");
  const { FirstName, LastName, Email, Phone_no, password } = route.params;
  const submit = () => {
    AddUser(FirstName, LastName, Email, Phone_no, password, Code).then(
      (result) => {
        if (!result) {
          ToastAndroid.show("Invalid OTP", ToastAndroid.SHORT);
        } else {
          navigation.navigate("Registration");
        }
      }
    );
  };

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
      <Button
        style={Styles.signUpButton}
        Layout={Styles.btn}
        onPress={() => {
          submit();
        }}
      >
        Send OTP
      </Button>
    </Layout>
  );
};
export default VerifyOTP;
