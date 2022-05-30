/** @format */

import { View, Text } from "react-native";
import React from "react";
import { FONTS } from "../constants";

const Logo = () => {
  return (
    <View
      style={{
        display: "flex",
        flexDirection: "row",
        alignItems: "center",
      }}>
      <View
        style={{
          width: 60,
          height: 60,
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          borderRadius: 50,
          backgroundColor: "purple",
        }}>
        <Text
          style={{
            color: "white",
            fontSize: 19,
            fontFamily: FONTS.quicksand,
            borderRadius: 50,
          }}>
          SEE
        </Text>
      </View>
      <Text
        style={{
          marginLeft: 5,
          fontFamily: FONTS.rancho,
          fontSize: 19,
          color: "white",
        }}>
        GUIDE
      </Text>
    </View>
  );
};

export default Logo;
