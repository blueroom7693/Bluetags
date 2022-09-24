import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { BLACK_COLOR, LIGHT_GREY } from "../colors";
import { Text, TouchableOpacity, useColorScheme } from "react-native";
import Detail from "../screens/Detail";
import Profile from "../screens/Profile";
import Search from "../screens/Search";
import DetailArticle from "../screens/DetailArticle";

const NativeStack = createNativeStackNavigator();

const Stack = () => {
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
      <NativeStack.Screen name="Detail" component={Detail} />
      <NativeStack.Screen name="DetailArticle" component={DetailArticle} />

      <NativeStack.Screen name="Profile" component={Profile} />
      <NativeStack.Screen
        name="Search"
        component={Search}
        options={{ headerShown: false }}
      />
    </NativeStack.Navigator>
  );
};

export default Stack;
