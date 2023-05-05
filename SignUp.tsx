import { View, TextInput, Text, TouchableOpacity } from "react-native";
import styles from "./signStyle";

const SignUp = () => {
  return (
    <View style={styles.container}>
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
      <TextInput style={styles.enterEmail} placeholder="your Email" />
      <Text style={styles.password}>Password</Text>
      <TextInput style={styles.enterPassword} placeholder="password" />
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
      <TextInput style={styles.surePassword} placeholder="password" />
      <TouchableOpacity style={styles.textBut}>
        <Text style={styles.button}>SignUp</Text>
      </TouchableOpacity>
      <Text style={styles.akeady}>
        Already have an account?
        <Text
          style={{
            color: "#69CA8A",
          }}
        >
          {" "}
          Sign in
        </Text>
      </Text>
    </View>
  );
};
export default SignUp;
