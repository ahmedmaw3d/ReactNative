import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  scrollView: {
    flex: 1,
    backgroundColor: "#FFFBFD",
    padding: 30,
  },
  title: {
    fontSize: 22,
    fontWeight: "bold",
    color: "black",
    marginLeft: "20%",
    fontFamily: 'Satoshi-Variable'
  },
  circle: {
    width: 30,
    height: 30,
    borderRadius: 20,
    backgroundColor: "white",
  },
  container: {
    width: "100%",
    backgroundColor: "#FFFFFF",
    borderRadius: 15,
    borderColor: "lightgrey",
    flexDirection: "row",
    alignItems: "center",
    padding: 20,
    marginTop: 20,
  },
  containerView: {
    width: 46,
    height: 46,
    borderRadius: 10,
    backgroundColor: "#86D3D6",
    padding: 10,
    marginRight: 10,
  },
  image: {
    width: 20,
    height: 20,
  },
  funds: {
    fontSize: 20,
    fontWeight: "500",
    color: "black",
  },
  time: {
    fontSize: 10,
    fontWeight: "700",
    color: "black",
    position: "absolute",
    top: 20,
    right: 20,
  },
});
export default styles;
