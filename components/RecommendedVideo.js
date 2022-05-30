/** @format */

import * as React from "react";
import { View, StyleSheet, Button, ScrollView, Text } from "react-native";
import { Video, AVPlaybackStatus } from "expo-av";
import { FONTS } from "../constants";

export default function RecommendedVideo() {
  const data = [
    {
      videoLink: "https://d23dyxeqlo5psv.cloudfront.net/big_buck_bunny.mp4",
      status: {},
    },
    {
      videoLink: "https://d23dyxeqlo5psv.cloudfront.net/big_buck_bunny.mp4",
      status: {},
    },
    {
      videoLink: "https://d23dyxeqlo5psv.cloudfront.net/big_buck_bunny.mp4",
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
    <View style={styles.container}>
      <Text
        style={{
          fontFamily: FONTS.poppins,
          padding: 10,
          fontSize: 18,
          textAlign: "center",
          color: "white",
        }}>
        Recommended Video
      </Text>
      <ScrollView
        horizontal
        style={{
          flex: 1,
          height: 250,
        }}>
        <View
          style={{
            justifyContent: "center",
            marginRight: 15,
            marginBottom: 20,
          }}>
          <Video
            ref={(el) => (videoRef.current[0] = el)}
            style={styles.video}
            source={{
              uri: video[0].videoLink,
            }}
            useNativeControls
            resizeMode='contain'
            isLooping
            onPlaybackStatusUpdate={(status) => handlePlaybackStatus(status, 0)}
          />
          <View style={styles.buttons}>
            <Button
              title={video[0].status.isPlaying ? "Pause" : "Play"}
              onPress={() =>
                video[0].status.isPlaying
                  ? videoRef.current[0].pauseAsync()
                  : videoRef.current[0].playAsync()
              }
            />
          </View>
        </View>

        <View
          style={{
            justifyContent: "center",
            marginRight: 15,
            marginBottom: 20,
          }}>
          <Video
            ref={(el) => (videoRef.current[1] = el)}
            style={styles.video}
            source={{
              uri: video[1].videoLink,
            }}
            useNativeControls
            resizeMode='contain'
            isLooping
            onPlaybackStatusUpdate={(status) => handlePlaybackStatus(status, 1)}
          />
          <View style={styles.buttons}>
            <Button
              title={video[1].status.isPlaying ? "Pause" : "Play"}
              onPress={() =>
                video[1].status.isPlaying
                  ? videoRef.current[1].pauseAsync()
                  : videoRef.current[1].playAsync()
              }
            />
          </View>
        </View>

        <View
          style={{
            justifyContent: "center",
            marginRight: 15,
            marginBottom: 20,
          }}>
          <Video
            ref={(el) => (videoRef.current[2] = el)}
            style={styles.video}
            source={{
              uri: video[2].videoLink,
            }}
            useNativeControls
            resizeMode='contain'
            isLooping
            onPlaybackStatusUpdate={(status) => handlePlaybackStatus(status, 2)}
          />
          <View style={styles.buttons}>
            <Button
              title={video[2].status.isPlaying ? "Pause" : "Play"}
              onPress={() =>
                video[2].status.isPlaying
                  ? videoRef.current[2].pauseAsync()
                  : videoRef.current[2].playAsync()
              }
            />
          </View>
        </View>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "transparent",
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
