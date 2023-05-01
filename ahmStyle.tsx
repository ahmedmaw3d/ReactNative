import * as React from "react";
import styles from "./appStyle";
import {
  Text,
  TextInput,
  View,
  StyleSheet,
  Pressable,
  Image,
} from "react-native";

const YourApp = () => {
  return (
    <View style={styles.container}>
      <View
        style={styles.quadrant}
      />
      <View
        style={styles.quadrant}
      />
      <View
        style={{
          backgroundColor: "#4E4E4E",
          width: "100%",
          height: 200,
          position: "absolute",
          top: 0,
          justifyContent: "center",
        }}
      >
        <Text style={styles.title}>
          Welcome to Loggo App
          </Text>
      </View>
      <Image
        style={styles.logoImage}
        source={{
          uri:
            "https://scontent.fcai20-5.fna.fbcdn.net/v/t1.15752-9/338553598_1246649979589759_8595296112240139905_n.png?_nc_cat=108&ccb=1-7&_nc_sid=aee45a&_nc_eui2=AeFOzVQlAT3Ap7-y2bGv24qrWJ9Z04BI4eFYn1nTgEjh4Zq6RNdXzgUIlYS6zQfGH6oruBYlMmv00xmkmTgXhqmp&_nc_ohc=thxGHpZhXrIAX-6HpQb&_nc_ht=scontent.fcai20-5.fna&oh=03_AdS0iA0t_uzHpj9wFtDA-xz1yzq3kURUnSJPlvdPYvhqpg&oe=6461D47D",
        }}
      />
      <TextInput style={styles.input} placeholder="Username" />
      <TextInput
        style={styles.input}
        placeholder="Password"
        secureTextEntry={true}
      />
      <Pressable
        onPress={() => {
          console.log("onPress");
        }}
        onLongPress={() => {
          console.log("LongPress");
        }}
        style={{
          borderRadius: 30,
          width: "70%",
          backgroundColor: "#3CFFD2",
          padding: 10,
        }}
      >
        <Text style={styles.loginText}>Login</Text>
      </Pressable>
    </View>
  );
};
export default YourApp;
