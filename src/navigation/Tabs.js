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
import { useRecoilState, useRecoilValue } from "recoil";
import { isBottomFilter } from "../atom";
import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";
import { faHexagonVerticalNft } from "@fortawesome/pro-light-svg-icons";
import { faFilter } from "@fortawesome/free-solid-svg-icons";
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
  const isTabBar = useRecoilValue(isBottomFilter);
  return (
    <Tab.Navigator
      sceneContainerStyle={{
        backgroundColor: isDark ? BLACK_COLOR : BLACK_COLOR,
      }}
      screenOptions={{
        tabBarStyle: {
          backgroundColor: isDark ? LIGHT_GREY : "black",
          height: 50,
          position: "absolute",
          borderTopWidth: 1,
          borderTopColor: LIGHT_GREY,
          display: isTabBar ? "none" : "flex",
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
          tabBarIcon: ({ color, size }) => (
            <MaterialIcons name={"home-filled"} color={color} size={30} />
          ),
          headerRight: ({ color, size }) => (
            <HeaderRight>
              <FontAwesomeIcon icon={faFilter} color={"white"} size={24} />
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
          tabBarBadge: 2,
          tabBarBadgeStyle: { backgroundColor: "red" },
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="star" color={color} size={30} />
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
        name="Home"
        component={Home}
        options={({ navigation, route }) => ({
          tabBarIcon: ({ color, size }) => (
            <FontAwesomeIcon
              icon={faHexagonVerticalNft}
              color={color}
              size={32}
            />
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
    </Tab.Navigator>
  );
};

export default Tabs;
