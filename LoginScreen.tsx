import * as React from "react";
import { View, Text, Image, TextInput, TouchableOpacity } from "react-native";
import styles from "./loginStyle";
const LoginScreen = () => {
  return (
    <View style={styles.container}>
      <View
        style={{
          alignItems: "center",
        }}
      >
        <Image
          style={styles.image}
          source={{
            uri:
              "https://scontent.fcai20-5.fna.fbcdn.net/v/t1.15752-9/340461312_1587665555054554_6816525296690716279_n.png?_nc_cat=101&ccb=1-7&_nc_sid=ae9488&_nc_ohc=MAkZe_pj04oAX-rwIvT&_nc_oc=AQnqjGnJnQ0sKtgOGvjI4ceybSJjWL7uV_Ocd4dR3ib-ZO9772NyyxrxOH55VAqiF7M&_nc_ht=scontent.fcai20-5.fna&oh=03_AdRE54UGx0T9EY4JlFeYRzE4ylTzlvw-krJhWA0bHX82wg&oe=64749C0D",
          }}
        />
        <Text
          style={{
            fontSize: 18,
            textAlign: "center",
            marginBottom: 20,
          }}
        >
          Enter your phone number and other detail and we will send an "OTP" to
          continue
        </Text>
      </View>
      <View>
        <View style={styles.phoneRow}>
          <View
            style={{
              width: "25%",
            }}
          >
            <View style={styles.countryCode}>
              <Image
                style={styles.imagehn}
                source={{
                  uri:
                    "https://scontent.fcai20-5.fna.fbcdn.net/v/t1.15752-9/340401649_1225822474725732_2024298827305685223_n.png?stp=cp0_dst-png&_nc_cat=104&ccb=1-7&_nc_sid=ae9488&_nc_ohc=os5obX3qkKUAX8TNyRD&_nc_oc=AQlKOGYyfg5cnQWcZ_8JJOZxDYY76em5rJqWky9gpgv74ms0R8DWB-Hf_vcRAnjCNaw&_nc_ht=scontent.fcai20-5.fna&oh=03_AdT4f7vFk3Beu2jsLfxLOzk1AMGw_1WCPyL-6JyQFjiWwQ&oe=6476385F",
                }}
              />
              <TextInput placeholder="+02" />
            </View>
            <View style={styles.line}></View>
          </View>
          <View
            style={{
              width: "70%",
            }}
          >
            <TextInput placeholder="your Mobile Number*" />
            <View style={styles.line}></View>
          </View>
        </View>
      </View>

      <TouchableOpacity style={styles.sendBtn}>
        <Text style={styles.sendText}>Send OTP</Text>
      </TouchableOpacity>
      <Text
        style={{
          marginTop: 15,
        }}
      >
        Don`t have an account?
        <Text
          style={{
            color: "#4F9DCB",
          }}
        >
          {"  "}
          Sign In
        </Text>
      </Text>
      <Text
        style={{
          marginTop: 30,
        }}
      >
        By Continue, you agree to our
      </Text>
      <View style={styles.row}>
        <View
          style={{
            flexDirection: "row",
          }}
        >
          <Text style={styles.textLine}>Terms of Service</Text>
          <Text style={styles.textLine}>Privacy Policy</Text>
          <Text
            style={{
              textDecorationLine: "underline",
            }}
          >
            Content Policy
          </Text>
        </View>
      </View>
    </View>
  );
};
export default LoginScreen;
