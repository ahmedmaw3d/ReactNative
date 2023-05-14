import react, { useState } from "react";
import {
  View,
  TextInput,
  Text,
  TouchableOpacity,
  Button,
  ScrollView,
} from "react-native";
import Ionicons from "react-native-vector-icons/Ionicons";
import Lock from "react-native-vector-icons/MaterialIcons";
import Mail from "react-native-vector-icons/AntDesign";
import { Navigation } from "react-native-navigation";
import styles from "./signStyle";

const SignUp = ({ componentId }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  return (
    <ScrollView style={styles.container}>
      <Text style={styles.title}>Thanks for</Text>
      <Text style={styles.title}>SignUp</Text>
      <Text
        style={{
          color: "#1B1C41",
        }}
      >
        Thanks for signing up for the effortless
      </Text>
      <Text
        style={{
          color: "#1B1C41",
        }}
      >
        bookking service. Let`s start creating
      </Text>
      <Text
        style={{
          color: "#1B1C41",
        }}
      >
        your account
      </Text>
      <Text style={styles.email}>Email</Text>
      <View style={styles.enterEmail}>
        <Mail
          name={"mail"}
          size={25}
          color={"black"}
          style={{
            marginLeft: 15,
          }}
        />
        <TextInput
          value={email}
          onChangeText={(text) => {
            setEmail(text);
          }}
          placeholder="your Email"
          placeholderTextColor={"black"}
        />
      </View>
      <Text style={styles.password}>Password</Text>
      <View style={styles.enterPassword}>
        <Lock
          name={"lock-outline"}
          size={20}
          color={"#171E47"}
          style={{
            marginLeft: 10,
          }}
        />
        <TextInput
          style={{
            width: "80%",
          }}
          value={password}
          onChangeText={(text) => {
            setPassword(text);
          }}
          placeholder="password"
          placeholderTextColor={"black"}
        />
        <Ionicons
          name={"eye-outline"}
          size={25}
          color={"black"}
          style={{
            marginRight: 10,
          }}
        />
      </View>
      <Text
        style={{
          color: "#1B1C41",
        }}
      >
        your password needs be at least
      </Text>
      <Text
        style={{
          color: "#1B1C41",
          marginTop: 5,
        }}
      >
        your password needs to be 8 characters
      </Text>
      <Text
        style={{
          color: "#1B1C41",
        }}
      >
        including at least one number
      </Text>
      <Text style={styles.confirm}>confirm paassword</Text>
      <View style={styles.surePassword}>
        <Lock
          name={"lock-outline"}
          size={20}
          color={"#171E47"}
          style={{
            marginLeft: 10,
          }}
        />
        <TextInput
          style={{
            width: "80%",
          }}
          placeholder="password"
          placeholderTextColor={"black"}
        />
        <Ionicons
          name={"eye-outline"}
          size={25}
          color={"black"}
          style={{
            marginRight: 10,
          }}
        />
      </View>
      <View
        style={{
          marginTop: 30,
        }}
      ></View>
      <TouchableOpacity style={styles.textBut}>
        <Text
          onPress={() => {
            console.log(email, password);
          }}
          style={styles.button}
        >
          SignUp
        </Text>
      </TouchableOpacity>
      <Text style={styles.already}>
        Already have an account?
        <Text
          onPress={() => {
            Navigation.push(componentId, {
              component: {
                name: "Login",
              },
            });
          }}
          style={{
            color: "#7FCE97",
          }}
        >
          {" "}
          Sign In
        </Text>
      </Text>
    </ScrollView>
  );
};
export default SignUp;
