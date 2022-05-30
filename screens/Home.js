/** @format */

import {
  View,
  Image,
  SafeAreaView,
  ScrollView,
  Text,
  TouchableOpacity,
} from "react-native";
import React from "react";
import background from "../assets/images/bg7.jpg";
import BottomTab from "../components/BottomTab";
import HomeContent from "../components/HomeContent";
import FocusedStatusBar from "../components/FocusedStatusBar";

const Home = ({ navigation }) => {
  return (
    <SafeAreaView style={{ flex: 1, flexDirection: "column" }}>
      <FocusedStatusBar backgroundColor='#827397' />
      <ScrollView style={{ flex: 1 }}>
        <HomeContent />
        <TouchableOpacity onPress={() => navigation.navigate("Contact")}>
          <Text>Contact</Text>
        </TouchableOpacity>
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

export default Home;
