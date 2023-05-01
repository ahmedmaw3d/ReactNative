import * as React from "react";

import { View, TextInput, Text, Pressable, Alert } from "react-native";
const LoginForm = () => {
  // arrow
  const onClick = () => {
    Alert.alert("clicked me");
  };

  return (
    <View
      style={{
        flex: 1,
        backgroundColor: "lightgrey",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <TextInput
        style={{
          borderWidth: 1,
          marginBottom: 20,
          width: "70%",
          paddingLeft: 10,
        }}
        placeholder="Username"
        placeholderTextColor="black"
      />
      <TextInput
        placeholderTextColor="black"
        style={{
          borderWidth: 1,
          marginBottom: 20,
          width: "70%",
          paddingLeft: 10,
        }}
        placeholder="Password"
        secureTextEntry={true}
      />
      <Pressable
        onPress={onClick}
        style={{
          backgroundColor: "blue",
          padding: 10,
          borderRadius: 2,
        }}
      >
        <Text
          style={{
            color: "white",
            fontSize: 18,
            fontWeight: "500",
          }}
        >
          LOGIN
        </Text>
      </Pressable>
    </View>
  );
};
export default LoginForm;
