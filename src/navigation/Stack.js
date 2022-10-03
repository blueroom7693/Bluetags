import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { BLACK_COLOR, LIGHT_GREY } from "../colors";
import { Text, TouchableOpacity, useColorScheme } from "react-native";
import Detail from "../screens/Detail";
import Profile from "../screens/Profile";
import Search from "../screens/Search";
import DetailArticle from "../screens/DetailArticle";
import { useContext } from "react";
import { ThemeContext } from "styled-components/native";

const NativeStack = createNativeStackNavigator();

const Stack = () => {
  const theme = useContext(ThemeContext);
  const isDark = useColorScheme() === "dark";

  return (
    <NativeStack.Navigator
      screenOptions={{
        headerBackTitleVisible: false,
        headerStyle: {
          backgroundColor: `${theme.Bg0dp}`,
        },
        headerTitleStyle: {
          color: `${theme.Text0dp}`,
        },
        headerShown: true,
        headerTintColor: `${theme.Text0dp}`,
        // headerBackImageSource: {
        //   uri: "https://media.istockphoto.com/photos/old-rustic-wooden-cross-isolated-on-white-background-christian-faith-picture-id1054653410?b=1&k=20&m=1054653410&s=170667a&w=0&h=PBKCfoVrjPgkpkoHFhrZ1gTmL8lWiI1o_GEgq_8YwgY=",
        // },
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
