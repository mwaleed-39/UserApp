import React, { useEffect, useState } from "react";
import {
  View,
  Alert,
  KeyboardAvoidingView,
  ScrollView,
  ToastAndroid,
} from "react-native";
import { Button, Input, Text, Layout } from "@ui-kitten/components";
import Icon from "react-native-vector-icons/Ionicons";
import { LoginUser } from "../../Services/User";
import Styles from "./RegFormStyle";
const Login_form = ({ navigation }) => {
  const [Email, setEmail] = useState("");
  const [Password, setPassword] = useState("");

  const submit = () => {
    LoginUser(Email, Password).then((result) => {
      if (result) {
        navigation.navigate("Registration");
      }
    });
  };

  return (
    <KeyboardAvoidingView>
      <ScrollView style={{ height: "100%" }}>
        <Layout style={[Styles.container, Styles.formContainer]}>
          {/*  */}
          <Button
            style={Styles.signInButton}
            // appearance="ghost"
            status="control"
            size="giant"
            accessoryLeft={<Icon name="arrow-forward" size={15} />}
            onPress={() => {
              navigation.navigate("Registration");
            }}
          >
            Sign Up
          </Button>

          <Input
            style={Styles.formInput}
            placeholder="syed.ahmad@gmail.com"
            label="EMAIL"
            value={Email}
            onChangeText={(e) => {
              setEmail(e);
            }}
          ></Input>

          <Input
            style={Styles.formInput}
            placeholder="password"
            label="PASSWORD"
            secureTextEntry={true}
            value={Password}
            onChangeText={(e) => {
              setPassword(e);
            }}
          ></Input>

          <View>
            <Button
              style={Styles.signUpButton}
              Layout={Styles.btn}
              onPress={() => {
                submit();
              }}
            >
              Login
            </Button>
          </View>
          <View style={{ flexDirection: "row", left: 120 }}>
            <Text
              onPress={() => {
                navigation.navigate("Forgot");
              }}
              style={{ color: "blue" }}
            >
              Forgot Password?
            </Text>
          </View>
        </Layout>
      </ScrollView>
    </KeyboardAvoidingView>
  );
};
export default Login_form;
