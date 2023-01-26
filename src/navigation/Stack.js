import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { BLACK_COLOR, LIGHT_GREY } from "../colors";
import { Text, TouchableOpacity, useColorScheme, View } from "react-native";
import Detail from "../screens/Detail";
import Profile from "../screens/Profile";
import Search from "../screens/Search";
import DetailArticle from "../screens/DetailArticle";
import { useContext } from "react";
import styled, { ThemeContext } from "styled-components/native";

const NativeStack = createNativeStackNavigator();
const HeaderLogo = styled.Image``;

const Stack = () => {
  const theme = useContext(ThemeContext);
  const isDark = useColorScheme() === "dark";

  return (
    <NativeStack.Navigator
      screenOptions={{
        headerBackTitleVisible: false,
        headerStyle: {
          backgroundColor: `${theme.Bg0dp}`,
          height: 48,
          justifyContent: "center",
          alignItems: "center",
        },
        headerTitleStyle: {
          color: `${theme.Text0dp}`,
          fontSize: 18,
          fontWeight: "400",
        },
        headerTitleAlign: "center",
        headerShown: true,
        headerTintColor: `${theme.Text0dp}`,
        // headerBackImageSource: {
        //   uri: "https://media.istockphoto.com/photos/old-rustic-wooden-cross-isolated-on-white-background-christian-faith-picture-id1054653410?b=1&k=20&m=1054653410&s=170667a&w=0&h=PBKCfoVrjPgkpkoHFhrZ1gTmL8lWiI1o_GEgq_8YwgY=",
        // },
      }}
    >
      <NativeStack.Screen name="Detail" component={Detail} />
      <NativeStack.Screen
        name="DetailArticle"
        component={DetailArticle}
        options={({ navigation, route }) => ({
          tabBarIcon: ({ color, size }) => (
            <MaterialIcons name={"home-filled"} color={color} size={30} />
          ),
          headerRight: ({ color, size }) => (
            <View>
              <HeaderLogo
                source={require("../assets/images/Frame.png")}
                style={{
                  width: 85,
                  resizeMode: "contain",
                }}
              />
            </View>
          ),
        })}
      />

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
