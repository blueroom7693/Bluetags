import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Cardscreen from "../screens/Card";
import { Button, useColorScheme, Text, View, Image } from "react-native";
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
import Watchlist from "../screens/Watchlist";
import Feed from "../screens/Home";
import { useRecoilState, useRecoilValue } from "recoil";
import { isBottomFilter } from "../atom";
import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";
import { faHexagonVerticalNft } from "@fortawesome/pro-light-svg-icons";
import { faFilter } from "@fortawesome/free-solid-svg-icons";
import NFT from "../screens/NFT";
import Home from "../screens/Home";
import { useContext } from "react";
import { ThemeContext } from "styled-components/native";
import * as NavigationBar from "expo-navigation-bar";
import HomeSVG from "../assets/images/misc/house-blank-solid.svg";

DrawerActions;

const DrawerBtnContainer = styled.View`
  margin-left: 15px;
`;

const HeaderRight = styled.View`
  flex-direction: row;
`;
const HeaderLeft = styled.View`
  flex-direction: row;
`;

const Tab = createBottomTabNavigator();

//HEADER LOGO
const HeaderLogo = styled.Image`
  width: 120px;
  height: 30px;
  /* border-radius: 30px; */
`;

function LogoTitle() {
  return (
    <HeaderLogo
      // source={{ uri: "../assets/images/Frame.png", width: 40, height: 40 }}
      source={require("../assets/images/Frame.png")}
      style={{
        width: 85,
        resizeMode: "contain",
        // height: 51,
      }}

      // src="../assets/images/Frame.png"
    />
  );
}
const Tabs = () => {
  const theme = useContext(ThemeContext);
  NavigationBar.setBackgroundColorAsync(`${theme.Tabbar}`);

  const isTabBar = useRecoilValue(isBottomFilter);
  return (
    <Tab.Navigator
      sceneContainerStyle={{
        backgroundColor: `${theme.Bg0dp}`,
        // isDark ? BLACK_COLOR : BLACK_COLOR,
      }}
      screenOptions={{
        tabBarStyle: {
          backgroundColor: `${theme.Tabbar}`,
          height: 50,
          position: "absolute",
          // borderTopWidth: 1,
          borderTopColor: LIGHT_GREY,
          display: isTabBar ? "none" : "flex",
        },
        tabBarActiveTintColor: `${theme.TabbarActive}`,
        tabBarInactiveTintColor: `${theme.TabbarInactive}`,
        headerStyle: {
          backgroundColor: `${theme.Bg0dp}`,
        },
        headerTitleStyle: {
          color: `${theme.Text0dp}`,
        },
        tabBarLabelStyle: {
          marginTop: -5,
          fontSize: 10,
          fontWeight: "400",
        },
        headerShown: true,
        tabBarShowLabel: false,
      }}
    >
      <Tab.Screen
        name="Home"
        component={Home}
        options={({ navigation, route }) => ({
          tabBarIcon: ({ color, size }) => (
            <MaterialIcons name={"home-filled"} color={color} size={30} />
          ),
          headerTitle: (props) => <LogoTitle {...props} />,
          headerRight: ({ color, size }) => (
            <HeaderRight>
              <FontAwesomeIcon
                icon={faFilter}
                color={theme.Text0dp}
                size={24}
              />
              <MaterialIcons
                name={"home-filled"}
                color={theme.Text0dp}
                size={30}
              />
              <Ionicons
                name="search"
                color={theme.Text0dp}
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
                color={theme.Text0dp}
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
        name="NFT"
        component={NFT}
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
