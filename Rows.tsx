import * as React from "react";
import { View, Text, Image } from "react-native";
import styles from "./notificationStyle";

const Row = ({ color}) => {
  return (
    <View style={styles.container}>
        <View>
          <View style={[styles.containerView,{backgroundColor:color}]}>
            <Image
              style={styles.image}
              source={{
                uri:
                  "https://scontent.fcai20-5.fna.fbcdn.net/v/t1.15752-9/345658559_262975189465015_2843913538611256871_n.png?stp=cp0_dst-png&_nc_cat=102&ccb=1-7&_nc_sid=ae9488&_nc_ohc=fH7Gfr285kIAX88ipZM&_nc_ht=scontent.fcai20-5.fna&oh=03_AdRpjxyPCpo7p1cVM93jiwCyQ1OhMZqxHb7Y33ZR9U4oEw&oe=648315DA",
              }}
            />
          </View>
        </View>
        <View>
          <Text style={styles.funds}>Raising funds</Text>
          <Text
            style={{
              color: "black",
            }}
          >
            Hi! we need to raise 100 000 NOK...
          </Text>
        </View>
      <Text style={styles.time}>08:15</Text>
      </View>
  );
};
export default Row;
