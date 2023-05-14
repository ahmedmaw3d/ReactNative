import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#FFFBFD",
    padding: 30,
    marginTop: 10,
  },
  title: {
    fontSize: 24,
    fontWeight:"800",
    color: "#1B1C41",
  },
  email: {
    marginTop: 15,
    color: "#1B1C41",
  },
  enterEmail: {
    width: "100%",
    borderWidth: 1,
    marginTop: 10,
    borderRadius: 15,
    borderColor: "lightgrey",
    flexDirection:"row",
    alignItems:"center",
    padding: 5,
  },
  password: {
    marginTop: 15,
    color: "#1B1C41",
  },
  enterPassword: {
    borderWidth: 1,
    borderRadius: 15,
    borderColor: "lightgrey",
    flexDirection:"row",
    marginTop: 10,
    padding: 5,
    alignItems:"center",
  },
  surePassword: {
    borderWidth: 1,
    borderRadius: 15,
    borderColor: "lightgrey",
    flexDirection:"row",
    marginTop: 10,
    padding: 5,
    alignItems:"center",
  },
  confirm: {
    color: "#1B1C41",
    marginTop: 10,
  },
  textBut: {
    width: "100%",
    backgroundColor: "#FCDA67",
    borderRadius: 40,
    padding: 20,
    alignItems: "center",
  },
  button: {
    color: "#1B1C41",
    fontSize: 22,
  },
  already: {
    fontWeight:"900",
    alignSelf: "center",
    color: "#1B1C41",
    marginTop:10,
  },
});
export default styles;
