/** @format */

import {
  View,
  Text,
  SafeAreaView,
  TouchableOpacity,
  Image,
  Button,
  StyleSheet,
  ScrollView,
} from "react-native";
import React, { useRef, useState } from "react";
import { assets, FONTS } from "../constants";
import BottomTab from "../components/BottomTab";
import background from "../assets/images/bg7.jpg";
import { Video } from "expo-av";
import FocusedStatusBar from "../components/FocusedStatusBar";

export default function Tuition({ navigation }) {
  const video = useRef(null);
  const [status, setStatus] = useState({});

  return (
    <SafeAreaView style={{ flex: 1, flexDirection: "column", padding: 10 }}>
      <FocusedStatusBar backgroundColor='#827397' />
      <ScrollView>
        <View
          style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
          <View
            style={{
              alignSelf: "center",
              padding: 10,
              backgroundColor: "white",
              marginVertical: 20,
              transform: [{ rotateX: "15deg" }, { rotateY: "15deg" }],
            }}>
            <Text style={{ textAlign: "center", fontFamily: FONTS.quicksand }}>
              TUITION
            </Text>
          </View>
          <View style={{ marginBottom: 15 }}>
            <Text
              style={{
                fontFamily: FONTS.poppins,
                fontSize: 16,
                color: "white",
              }}>
              Rs.500/month only with
            </Text>
            <Text
              style={{
                fontFamily: FONTS.poppins,
                color: "white",
                fontSize: 16,
              }}>
              free app subscription
            </Text>
          </View>
          <View>
            <TouchableOpacity
              style={{
                display: "flex",
                flexDirection: "row",
                alignItems: "center",
                marginBottom: 15,
                backgroundColor: "teal",
                padding: 10,
              }}>
              <Image
                source={assets.contactIcon}
                resizeMode='contain'
                style={{
                  width: 30,
                  height: 30,
                  marginRight: 10,
                  tintColor: "#fff",
                }}
              />
              <Text
                style={{
                  fontFamily: FONTS.poppins,
                  fontSize: 16,
                  color: "white",
                }}>
                Contact me at 9807717694
              </Text>
            </TouchableOpacity>

            <TouchableOpacity
              style={{
                display: "flex",
                flexDirection: "row",
                alignItems: "center",
                marginBottom: 15,
                backgroundColor: "teal",
                padding: 10,
              }}>
              <Image
                source={assets.facebookIcon}
                resizeMode='contain'
                style={{
                  width: 30,
                  height: 30,
                  marginRight: 10,
                  tintColor: "#fff",
                }}
              />
              <Text
                style={{
                  fontFamily: FONTS.poppins,
                  fontSize: 16,
                  color: "white",
                }}>
                Message me on facebook
              </Text>
            </TouchableOpacity>

            <TouchableOpacity
              style={{
                display: "flex",
                flexDirection: "row",
                alignItems: "center",
                marginBottom: 15,
                backgroundColor: "teal",
                padding: 10,
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
                Whatsapp me at 9807717694
              </Text>
            </TouchableOpacity>
          </View>
          <View style={styles.container}>
            <Text
              style={{
                fontFamily: FONTS.poppins,
                color: "white",
                fontSize: 18,
                padding: 10,
                backgroundColor: "teal",
                padding: 10,
              }}>
              Please Watch It!
            </Text>
            <Video
              ref={video}
              style={styles.video}
              source={{
                uri: "https://firebasestorage.googleapis.com/v0/b/see-guide.appspot.com/o/files%2Fvideo%20Editing1.mp4?alt=media&token=d2ee7fa8-38ed-4e25-a630-d6bbb2b4a427",
              }}
              useNativeControls
              resizeMode='contain'
              isLooping
              onPlaybackStatusUpdate={(status) => setStatus(() => status)}
            />
            <View style={styles.buttons}>
              <Button
                title={status.isPlaying ? "Pause" : "Play"}
                onPress={() =>
                  status.isPlaying
                    ? video.current.pauseAsync()
                    : video.current.playAsync()
                }
              />
            </View>
          </View>
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
}

const styles = StyleSheet.create({
  container: {
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "transparent",
    marginBottom: 20,
  },
  video: {
    alignSelf: "center",
    width: 320,
    height: 200,
  },
  buttons: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 10,
    marginTop: 10,
  },
});
