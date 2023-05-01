import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
    alignItems: "center",
    padding: 20,
  },
  image: {
    width: 190,
    height: 120,
    resizeMode: "contain",
    marginBottom: 20,
    marginTop: 20,
  },
  countryCode: {
    flexDirection: "row",
    alignItems: "center",
  },
  phoneRow: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  imagehn: {
    width: 20,
    height: 20,
  },
  line: {
    width: "100%",
    height: 1,
    backgroundColor: "lightgrey",
  },
  sendBtn: {
    width: "100%",
    borderRadius: 10,
    backgroundColor: "#416DD0",
    padding: 10,
    marginTop: 50,
  },
  sendText: {
    fontSize: 16,
    fontWeight: "500",
    color: "white",
    alignContent: "center",
    marginLeft: "40%",
  },
  row: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  textLine: {
    textDecorationLine: "underline",
    marginRight: 7,
  },
});
export default styles;
