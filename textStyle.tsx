import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
    alignItems: "center",
  },
  check: {
    marginTop: 10,
    fontSize: 20,
    fontWeight: "bold",
  },
  word: {
    width: "100%",
    flexDirection: "row",
    marginTop: 10,
    paddingLeft: 10,
  },
  circle: {
    width: 30,
    height: 30,
    borderRadius: 15,
    backgroundColor: "#57A8A5",
  },
  arc: {
    fontSize: 22,
    fontWeight: "bold",
    marginLeft: 15,
  },
  row: {
    width: "95%",
    borderWidth: 1,
    backgroundColor: "white",
    flexDirection: "row",
    marginTop: 20,
    padding: 10,
    justifyContent: "space-between",
  },
  red: {
    width: 20,
    backgroundColor: "red",
    borderRadius: 10,
    marginRight: 30,
  },
  yellow: {
    width: 20,
    backgroundColor: "yellow",
    borderRadius: 10,
    marginRight: 30,
  },
  green: {
    width: 20,
    backgroundColor: "green",
    borderRadius: 10,
    marginRight: 30,
  },
  bottomTab: {
    width: "100%",
    marginTop: 20,
    position: "absolute",
    bottom: 0,
    backgroundColor: "lightgrey",
    flexDirection: "row",
    justifyContent: "space-between",
    padding: 10,
  },
  bottomTabText: {
    fontSize: 16,
    fontWeight: "bold",
  },
});
export default styles;
