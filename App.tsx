import { Text, View, Image } from "react-native";
import styles from "./textStyle";
import Row from "./Row";
const YourApp = () => {
  const rows = [
    { color: "red", name: "52TH AVENUE OFFICE", date: "Completed 02.02.20" },
    { color: "yellow", name: "52TH AVENUE OFFICE", date: "Completed 02.02.20" },
    { color: "green", name: "2 WEST STREET", date: "Completed 02.02.20" },
    { color: "green", name: "42 EAST AVENUE", date: "Completed 02.02.20" },
    { color: "red", name: "42 EAST AVENUE", date: "Completed 02.02.20" },
    { color: "yellow", name: "Veiten 3 AS", date: "Completed 02.02.20" },
  ];
  return (
    <View style={styles.container}>
      <Text style={styles.check}>CHECK3EE</Text>
      <View style={styles.word}>
        <View style={styles.circle} />
        <Text style={styles.arc}>Archive</Text>
      </View>
      {rows.map((row) => {
        return <Row color={row.color} name={row.name} date={row.date} />;
      })}
      <View style={styles.bottomTab}>
        <Text style={styles.bottomTabText}>Home</Text>
        <Text style={styles.bottomTabText}>Now</Text>
        <Text style={styles.bottomTabText}>CheckLists</Text>
        <Text style={styles.bottomTabText}>Archive</Text>
      </View>
    </View>
  );
};
export default YourApp;
