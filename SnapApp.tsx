import * as React from "react";
import { View, Text, Image, TextInput, TouchableOpacity } from "react-native";
import styles from "./snapStyle";
const SnapApp = () => {
  return (
    <View style={styles.container}>
      <View
        style={{
          flexDirection: "row",
          justifyContent: "space-between",
        }}
      >
        <Text style={styles.snp}>snapbooks</Text>
        <TouchableOpacity style={styles.skipBtu}>
          <Text style={styles.sk}>Skip</Text>
        </TouchableOpacity>
      </View>
      <Image
        style={styles.image}
        source={{
          uri:
            "https://scontent.fcai20-5.fna.fbcdn.net/v/t1.15752-9/341145558_597662665631956_6799937187397634131_n.png?_nc_cat=109&ccb=1-7&_nc_sid=ae9488&_nc_ohc=hKd9ZO6fAM8AX8wBXZa&_nc_oc=AQn-99iGvb1tYhv9scoaK0jRu2NzSy8X71ZD3W2cNl_CaMgFBHEVcgW-KsyA8j2vH-s&_nc_ht=scontent.fcai20-5.fna&oh=03_AdS3Kvh_c7siVPuO7crPYg0eV6LjOOPE-LPyHewqXVTcNg&oe=647855B6",
        }}
      />
      <Text style={styles.acco}>Accounting In</Text>
      <Text style={styles.your}>your Pocket</Text>
      <View
        style={{
          alignItems: "center",
        }}
      >
        <Text style={styles.fin}>Financial Condition Report</Text>
        <Text style={styles.inv}>&Send Invoice</Text>
      </View>
      <TouchableOpacity style={styles.textBtu}>
        <Text style={styles.textNe}>Next</Text>
      </TouchableOpacity>
      <View
        style={{
          alignItems: "center",
        }}
      >
        <Text style={styles.create}>
          Create new account.
          <Text style={styles.day}>30 days for free</Text>
        </Text>
      </View>
    </View>
  );
};
export default SnapApp;
