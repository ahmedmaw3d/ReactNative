import { StyleSheet } from "react-native";

const styles=StyleSheet.create({

  container: {
    flex: 1,
    backgroundColor: "white",
    padding: 20,
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
    flexDirection:"row",
    alignItems:"center",
    borderRadius: 15,
    padding: 5,
    marginTop: 10,
    paddingHorizontal:20,
  },
  password: {
    color: "#18191A",
    marginTop: 20,
  },
  enterPassword: {
    borderWidth: 1,
    borderColor: "lightgrey",
    flexDirection:"row",
    alignItems:"center",
    borderRadius: 15,
    padding: 5,
    marginTop: 10,
    paddingHorizontal:20,
  },
  forget: {
    color: "#FF8D5C",
    marginLeft: "60%",
    marginTop: 15,
  },
  textBut: {
    width: "100%",
    backgroundColor: "#FCDA67",
    borderRadius: 40,
    padding: 30,
    marginTop: 30,
  },
  textLogin: {
    fontSize: 20,
    fontWeight: "700",
    color: "#1A1A1B",
    textAlign: "center",
  },
  question: {
    fontSize: 14,
    fontWeight: "800",
    color:"black",
    textAlign:"center",
    marginTop:20,
  },
  sign:
  {
    color: "#7FCE97",
    textAlign: "center",
    fontSize: 16,
    marginTop: 20,
  },
   textSign: {
    width: "100%",
    borderWidth: 1,
    borderRadius: 40,
    padding: 30,
    flexDirection:"row",
    justifyContent:"center",
    marginTop:30,

  },
  google: {
    fontSize: 18,
    fontWeight: "600",
    color: "#2C2C2C",
    textAlign:"center",
    marginLeft:10,
  }
})
export default styles;