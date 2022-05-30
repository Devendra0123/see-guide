/** @format */

import { StyleSheet, Text, View } from "react-native";
import Home from "./screens/Home";
import { useFonts } from "expo-font";
import { createStackNavigator } from "@react-navigation/stack";
import { NavigationContainer, DefaultTheme } from "@react-navigation/native";
import LessonList from "./screens/LessonList";
import Tutorial from "./screens/Tutorial";
import Tuition from "./screens/Tuition";
import Membership from "./screens/Membership";
import Contact from "./screens/Contact";

const Stack = createStackNavigator();

const theme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    background: "transparent",
  },
};

export default function App() {
  const [loaded] = useFonts({
    Poppins: require("./assets/fonts/Poppins-Regular.ttf"),
    PoppinsBold: require("./assets/fonts/Poppins-Black.ttf"),
    Quicksand: require("./assets/fonts/Quicksand-VariableFont_wght.ttf"),
    QuicksandBold: require("./assets/fonts/Quicksand-Bold.ttf"),
    Rancho: require("./assets/fonts/Rancho-Regular.ttf"),
  });

  if (!loaded) return null;

  return (
    <NavigationContainer theme={theme}>
      <Stack.Navigator
        screenOptions={{
          headerShown: false,
        }}>
        <Stack.Screen name='Home' component={Home} />
        <Stack.Screen name='LessonList' component={LessonList} />
        <Stack.Screen name='Tutorial' component={Tutorial} />
        <Stack.Screen name='Tuition' component={Tuition} />
        <Stack.Screen name='Contact' component={Contact} />
        <Stack.Screen name='Membership' component={Membership} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
