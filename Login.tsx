import { View, TextInput, Text, TouchableOpacity } from "react-native";
import styles from "./loginStyle";
const Login = () => {
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
      <TextInput style={styles.enterEmail} placeholder="Your Email" />
      <Text style={styles.password}>Password</Text>
      <TextInput style={styles.enterPassword} placeholder="Password" />
      <Text style={styles.forget}>Forgot Password?</Text>
      <TouchableOpacity style={styles.textBut}>
        <Text style={styles.textLogin}>Login</Text>
      </TouchableOpacity>
      <Text style={styles.question}>
        Don`t have an account yet?
        <Text
          style={{
            color: "green",
          }}
        >
          {" "}
          Sign up
        </Text>
      </Text>
      <TouchableOpacity style={styles.textSign}>
        <Text style={styles.google}>Sign in with Google</Text>
      </TouchableOpacity>
    </View>
  );
};
export default Login;
