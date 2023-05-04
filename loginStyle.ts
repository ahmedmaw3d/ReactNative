import { StyleSheet } from "react-native";

const styles=StyleSheet.create({

  container: {
    flex: 1,
    backgroundColor: "white",
    padding: 30,
  },
  title: {
    fontSize:22,
    marginTop:20,
    color:"#18191A",
  },
  title1: {
    fontSize:22,
    color:"#18191A",
  },
  email: {
    marginTop: 25,
    color: "#18191A",
  },
  enterEmail: {
    width: "100%",
    borderWidth: 1,
    borderColor: "lightgrey",
    borderRadius: 20,
    padding: 20,
    marginTop: 10,
  },
  password: {
    color: "#18191A",
    marginTop: 20,
  },
  enterPassword: {
    width: "100%",
    borderWidth: 1,
    borderColor: "lightgrey",
    borderRadius: 20,
    padding: 20,
    marginTop: 10,
  },
  forget: {
    color: "#FFCDB9",
    marginLeft: "65%",
    marginTop: 15,
  },
  textBut: {
    width: "100%",
    backgroundColor: "#FFDA4D",
    borderRadius: 40,
    padding: 20,
    alignItems: "center",
    marginTop: 30,
  },
  textLogin: {
    fontSize: 18,
    fontWeight: "600",
    color: "#1A1A1B",
  },
  question: {
    color: "black",
    marginTop: 20,
    margin: "15%",
  },
   textSign: {
    width: "100%",
    borderWidth: 1,
    borderRadius: 40,
    padding: 20,
    alignItems: "center",
  },
  google: {
    fontSize: 16,
    fontWeight: "600",
    color: "#1A1A1B",
  }
})
export default styles;