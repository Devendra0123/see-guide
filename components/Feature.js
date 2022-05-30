/** @format */

import { View, Text, TouchableOpacity, Image } from "react-native";
import React from "react";
import { assets, FONTS } from "../constants";

const Feature = () => {
  return (
    <View>
      <TouchableOpacity
        style={{
          display: "flex",
          flexDirection: "row",
          alignItems: "center",
          backgroundColor: "white",
          borderRadius: 10,
          paddingVertical: 15,
          paddingHorizontal: 10,
          boxShadow: "2px 2px 8px grey",
          marginBottom: 15,
        }}>
        <Image
          resizeMode='contain'
          source={assets.doubt}
          style={{ width: 30, height: 30 }}
        />
        <Text
          style={{
            fontFamily: FONTS.poppins,
            marginLeft: 5,
            fontSize: 16,
            fontWeight: "bold",
          }}>
          Ask Doubt
        </Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={{
          display: "flex",
          flexDirection: "row",
          alignItems: "center",
          backgroundColor: "white",
          borderRadius: 10,
          paddingVertical: 15,
          paddingHorizontal: 10,
          boxShadow: "2px 2px 8px grey",
          marginBottom: 15,
        }}>
        <Image
          resizeMode='contain'
          source={assets.tuition}
          style={{ width: 30, height: 30 }}
        />
        <Text
          style={{
            fontFamily: FONTS.poppins,
            marginLeft: 5,
            fontSize: 16,
            fontWeight: "bold",
          }}>
          Tuition
        </Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={{
          display: "flex",
          flexDirection: "row",
          alignItems: "center",
          backgroundColor: "white",
          borderRadius: 10,
          paddingVertical: 15,
          paddingHorizontal: 10,
          boxShadow: "2px 2px 8px grey",
          marginBottom: 15,
        }}>
        <Image
          resizeMode='contain'
          source={assets.contest}
          style={{ width: 30, height: 30 }}
        />
        <Text
          style={{
            fontFamily: FONTS.poppins,
            marginLeft: 5,
            fontSize: 16,
            fontWeight: "bold",
          }}>
          Contest
        </Text>
      </TouchableOpacity>
    </View>
  );
};

export default Feature;
