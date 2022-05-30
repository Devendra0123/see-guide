/** @format */

import { View, Text, TouchableOpacity, Image } from "react-native";
import React from "react";
import { assets, FONTS } from "../constants";

const Contact = () => {
  return (
    <View
      style={{
        alignItems: "center",
        backgroundColor: "white",
        borderRadius: 15,
        padding: 15,
      }}>
      <Text
        style={{
          fontFamily: FONTS.quicksand,
          fontWeight: "bold",
          fontSize: 16,
        }}>
        Contact Me
      </Text>
      <View>
        <Text
          style={{
            textAlign: "center",
            fontFamily: FONTS.poppins,
            fontSize: 16,
          }}>
          9807717694
        </Text>
        <Text
          style={{
            textAlign: "center",
            fontFamily: FONTS.poppins,
            fontSize: 16,
          }}>
          devendra13.dc@gmail.com
        </Text>

        <TouchableOpacity
          style={{
            display: "flex",
            flexDirection: "row",
            alignItems: "center",
            marginBottom: 15,
            backgroundColor: "teal",
            padding: 8,
            borderRadius: 5,
          }}>
          <Image
            source={assets.facebookIcon}
            resizeMode='contain'
            style={{ width: 30, height: 30, marginRight: 10 }}
          />
          <Text
            style={{ fontFamily: FONTS.poppins, fontSize: 16, color: "white" }}>
            Message on facebook
          </Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={{
            display: "flex",
            flexDirection: "row",
            alignItems: "center",
            marginBottom: 15,
            backgroundColor: "teal",
            padding: 8,
            borderRadius: 5,
          }}>
          <Image
            source={assets.InstagramIcon}
            resizeMode='contain'
            style={{ width: 30, height: 30, marginRight: 10 }}
          />
          <Text
            style={{
              fontFamily: FONTS.poppins,
              fontSize: 16,
              color: "white",
            }}>
            Message on instagram
          </Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={{
            display: "flex",
            flexDirection: "row",
            alignItems: "center",
            backgroundColor: "teal",
            padding: 8,
            borderRadius: 5,
          }}>
          <Image
            source={assets.whatsappIcon}
            resizeMode='contain'
            style={{ width: 30, height: 30, marginRight: 10 }}
          />
          <Text
            style={{
              fontFamily: FONTS.poppins,
              fontSize: 16,
              color: "white",
            }}>
            Whatsapp at 9807717694
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default Contact;
