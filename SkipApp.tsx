import { View, Text, Image, TouchableOpacity } from "react-native";
import styles from "./skipStyle";

const SkipApp = () => {
  return (
    <View style={styles.container}>
      <View
        style={{
          flexDirection: "row",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <Text style={styles.sna}>snapbooks</Text>
        <View style={styles.rowCrc}></View>
        <View style={styles.Circle}></View>
        <View style={styles.rowCrc}></View>
        <TouchableOpacity style={styles.skipBtu}>
          <Text style={styles.skip}>Skip</Text>
        </TouchableOpacity>
      </View>
      <Image
        style={styles.iamge}
        source={{
          uri:
            "https://scontent.fcai20-5.fna.fbcdn.net/v/t1.15752-9/344096096_153087324378985_7813657891544451723_n.png?_nc_cat=103&ccb=1-7&_nc_sid=ae9488&_nc_ohc=D3sCKP0awb0AX__x6t2&_nc_ht=scontent.fcai20-5.fna&oh=03_AdQOklHvkUG5s9jUzQfzTS6dc2H2WosIpx_CGgwzQ0H9iw&oe=64789492",
        }}
      />
      <View
        style={{
          alignItems: "center",
          marginTop: 20,
        }}
      >
        <Text style={styles.fix}>Fixed Nonthly</Text>
        <Text style={styles.price}>Prics</Text>
        <Text style={styles.nob}>No bindingtime Price based on</Text>
        <Text style={styles.thenum}>the number of invoices</Text>
      </View>
      <TouchableOpacity style={styles.textBtu}>
        <Text style={styles.next}>Next</Text>
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
export default SkipApp;
