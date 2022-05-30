/** @format */

import {
  View,
  Text,
  ScrollView,
  Button,
  StyleSheet,
  Image,
  TouchableOpacity,
  SafeAreaView,
} from "react-native";
import * as React from "react";
import { Video, AVPlaybackStatus } from "expo-av";
import { FONTS, assets } from "../constants";
import background from "../assets/background.jpeg";
import BottomTab from "../components/BottomTab";
import { doc, getDoc } from "firebase/firestore";
import { database } from "../firebaseConfig";

export default function Tutorial({ route, navigation }) {
  const { lessonName } = route.params;

  React.useEffect(async () => {
    const docRef = doc(database, "science", "science01");
    const docSnap = await getDoc(docRef);

    if (docSnap.exists()) {
      console.log("Document data:", docSnap.data());
    } else {
      console.log("No such document!");
    }
  }, []);

  const data = [
    {
      videoLink: "https://d23dyxeqlo5psv.cloudfront.net/big_buck_bunny.mp4",
      videoTitle: "Pressure Basic",
      status: {},
    },
    {
      videoLink: "https://d23dyxeqlo5psv.cloudfront.net/big_buck_bunny.mp4",
      videoTitle: "Pressure Basic",
      status: {},
    },
    {
      videoLink: "https://d23dyxeqlo5psv.cloudfront.net/big_buck_bunny.mp4",
      videoTitle: "Pressure Basic",
      status: {},
    },
  ];

  const videoRef = React.useRef([]);
  const [video, setVideo] = React.useState(data);

  const handlePlaybackStatus = (status, index) => {
    setVideo(
      video.map((vid, i) =>
        i === index ? { ...vid, status: status } : { ...vid }
      )
    );
  };

  return (
    <SafeAreaView style={{ flex: 1, flexDirection: "column" }}>
      <View style={{ flex: 1, padding: 10 }}>
        <View style={{ alignItems: "center" }}>
          <Text
            style={{
              width: "max-content",
              fontFamily: FONTS.poppins,
              fontWeight: "bold",
              padding: 10,
              fontSize: 18,
              textAlign: "center",
              backgroundColor: "brown",
              borderRadius: 10,
              color: "white",
            }}>
            {lessonName}
          </Text>
        </View>

        <View>
          <Text
            style={{
              fontFamily: FONTS.poppins,
              fontWeight: "bold",
              padding: 10,
              fontSize: 16,
            }}>
            Video Lectures
          </Text>
          <ScrollView
            horizontal
            style={{
              flex: 1,
              height: 350,
            }}>
            {video?.map((item, index) => (
              <View
                key={index}
                style={{
                  justifyContent: "center",
                  marginRight: 15,
                  marginBottom: 20,
                }}>
                <Video
                  ref={(el) => (videoRef.current[index] = el)}
                  style={styles.video}
                  source={{
                    uri: item.videoLink,
                  }}
                  useNativeControls
                  resizeMode='contain'
                  isLooping
                  onPlaybackStatusUpdate={(status) =>
                    handlePlaybackStatus(status, index)
                  }
                />
                <Text> {item.videoTitle} </Text>
                <View style={styles.buttons}>
                  <Button
                    title={video[index].status.isPlaying ? "Pause" : "Play"}
                    onPress={() =>
                      video[index].status.isPlaying
                        ? videoRef.current[index].pauseAsync()
                        : videoRef.current[index].playAsync()
                    }
                  />
                </View>
              </View>
            ))}
          </ScrollView>
        </View>

        <TouchableOpacity
          style={{
            marginBottom: 15,
            display: "flex",
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "space-between",
            padding: 10,
            borderRadius: 5,
            boxShadow: "2px 2px 10px black",
            backgroundColor: "white",
          }}>
          <Text
            style={{
              fontFamily: FONTS.poppins,
              fontWeight: "bold",
              fontSize: 18,
            }}>
            Test Your Knowledge
          </Text>
          <Image
            source={assets.test}
            resizeMode='contain'
            style={{ width: 35, height: 35 }}
          />
        </TouchableOpacity>

        <TouchableOpacity
          style={{
            marginBottom: 15,
            display: "flex",
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "space-between",
            padding: 10,
            borderRadius: 5,
            boxShadow: "2px 2px 10px black",
            backgroundColor: "white",
          }}>
          <Text
            style={{
              fontFamily: FONTS.poppins,
              fontWeight: "bold",
              fontSize: 18,
            }}>
            Notes
          </Text>
          <Image
            source={assets.note}
            resizeMode='contain'
            style={{ width: 35, height: 35 }}
          />
        </TouchableOpacity>

        <TouchableOpacity
          style={{
            marginBottom: 15,
            display: "flex",
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "space-between",
            padding: 10,
            borderRadius: 5,
            boxShadow: "2px 2px 10px black",
            backgroundColor: "white",
          }}>
          <Text
            style={{
              fontFamily: FONTS.poppins,
              fontWeight: "bold",
              fontSize: 18,
            }}>
            Quick Revision
          </Text>
          <Image
            source={assets.note}
            resizeMode='contain'
            style={{ width: 35, height: 35 }}
          />
        </TouchableOpacity>

        <TouchableOpacity
          style={{
            marginBottom: 15,
            display: "flex",
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "space-between",
            padding: 10,
            borderRadius: 5,
            boxShadow: "2px 2px 10px black",
            backgroundColor: "white",
          }}>
          <Text
            style={{
              fontFamily: FONTS.poppins,
              fontWeight: "bold",
              fontSize: 18,
            }}>
            Important Questions
          </Text>
          <Image
            source={assets.ask}
            resizeMode='contain'
            style={{ width: 35, height: 35 }}
          />
        </TouchableOpacity>

        <TouchableOpacity
          style={{
            marginBottom: 15,
            display: "flex",
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "space-between",
            padding: 10,
            borderRadius: 5,
            boxShadow: "2px 2px 10px black",
            backgroundColor: "white",
          }}>
          <Text
            style={{
              fontFamily: FONTS.poppins,
              fontWeight: "bold",
              fontSize: 18,
            }}>
            Past Questions
          </Text>
          <Image
            source={assets.ask}
            resizeMode='contain'
            style={{ width: 35, height: 35 }}
          />
        </TouchableOpacity>

        <View
          style={{
            position: "absolute",
            left: 0,
            top: 0,
            bottom: 0,
            right: 0,
            zIndex: -1,
          }}>
          <Image
            source={background}
            resizeMode='contain'
            style={{
              width: "100%",
            }}
          />
        </View>
        <BottomTab navigation={navigation} />
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
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
  },
});
