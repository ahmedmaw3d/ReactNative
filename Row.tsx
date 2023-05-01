import * as React from "react";
import { View, Text } from "react-native";
import styles from "./textStyle";
interface RowProps {
  color: string;
  name: string;
  date: string;
}
const Row: React.FC<RowProps> = ({ color, name, date }) => {
  return (
    <View style={styles.row}>
      <View
        style={{
          flexDirection: "row",
        }}
      >
        <View style={[styles.red, { backgroundColor: color }]} />
        <Text>{name}</Text>
      </View>
      <Text style={{ color: "red" }}>{date}</Text>
    </View>
  );
};
export default Row;
