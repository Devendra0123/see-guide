/** @format */

import { View, Text, TouchableOpacity, Image } from "react-native";
import React from "react";
import { assets, FONTS } from "../constants";
import { useNavigation } from "@react-navigation/native";
import { LinearGradient } from "expo-linear-gradient";

const listOne = [
  {
    subjectName: "Science",
    backgroundImage: assets.bg9,
    subId: "science",
  },
  {
    subjectName: "English",
    backgroundImage: assets.bg8,
    subId: "english",
  },
  {
    subjectName: "Social Studies",
    backgroundImage: assets.bg9,
    subId: "social",
  },
  {
    subjectName: "Health, Environment and Population",
    backgroundImage: assets.bg4,
    subId: "env_pop_health",
  },
];

const listTwo = [
  {
    subjectName: "Compulsory Mathematics",
    backgroundImage: assets.bg8,
    subId: "comp_math",
  },
  {
    subjectName: "Optional Mathematics",
    backgroundImage: assets.bg9,
    subId: "opt_math",
  },
  {
    subjectName: "Accountant",
    backgroundImage: assets.bg8,
    subId: "accountant",
  },
];

const SubjectList = () => {
  const navigation = useNavigation();

  return (
    <View
      style={{
        display: "flex",
        flexDirection: "row",
        alignItems: "flex-start",
        justifyContent: "space-around",
      }}>
      <View style={{ justifyContent: "center" }}>
        {listOne.map((item, index) => (
          <TouchableOpacity
            onPress={() =>
              navigation.navigate("LessonList", {
                subId: item.subId,
                subName: item.subjectName,
              })
            }
            key={index}
            style={{
              width: 170,
              height: (index % 2 == 1 && index) == 1 ? 200 : 150,
              marginBottom: 15,
              borderRadius: 10,
              backgroundColor:
                (index % 2 == 1 && index) == 1 ? "#069A8E" : "#733C3C",
            }}>
            <LinearGradient
              colors={["#733C3C", "#069A8E"]}
              start={{ x: 0, y: 1 }}
              end={{ x: 1, y: 0 }}
              style={{ flex: 1, borderRadius: 10 }}>
              <Text
                style={{
                  padding: 10,
                  fontFamily: FONTS.quicksand,
                  fontSize: 16,
                  fontWeight: "600",
                  color: "white",
                }}>
                {item.subjectName}
              </Text>
            </LinearGradient>
          </TouchableOpacity>
        ))}
      </View>
      <View style={{ justifyContent: "center" }}>
        {listTwo.map((item, index) => (
          <TouchableOpacity
            onPress={() =>
              navigation.navigate("LessonList", {
                subId: item.subId,
                subName: item.subjectName,
              })
            }
            key={index}
            style={{
              width: 170,
              height: (index % 2 == 1 && index) == 1 ? 150 : 200,
              marginBottom: 15,
              borderRadius: 10,
              backgroundColor:
                (index % 2 == 1 && index) == 1 ? "#733C3C" : "#4B7BE5",
            }}>
            <Text
              style={{
                padding: 10,
                fontFamily: FONTS.quicksand,
                fontSize: 16,
                fontWeight: "600",
                color: "white",
              }}>
              {item.subjectName}
            </Text>
          </TouchableOpacity>
        ))}
      </View>
    </View>
  );
};

export default SubjectList;
