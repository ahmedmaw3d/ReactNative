import {
  View,
  Text,
  ScrollView,
  TextInput,
  TouchableOpacity,
} from "react-native";
import Check from "react-native-vector-icons/AntDesign";
import Left from "react-native-vector-icons/AntDesign";
const Documents = () => {
  return (
    <ScrollView
      style={{
        flex: 1,
        backgroundColor: "#FFFBFD",
        padding: 20,
      }}
    >
      <View style={{
        flexDirection:"row",
        alignItems:"center",
        }}>
        <View
          style={{
            width: 46,
            height: 46,
            borderRadius: 23,
            backgroundColor: "white",
            padding: 13,
          }}
        >
          <Left name={"left"} size={20} color={"black"} />
        </View>
        <Text
          style={{
            fontSize: 18,
            fontWeight: "700",
            color: "black",
            textAlign: "center",
          }}
        >
          Sign Documents
        </Text>
      </View>
      <Text
        style={{
          fontSize: 30,
          fontWeight: "700",
          color: "black",
          marginTop: 20,
        }}
      >
        Sign Documents
      </Text>
      <Text
        style={{
          fontSize: 18,
          fontWeight: "400",
          lineHeight: 26,
          color: "black",
        }}
      >
        To be able to continuously do your books, We need transaction
        information from your bank. Don’t worry, We’ll set it up for you and
        keep your data safe.
      </Text>
      <TouchableOpacity
        style={{
          borderWidth: 1,
          backgroundColor: "#FFFFFF",
          borderColor: "ligthgrey",
          borderRadius: 15,
          padding: 20,
        }}
      >
        <View
          style={{
            flexDirection: "row",
          }}
        >
          <Text
            style={{
              fontSize: 18,
              fontWeight: "700",
              color: "#6BBB77",
              marginRight: "40%",
            }}
          >
            Oppdrageavtale
          </Text>
          <Check name={"check"} size={20} color={"#6BBB77"} />
        </View>
      </TouchableOpacity>
      <TouchableOpacity
        style={{
          borderWidth: 1,
          backgroundColor: "#FFFFFF",
          borderColor: "ligthgrey",
          borderRadius: 15,
          padding: 30,
          marginTop: 20,
        }}
      >
        <View
          style={{
            flexDirection: "row",
          }}
        >
          <Text
            style={{
              fontSize: 18,
              fontWeight: "700",
              color: "black",
              marginRight: "48%",
            }}
          >
            DNB fullmakt
          </Text>
          <Check name={"check"} size={20} color={"black"} />
        </View>
      </TouchableOpacity>
      <TouchableOpacity
        style={{
          borderWidth: 1,
          backgroundColor: "#FFFFFF",
          borderColor: "ligthgrey",
          borderRadius: 15,
          padding: 30,
          marginTop: 25,
        }}
      >
        <View
          style={{
            flexDirection: "row",
          }}
        >
          <Text
            style={{
              fontSize: 18,
              fontWeight: "700",
              color: "black",
              marginRight: "28%",
            }}
          >
            Databehandieravtale
          </Text>
          <Check name={"check"} size={20} color={"black"} />
        </View>
      </TouchableOpacity>
      <TouchableOpacity
        style={{
          width: "100%",
          borderColor: "ligthgrey",
          borderRadius: 60,
          borderWidth: 1,
          padding: 20,
          marginTop: 24,
        }}
      >
        <Text
          style={{
            fontSize: 18,
            fontWeight: "700",
            color: "black",
            textAlign: "center",
          }}
        >
          Sign with BankID
        </Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={{
          width: "100%",
          borderColor: "ligthgrey",
          borderRadius: 60,
          borderWidth: 1,
          padding: 20,
          marginTop: 24,
        }}
      >
        <Text
          style={{
            fontSize: 18,
            fontWeight: "700",
            color: "black",
            textAlign: "center",
          }}
        >
          Sign with BankID Mobile
        </Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={{
          width: "100%",
          backgroundColor: "#FCDA67",
          borderRadius: 60,
          borderWidth: 1,
          padding: 20,
          marginTop: 24,
        }}
      >
        <Text
          style={{
            fontSize: 18,
            fontWeight: "700",
            color: "black",
            textAlign: "center",
          }}
        >
          Continue
        </Text>
      </TouchableOpacity>
    </ScrollView>
  );
};
export default Documents;
