import * as React from "react";
import { View, Text, Image, TextInput, TouchableOpacity } from "react-native";
import styles from "./profileStyle";
const EditProfile = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.edit}>Edit Profile</Text>
      <View>
        <Image
          style={styles.image}
          source={{
            uri:
              "https://scontent-hbe1-1.xx.fbcdn.net/v/t1.15752-9/343438632_1573373973233956_1537446135755407718_n.png?_nc_cat=109&ccb=1-7&_nc_sid=ae9488&_nc_ohc=ZbReMLxmkhcAX-6nfsP&_nc_ht=scontent-hbe1-1.xx&oh=03_AdRPJrgM12Ev3LFjZlXTloUam3d9thX8yKIDSxtbgFaW7Q&oe=6473B62F",
          }}
        />
        <TouchableOpacity>
          <Text style={styles.cha}>Change Profile Photo</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.section}>
        <Text>Full Name</Text>
        <TextInput placeholder="write your name here" />
        <View style={styles.line} />
        <Text
          style={{
            fontStyle: "italic",
          }}
        >
          this is your not username. this name will de visibleto your
          chatcontacts only.
        </Text>
      </View>
      <View style={styles.section}>
        <Text>Mobile No</Text>
        <View style={{
          flexDirection:"row",
          justifyContent:"space-between",
        }}>
        <View style={{
          width: "25%",
        }}>
          <View
            style={{
              flexDirection: "row",
              alignItems: "center",
            }}
          >
            <Image
              style={styles.imageHn}
              source={{
                uri:
                  "https://scontent.fcai20-5.fna.fbcdn.net/v/t1.15752-9/340401649_1225822474725732_2024298827305685223_n.png?stp=cp0_dst-png&_nc_cat=104&ccb=1-7&_nc_sid=ae9488&_nc_ohc=os5obX3qkKUAX-8V2HY&_nc_oc=AQl4hHI1t586DrSLlq8L9iyG2nkuwHGjrUF4kpTnhbkmD8nqOaxoW2PNd0SF2sCBWMM&_nc_ht=scontent.fcai20-5.fna&oh=03_AdQemqEG_j921c97oPv7WIJ7hUGHl6fMGfcfq6L0b63xhQ&oe=6474765F",
              }}
            />
            <TextInput placeholder="+02"/>
          </View>
          <View style={styles.line}></View>
        </View>
        <View 
        style={{
          width: "70%",
        }}>
          <TextInput placeholder="123456"
           style={{
            width:"100%",
           }}
          />

          <View style={styles.line}></View>
        </View>
        </View>
      </View>
      <View style={styles.section}>
        <Text> About</Text>
        <TextInput placeholder="what about you?" />
        <View style={styles.line}></View>
      </View>
      <TouchableOpacity style={styles.saveBtn}>
        <Text style={styles.saveText}>Save Changes</Text>
      </TouchableOpacity>
    </View>
  );
};
export default EditProfile;
