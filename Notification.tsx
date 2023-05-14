import { View, Text, ScrollView } from "react-native";
import Icon from "react-native-vector-icons/Ionicons";
import styles from "./notificationStyle";
import Row from "./Rows";
interface RowProps {
  color: string;
  name: string;
  x: string;
  time: string;
}
const Notification: React.FC<RowProps> = ({ color, name, x, time }) => {
  const Rows = [
    {
      color: "#86D3D6",
      name: "Raising funds",
      x: "Hi! we need to raise 100 000 NOK...",
      time: "08:15",
    },
    {
      color: "#AEDFB2",
      name: "Raising funds",
      x: "Hi! we need to raise 100 000 NOK...",
      time: "08:15",
    },
    {
      color: "#FF9492",
      name: "Raising funds",
      x: "Hi! we need to raise 100 000 NOK...",
      time: "08:15",
    },
    {
      color: "#4ABE6F",
      name: "Raising funds",
      x: "Hi! we need to raise 100 000 NOK...",
      time: "08:15",
    },
    {
      color: "#FFBCC9",
      name: "Raising funds",
      x: "Hi! we need to raise 100 000 NOK...",
      time: "08:15",
    },
    {
      color: "#FF864E",
      name: "Raising funds",
      x: "Hi! we need to raise 100 000 NOK...",
      time: "08:15",
    },
    {
      color: "#FF864E",
      name: "Raising funds",
      x: "Hi! we need to raise 100 000 NOK...",
      time: "08:15",
    },
    {
      color: "#484848",
      name: "Raising funds",
      x: "Hi! we need to raise 100 000 NOK...",
      time: "08:15",
    },
    {
      color: "#0C86EE",
      name: "Raising funds",
      x: "Hi! we need to raise 100 000 NOK...",
      time: "08:15",
    },
    {
      color: "#AEDFB2",
      name: "Raising funds",
      x: "Hi! we need to raise 100 000 NOK...",
      time: "08:15",
    },{
      color: "#C76E48",
      name: "Raising funds",
      x: "Hi! we need to raise 100 000 NOK...",
      time: "08:15",
    },{
      color: "#FCDA67",
      name: "Raising funds",
      x: "Hi! we need to raise 100 000 NOK...",
      time: "08:15",
    },{
      color: "#86D3D6",
      name: "Raising funds",
      x: "Hi! we need to raise 100 000 NOK...",
      time: "08:15",
    },{
      color: "#FF9492",
      name: "Raising funds",
      x: "Hi! we need to raise 100 000 NOK...",
      time: "08:15",
    },{
      color: "#E4E6EB",
      name: "Raising funds",
      x: "Hi! we need to raise 100 000 NOK...",
      time: "08:15",
    },
  ];
  return (
    <ScrollView style={styles.scrollView}>
      <View
        style={{
          flexDirection: "row",
        }}
      >
        <View style={styles.circle}>
          <Icon name={"md-chevron-back"} size={25} color={"black"} />
        </View>
        <Text style={styles.title}>Notification</Text>
      </View>
      {Rows.map((row) => {
        return <Row color={row.color} name={row.name} x={row.x} />;
      })}
    </ScrollView>
  );
};
export default Notification;
