import * as React from "react";
import { View, Text, Image, TextInput, TouchableOpacity } from "react-native";

const LonanIn = () => {
  return (
    <View
      style={{
        backgroundColor: "white",
        alignContent: "center",
        padding: 40,
        justifyContent: "center",
      }}
    >
      <View>
        <Image
          style={{
            width: 100,
            height: 100,
            marginLeft: 70,
            marginTop: 30,
          }}
          source={{
            uri:
              "https://scontent.fcai20-5.fna.fbcdn.net/v/t1.15752-9/340461312_1587665555054554_6816525296690716279_n.png?_nc_cat=101&ccb=1-7&_nc_sid=ae9488&_nc_ohc=MAkZe_pj04oAX-rwIvT&_nc_oc=AQnqjGnJnQ0sKtgOGvjI4ceybSJjWL7uV_Ocd4dR3ib-ZO9772NyyxrxOH55VAqiF7M&_nc_ht=scontent.fcai20-5.fna&oh=03_AdRE54UGx0T9EY4JlFeYRzE4ylTzlvw-krJhWA0bHX82wg&oe=64749C0D",
          }}
        />
        <Text
          style={{
            fontSize: 24,
            fontWeight: "bold",
            color: "black",
            marginLeft: 45,
          }}
        >
          Dukkan.world
        </Text>
        <Text>
          Enter your phone number and other detail and we will send an "OTP" to
          continue
        </Text>
      </View>
      <View
        style={{
          flexDirection: "row",
        }}
      >
        <Image
          style={{
            width: 20,
            height: 20,
          }}
          source={{
            uri:
              "https://scontent.fcai20-5.fna.fbcdn.net/v/t1.15752-9/340401649_1225822474725732_2024298827305685223_n.png?stp=cp0_dst-png&_nc_cat=104&ccb=1-7&_nc_sid=ae9488&_nc_ohc=os5obX3qkKUAX8TNyRD&_nc_oc=AQlKOGYyfg5cnQWcZ_8JJOZxDYY76em5rJqWky9gpgv74ms0R8DWB-Hf_vcRAnjCNaw&_nc_ht=scontent.fcai20-5.fna&oh=03_AdT4f7vFk3Beu2jsLfxLOzk1AMGw_1WCPyL-6JyQFjiWwQ&oe=6476385F",
          }}
        />
        <TextInput />
      </View>
      <View
        style={{
          width: "100%",
          height: 1,
          backgroundColor: "lightgrey",
        }}
      ></View>

      <TouchableOpacity
        style={{
          width: "100%",
          borderWidth: 1,
          borderRadius: 10,
          backgroundColor: "#416DD0",
          padding:10,
        }}
      >
        <Text
          style={{
            fontSize: 16,
            fontWeight: "500",
            color: "white",
            marginLeft:100,
          }}
        >
          Send OTP
        </Text>
      </TouchableOpacity>
    </View>
  );
};
export default LonanIn;
