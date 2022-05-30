/** @format */

import { View, Text, Image } from "react-native";
import React, { useState } from "react";
import Logo from "./Logo";
import { assets, FONTS } from "../constants";
import SubjectList from "./SubjectList";
import OwnerVoice from "./OwnerVoice";
import RecommendedVideo from "./RecommendedVideo";
import Feature from "./Feature";
import Contact from "./Contact";
import MathjaxTest from "./Mathjax";

const HomeContent = () => {
  const [studentName, setStudentName] = useState("Rohan");
  return (
    <View style={{ padding: 10 }}>
      <Logo />
      <View
        style={{
          width: "100%",
          display: "flex",
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "space-around",
        }}>
        <Text
          style={{
            fontFamily: FONTS.quicksand,
            fontSize: 18,
            marginVertical: 15,
            color: "white",
          }}>
          Welcome {studentName} !
        </Text>
        <View
          style={{
            display: "flex",
            flexDirection: "row",
            alignItems: "center",
            backgroundColor: "black",
            padding: 20,
            borderRadius: 50,
          }}>
          <View>
            <Image
              source={assets.video}
              resizeMode='contain'
              style={{
                width: 20,
                height: 20,
                marginRight: 15,
                marginBottom: 10,
                tintColor: "white",
              }}
            />
            <Image
              source={assets.note}
              resizeMode='contain'
              style={{
                width: 20,
                height: 20,
                tintColor: "white",
              }}
            />
          </View>
          <View>
            <Image
              source={assets.ask}
              resizeMode='contain'
              style={{
                width: 20,
                height: 20,
                marginBottom: 10,
                tintColor: "white",
              }}
            />
            <Image
              source={assets.test}
              resizeMode='contain'
              style={{
                width: 20,
                height: 20,
                tintColor: "white",
              }}
            />
          </View>
        </View>
      </View>

      <Text
        style={{
          fontFamily: FONTS.rancho,
          fontSize: 16,
          marginVertical: 15,
          color: "white",
          textAlign: "center",
          letterSpacing: 1.5,
        }}>
        Understanding is the key to true knowledge
      </Text>
      <SubjectList />
      <OwnerVoice />
      <RecommendedVideo />
      <Feature />
      <Contact />
      <MathjaxTest />
    </View>
  );
};

export default HomeContent;
