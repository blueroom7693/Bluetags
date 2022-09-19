import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { BLACK_COLOR } from "../colors";
import { Text, TouchableOpacity, useColorScheme } from "react-native";
import Detail from "../screens/Detail";

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
    </NativeStack.Navigator>
  );
};

export default Stack;
