import { View, Text, ScrollView } from "react-native";
import Icon from "react-native-vector-icons/Ionicons";
import Reload from "react-native-vector-icons/Ionicons";
import Star from "react-native-vector-icons/EvilIcons";
import styles from "./insightsStyle";

const Insights = () => {
  return (
    <ScrollView style={styles.ScrollView}>
      <View
        style={{
          flexDirection: "row",
          alignItems: "center",
        }}
      >
        <View style={styles.circle}>
          <Icon name={"md-chevron-back"} size={25} color={"black"} />
        </View>
        <Text style={styles.insights}>Insights</Text>
      </View>
      <View style={styles.container}>
        <View
          style={{
            flexDirection: "row",
            alignItems: "center",
          }}
        >
          <View style={styles.abd}></View>
          <Text style={styles.customer}>Customer Aquisition Cost</Text>
        </View>
        <Text
          style={{
            fontSize: 12,
            fontWeight: "700",
            lineHeight: 20,
            color: "black",
            marginTop: 10,
          }}
        >
          you`re using about Kr.35000 to find and aquire a new customer.that`s
          15% less than other businesses in your industry!
        </Text>
      </View>
      <View style={styles.container}>
        <View
          style={{
            flexDirection: "row",
            alignItems: "center",
          }}
        >
          <View style={styles.reload}>
            <Reload name={"reload"} size={20} color={"#FFFFFF"} />
          </View>
          <Text style={styles.life}>Customer Lifecycle</Text>
        </View>
        <Text
          style={{
            fontSize: 12,
            fontWeight: "700",
            lineHeight: 20,
            color: "black",
            marginTop: 20,
          }}
        >
          your customer stay with you for averagely 2.7 your. thant`s 1 year
          less than other businesses in your industry.
        </Text>
        <Text
          style={{
            fontSize: 12,
            fontWeight: "700",
            lineHeight: 20,
            color: "black",
            marginTop: 20,
          }}
        >
          During this time the average revenue for that customers is Kr.250 000
          with sales costs of Kr.80 000 you have a margin of Kr.170 000.this is
          15% more than other businesses in your industry.
        </Text>
      </View>
      <View style={styles.container}>
        <View
          style={{
            flexDirection: "row",
            alignItems: "center",
          }}
        >
          <View style={styles.star}>
            <Star name={"star"} size={25} color={"#FFFFFF"} />
          </View>
          <Text style={styles.most}>Most Important Product</Text>
        </View>
        <Text
          style={{
            fontSize: 14,
            fontWeight: "400",
            lineHeight: 20,
            color: "black",
            marginTop: 20,
          }}
        >
          Of your 120 items, 75% of your revenue comes From the item Gullbelogt
          kalfeservise . 5 items gives 98% of your revenue.
        </Text>
      </View>
      <View style={styles.container}>
        <View
          style={{
            flexDirection: "row",
            alignItems: "center",
          }}
        >
          <View style={styles.arrow}></View>
          <Text style={styles.marketing}>Marketing</Text>
        </View>
        <Text
          style={{
            fontSize: 14,
            fontWeight: "400",
            lineHeight: 20,
            color: "black",
            marginTop: 20,
          }}
        >
          You're using kr. 75 000 on marketing a year. This is 40% less than
          other businesses in your industry .
        </Text>
      </View>
    </ScrollView>
  );
};
export default Insights;
