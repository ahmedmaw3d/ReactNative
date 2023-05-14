import {
  View,
  Text,
  ScrollView,
  TextInput,
  TouchableOpacity,
} from "react-native";
import Icon from "react-native-vector-icons/Ionicons";
import Plus from "react-native-vector-icons/AntDesign";
import styles from "./bankStyle";
const YourBank = () => {
  return (
    <ScrollView style={styles.container}>
      <View
        style={{
          flexDirection: "row",
          alignItems: "center",
        }}
      >
        <View style={styles.circle}>
          <Icon name={"md-chevron-back"} size={25} color={"black"} />
        </View>
        <Text style={styles.yourbank}>YourBank</Text>
      </View>
      <Text style={styles.bank}>YourBank</Text>
      <Text style={styles.datasafe}>
        To be able to continuously do your books, We need transaction
        information from your bank. Don’t worry, We’ll set it up for you and
        keep your data safe.
      </Text>
      <Text style={styles.name}>Company name</Text>
      <View style={styles.companyname}>
        <TextInput
          style={{
            fontSize: 18,
          }}
          placeholder="1205 15 34567"
          placeholderTextColor={"black"}
        />
      </View>
      <Text style={styles.account}>Account number</Text>
      <View style={styles.accountnumber}>
        <TextInput
          style={{
            fontSize: 18,
          }}
          placeholder="Enter bank account number"
          placeholderTextColor={"black"}
        />
      </View>
      <View
        style={{
          flexDirection: "row",
          alignItems: "center",
        }}
      >
        <View style={styles.cricle1}>
          <Plus name={"plus"} size={16} color={"#FF9B71"} />
        </View>
        <Text style={styles.add}>Add Bank Account</Text>
      </View>
      <TouchableOpacity style={styles.textBut}>
        <Text style={styles.continue}>Continue</Text>
      </TouchableOpacity>
    </ScrollView>
  );
};
export default YourBank;
