import react, { useState } from "react";
import { View, TextInput, Text, Button, TouchableOpacity } from "react-native";
import Mail from "react-native-vector-icons/AntDesign";
import Ionicons from "react-native-vector-icons/Ionicons";
import Lock from "react-native-vector-icons/MaterialIcons";
import Google from "react-native-vector-icons/AntDesign";
import { Navigation } from "react-native-navigation";
import styles from "./loginStyle";
const Login = ({ componentId }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Welcome back to</Text>
      <Text style={styles.title1}>Snapbooks</Text>
      <Text
        style={{
          color: "#18191A",
        }}
      >
        Enter your detail below
      </Text>
      <Text style={styles.email}>Email</Text>
      <View style={styles.enterEmail}>
        <Mail name={"mail"} size={20} color={"black"} />
        <TextInput
          value={email}
          onChangeText={(text) => {
            setEmail(text);
          }}
          placeholder="Your Email"
          placeholderTextColor={"black"}
        />
      </View>
      <Text style={styles.password}>Password</Text>
      <View style={styles.enterPassword}>
        <Lock name={"lock-outline"} size={20} color={"black"} />
        <TextInput
          style={{
            flex: 1,
          }}
          value={password}
          onChangeText={(text) => {
            setPassword(text);
          }}
          placeholder="Password"
          placeholderTextColor={"black"}
        />
        <Ionicons name={"eye-outline"} size={25} color={"black"} />
      </View>
      <Text style={styles.forget}>Forgot Password?</Text>
      <TouchableOpacity
        onPress={() => {
          console.log(email, password);
        }}
        style={styles.textBut}
      >
        <Text style={styles.textLogin}>Login</Text>
      </TouchableOpacity>
      <Text style={styles.question}>
        Dont`t have an account yet?
        <Text
          onPress={() => {
            Navigation.push(componentId, {
              component: {
                name: "SignUp",
              },
            });
          }}
          style={styles.sign}
        >
          {" "}
          Sign up
        </Text>
      </Text>
      <TouchableOpacity style={styles.textSign}>
        <Google name={"google"} size={25} color={"red"} />
        <Text style={styles.google}>Sign in witg Google</Text>
      </TouchableOpacity>
    </View>
  );
};
export default Login;
