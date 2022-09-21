import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Cardscreen from "../screens/Card";
import { Button, useColorScheme, Text, View } from "react-native";
import {
  BLACK_COLOR,
  BLUE,
  DARK_GREY,
  LIGHT_GREY,
  Pallet,
  WHITE,
  YELLOW_COLOR,
} from "../colors";
import { MaterialIcons, Ionicons } from "@expo/vector-icons";
import Search from "../screens/Search";
import Profile from "../screens/Profile";
import styled from "styled-components";
import { DrawerActions } from "@react-navigation/native";
import Home from "../screens/Home";
import Watchlist from "../screens/Watchlist";
import Feed from "../screens/Feed";
DrawerActions;

const DrawerBtnContainer = styled.View`
  margin-left: 15px;
`;

const HeaderRight = styled.View`
  flex-direction: row;
`;

const Tab = createBottomTabNavigator();

const Tabs = () => {
  const isDark = useColorScheme() === "dark";
  return (
    <Tab.Navigator
      sceneContainerStyle={{
        backgroundColor: isDark ? BLACK_COLOR : "white",
      }}
      screenOptions={{
        tabBarStyle: {
          backgroundColor: isDark ? LIGHT_GREY : LIGHT_GREY,
          height: 50,
          position: "absolute",
          // bottom: 16,
          // left: 16,
          // right: 16,
          // borderRadius: 16,
          borderColor: BLACK_COLOR,
          borderWidth: 2,
        },
        tabBarActiveTintColor: isDark ? YELLOW_COLOR : BLUE,
        tabBarInactiveTintColor: isDark ? DARK_GREY : WHITE,
        headerStyle: {
          backgroundColor: isDark ? BLACK_COLOR : BLACK_COLOR,
        },
        headerTitleStyle: {
          color: isDark ? "white" : "white",
        },
        tabBarLabelStyle: {
          marginTop: -5,
          fontSize: 10,
          fontWeight: "600",
        },
        headerShown: true,
        // tabBarShowLabel: false,
      }}
    >
      <Tab.Screen
        name="trending"
        component={Feed}
        options={({ navigation, route }) => ({
          headerLeft: () => (
            <DrawerBtnContainer>
              <Ionicons
                name="menu"
                size={24}
                color="white"
                onPress={() => navigation.openDrawer()}
              />
            </DrawerBtnContainer>
          ),
          tabBarIcon: ({ color, size }) => (
            <MaterialIcons
              name={"local-fire-department"}
              color={color}
              size={30}
            />
          ),
        })}
      />
      <Tab.Screen
        name="Home"
        component={Home}
        options={({ navigation, route }) => ({
          headerLeft: () => (
            <DrawerBtnContainer>
              <Ionicons
                name="menu"
                size={32}
                color="white"
                onPress={() => navigation.openDrawer()}
              />
            </DrawerBtnContainer>
          ),
          tabBarIcon: ({ color, size }) => (
            <MaterialIcons name={"home-filled"} color={color} size={30} />
          ),
          headerRight: ({ color, size }) => (
            <HeaderRight>
              <MaterialIcons name={"home-filled"} color={"white"} size={30} />
              <Ionicons
                name="search"
                color={"white"}
                size={30}
                onPress={() =>
                  navigation.navigate("Stack", {
                    screen: "Search",
                    params: {
                      // ...fullData,
                    },
                  })
                }
              />
              <Ionicons
                name={"person"}
                color={"white"}
                size={30}
                onPress={() =>
                  navigation.navigate("Stack", {
                    screen: "Profile",
                    params: {
                      // ...fullData,
                    },
                  })
                }
              />
            </HeaderRight>
          ),
        })}
      />
      <Tab.Screen
        name="Watchlist"
        component={Watchlist}
        options={({ navigation, route }) => ({
          tabBarBadge: 3,
          tabBarBadgeStyle: { backgroundColor: "red" },
          headerLeft: () => (
            <DrawerBtnContainer>
              <Ionicons
                name="menu"
                size={24}
                color="white"
                onPress={() => navigation.openDrawer()}
              />
            </DrawerBtnContainer>
          ),
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="star" color={color} size={30} />
          ),
        })}
      />
    </Tab.Navigator>
  );
};

export default Tabs;
