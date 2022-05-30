/** @format */

import { View, TouchableOpacity, Text, Image } from "react-native";
import React from "react";
import { assets, FONTS } from "../constants";
import { useNavigation } from "@react-navigation/native";

const BottomTab = ({ focused }) => {
  const navigation = useNavigation();
  return (
    <View
      style={{
        backgroundColor: "orange",
        width: "100%",
        height: 100,
        borderRadius: 10,
        borderTopLeftRadius: 50,
        borderTopRightRadius: 50,
        transform: [{ scaleX: 1 }],
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-around",
      }}>
      <TouchableOpacity
        onPress={() => navigation.navigate("Tuition")}
        style={{
          alignItems: "center",
          justifyContent: "center",
          top: 0,
        }}>
        <Image
          source={assets.tuition}
          resizeMode='contain'
          style={{
            width: 25,
            height: 25,
            tintColor: focused ? "#e32f45" : "#ffffff",
          }}
        />
        <Text
          style={{
            color: focused ? "#e32f45" : "#ffffff",
            fontSize: 12,
            fontFamily: FONTS.poppins,
            marginTop: 3,
          }}>
          Tuition
        </Text>
      </TouchableOpacity>

      <TouchableOpacity
        onPress={() => navigation.navigate("Home")}
        style={{
          alignItems: "center",
          justifyContent: "center",
          top: 0,
        }}>
        <Image
          source={assets.doubt}
          resizeMode='contain'
          style={{
            width: 25,
            height: 25,
            tintColor: focused ? "#e32f45" : "#ffffff",
          }}
        />
        <Text
          style={{
            color: focused ? "#e32f45" : "#ffffff",
            fontSize: 12,
            fontFamily: FONTS.poppins,
            marginTop: 3,
          }}>
          Ask Doubt
        </Text>
      </TouchableOpacity>

      <TouchableOpacity
        onPress={() => navigation.navigate("Home")}
        style={{
          alignItems: "center",
          justifyContent: "center",
          top: 0,
        }}>
        <Image
          source={assets.learnIcon}
          resizeMode='contain'
          style={{
            width: 25,
            height: 25,
            tintColor: focused ? "#e32f45" : "#ffffff",
          }}
        />
        <Text
          style={{
            color: focused ? "#e32f45" : "#ffffff",
            fontSize: 12,
            fontFamily: FONTS.poppins,
            marginTop: 3,
          }}>
          Learn
        </Text>
      </TouchableOpacity>

      <TouchableOpacity
        onPress={() => navigation.navigate("Membership")}
        style={{
          alignItems: "center",
          justifyContent: "center",
          top: 0,
        }}>
        <Image
          source={assets.moneyIcon}
          resizeMode='contain'
          style={{
            width: 25,
            height: 25,
            tintColor: focused ? "#e32f45" : "#ffffff",
          }}
        />
        <Text
          style={{
            color: focused ? "#e32f45" : "#ffffff",
            fontSize: 12,
            fontFamily: FONTS.poppins,
            marginTop: 3,
          }}>
          Package
        </Text>
      </TouchableOpacity>

      <TouchableOpacity
        onPress={() => navigation.navigate("Contact")}
        style={{
          alignItems: "center",
          justifyContent: "center",
          top: 0,
        }}>
        <Image
          source={assets.contactIcon}
          resizeMode='contain'
          style={{
            width: 25,
            height: 25,
            tintColor: focused ? "#e32f45" : "#ffffff",
          }}
        />
        <Text
          style={{
            color: focused ? "#e32f45" : "#ffffff",
            fontSize: 12,
            fontFamily: FONTS.poppins,
            marginTop: 3,
          }}>
          Contact
        </Text>
      </TouchableOpacity>
    </View>
  );
};

export default BottomTab;
