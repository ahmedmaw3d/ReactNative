import * as React from "react";
import { Text, View } from "react-native";
import styles from "./screenStyle";
interface DevNameProps {
  name: string;
  color?: string;
}
const DevName: React.FC<DevNameProps> = ({ name, color }) => {
  return (
    <Text style={[styles.text, { color: color }]}>this is my name:{name}</Text>
  );
};
const GreenScreen = () => {
  const people = [
    { name: "Ahmed", color: "red" },
    { name: "Mohamed", color: "white" },
    { name: "mahmoud", color: "yellow" },
    { name: "Malik", color: "red" },
    { name: "Aya", color: "grey" },
    { name: "basma", color: "blue" },
  ];
  /*const newPeople = [
    [ "Ahmed", "red" ],
    [ "Mohamed",  "white" ],
    [ "mahmoud", "yellow" ],
    [ "Malik", "red" ],
    [ "Aya", "grey" ],
    [ "basma", "blue" ],
  ];*/
  const newPeople =people.map((row)=>{
    return([row.name,row.color])
  })
  console.log(newPeople);
  return (
    <View style={styles.container}>
      {people.map((row) => {
        return <DevName name={row.name} color={row.color} />;
      })}
      {/*<DevName name={"Ahmed"} color={"red"} />
      <DevName name={"Mohamed"} color={"white"} />
      <DevName name={"Mahmoud"} color={"yellow"} />
      <DevName name={"Malik"} color={"red"} />
      <DevName name={"Aya"} color={"gray"} />*/}
    </View>
  );
};
/*const GreenScreen = () => {
  return (
    <View style={styles.container}>
      <DevName name={"Ahmed"} color={"red"}/>
      <DevName name={"Mohamed"} color={"white"}/>
      <DevName name={"Mahmoud"} color={"yellow"}/>
      <DevName name={"Malik"} color={"red"}/>
      <DevName name={"Aya"} color={"gray"}/>
    </View>
  );
};*/
export default GreenScreen;
