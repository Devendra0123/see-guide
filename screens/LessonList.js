/** @format */

import {
  View,
  Text,
  TouchableOpacity,
  Image,
  SafeAreaView,
  ScrollView,
} from "react-native";
import React, { useEffect, useState } from "react";
import { subjectList } from "../seeSyllabus";
import { assets, FONTS } from "../constants";
import background from "../assets/images/bg7.jpg";
import BottomTab from "../components/BottomTab";
import FocusedStatusBar from "../components/FocusedStatusBar";

const LessonList = ({ route, navigation }) => {
  const { subId, subName } = route.params;

  const [lesson, setLesson] = useState();
  useEffect(() => {
    const filterSubject = subjectList.find((item) => item.subId == subId);
    const subLesson = filterSubject?.subLesson;
    setLesson(subLesson);
  }, []);

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <FocusedStatusBar />
      <ScrollView style={{ flex: 1 }}>
        <View
          style={{
            alignSelf: "center",
            padding: 10,
            backgroundColor: "white",
            marginVertical: 20,
            transform: [{ rotateX: "15deg" }, { rotateY: "15deg" }],
          }}>
          <Text style={{ textAlign: "center", fontFamily: FONTS.quicksand }}>
            {subName}
          </Text>
        </View>

        <View style={{ width: "100%", alignItems: "center" }}>
          {lesson?.map((item, index) => (
            <TouchableOpacity
              onPress={() =>
                navigation.navigate("Tutorial", { lessonName: item })
              }
              key={index}
              style={{
                width: "90%",
                display: "flex",
                flexDirection: "row",
                padding: 10,
                backgroundColor: "white",
                borderRadius: 10,
                boxShadow: "2px 2px 8px grey",
                marginBottom: 15,
                alignItems: "center",
              }}>
              <Text
                style={{
                  width: "70%",
                  fontFamily: FONTS.poppins,
                  fontSize: 16,
                  color: "brown",
                }}>
                {item}
              </Text>
              <View
                style={{
                  display: "flex",
                  flexDirection: "row",
                  alignItems: "center",
                  justifyContent: "flex-end",
                }}>
                <Image
                  source={assets.video}
                  resizeMode='contain'
                  style={{
                    width: 20,
                    height: 20,
                    marginRight: 15,
                  }}
                />
                <Image
                  source={assets.note}
                  resizeMode='contain'
                  style={{
                    width: 20,
                    height: 20,
                    marginRight: 15,
                  }}
                />
                <Image
                  source={assets.test}
                  resizeMode='contain'
                  style={{
                    width: 20,
                    height: 20,
                    marginRight: 15,
                  }}
                />
              </View>
            </TouchableOpacity>
          ))}
        </View>
      </ScrollView>
      <BottomTab navigation={navigation} />
      <View
        style={{
          position: "absolute",
          left: 0,
          top: 0,
          bottom: 0,
          right: 0,
          zIndex: -1,
          opacity: 0.9,
        }}>
        <Image
          resizeMode='cover'
          source={background}
          style={{
            width: "100%",
            height: "100%",
          }}
        />
      </View>
    </SafeAreaView>
  );
};

export default LessonList;
