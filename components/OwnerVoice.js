/** @format */

import * as React from "react";
import { View, StyleSheet, Button, Text } from "react-native";
import { Video, AVPlaybackStatus } from "expo-av";
import { FONTS } from "../constants";

export default function OwnerVoice() {
  const video = React.useRef(null);
  const [status, setStatus] = React.useState({});
  return (
    <View style={styles.container}>
      <Text
        style={{
          fontFamily: FONTS.poppins,
          fontSize: 18,
          padding: 10,
          color: "white",
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
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "transparent",
    marginBottom: 20,
  },
  video: {
    alignSelf: "center",
    width: 320,
    height: 200,
    borderRadius: 10,
  },
  buttons: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 10,
  },
});
