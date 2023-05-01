import { StyleSheet } from "react-native";
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
    alignItems: "center",
  },
  quadrant: {
    width: 200,
    height: 200,
    backgroundColor: "#3CFFD2",
    borderRadius: 100,
    position: "absolute",
    top: -100,
    left: -100,
    zIndex: 1,
  },
  title: {
    marginBottom: 30,
    fontSize: 20,
    fontWeight: "700",
    textAlign: "center",
    marginTop: 10,
    color: "white",
  },
  logoImage: {
    width: 160,
    height: 160,
    marginTop: 125,
    marginBottom: 40,
  },
  input: {
    borderWidth: 1,
    marginBottom: 20,
    width: "70%",
    paddingLeft: 30,
    borderRadius: 15,
    borderColor: "grey",
    backgroundColor: "lightgrey",
  },
  loginText: {
    fontSize: 20,
    fontWeight: "500",
    color: "white",
    textAlign: "center",
  },
});
export default styles;
