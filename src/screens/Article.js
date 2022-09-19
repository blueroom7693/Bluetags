import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { BLACK_COLOR } from "../colors";
import { Text, TouchableOpacity, useColorScheme } from "react-native";

const NativeStack = createNativeStackNavigator();

const ScreenOne = ({ navigation }) => (
  <TouchableOpacity onPress={() => navigation.goBack()}>
    <Text>go to two</Text>
    <TouchableOpacity>
      <Text>Click me</Text>
    </TouchableOpacity>
  </TouchableOpacity>
);

const Article = () => {
  const isDark = useColorScheme() === "dark";
  return (
    <NativeStack.Navigator
      screenOptions={{
        headerBackTitleVisible: false,
        headerStyle: {
          backgroundColor: isDark ? BLACK_COLOR : "white",
        },
        headerTitleStyle: {
          color: isDark ? "white" : BLACK_COLOR,
        },
        headerShown: true,
      }}
    >
      <NativeStack.Screen name="One" component={ScreenOne} />
    </NativeStack.Navigator>
  );
};

export default Article;
