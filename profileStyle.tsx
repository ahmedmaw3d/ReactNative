import * as React from "react";
import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
    padding: 20,
    alignItems: "center",
  },
  edit: {
    width: "100%",
    fontSize: 18,
    fontWeight: "500",
  },
  image: {
    width: 150,
    height: 150,
  },
  cha: {
    color: "#9DC9E3",
  },
  section: {
    width: "100%",
    marginTop: 15,
  },
  name: {
    width: 100,
  },
  line: {
    width: "100%",
    height: 1,
    backgroundColor: "lightgrey",
  },
  phoneRow:{
    flexDirection:"row",
    justifyContent:"space-between",
  },
  countryCode:{
    flexDirection: "row",
    alignItems: "center",
  },
  imageHn: {
    width: 25,
    height: 25,
  },
  saveBtn: {
    width: "100%",
    borderRadius: 10,
    backgroundColor: "#416DD0",
    padding: 5,
    marginTop: 50,
  },
  saveText: {
    color: "white",
    fontSize: 20,
    fontWeight: "500",
    alignContent: "center",
    paddingLeft: "30%",
  },
});
export default styles;
