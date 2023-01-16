import React, { useState, useEffect, useCallback, useContext } from "react";
import { Text, useColorScheme, View, Appearance } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { NavigationContainer } from "@react-navigation/native";
// import Root from "./navigation/Root";
import { ThemeProvider } from "styled-components";
import { darkTheme, lightTheme, Pallet } from "./src/utils/styled";
import {
  QueryClient,
  QueryClientProvider,
  useQuery,
} from "@tanstack/react-query";
import MyDrawer from "./src/navigation/Drawer";
import AuthStack from "./src/navigation/AuthStack";
import { RecoilRoot, useRecoilState } from "recoil";
import { useCookies } from "react-cookie";
import { isLogined, token } from "./src/atom";
import DataProvider from "./src/context/DataProvider";
import Entypo from "@expo/vector-icons/Entypo";
import * as SplashScreen from "expo-splash-screen";
import * as Font from "expo-font";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { getUserStored } from "./src/async";
import { getAllNft, IData } from "./src/axios";
import * as NavigationBar from "expo-navigation-bar";
import { ThemeContext } from "styled-components/native";
// NavigationBar.setBackgroundColorAsync("#1f1f1f");

SplashScreen.preventAutoHideAsync();

export interface IInfo {
  data: IData;
}

export default function App() {
  // 쿠키 확인 및 로그인 토큰
  const [isLogin, setIsLogin] = useRecoilState(isLogined);
  const [userToken, setUserToken] = useRecoilState(token);
  // splash screen
  const [appIsReady, setAppIsReady] = useState(false);

  useEffect(() => {
    async function prepare() {
      try {
        await Font.loadAsync(Entypo.font);
        // async storage 토큰 확인
        const token = JSON.parse(await AsyncStorage.getItem("sangwan"));
        if (token !== (undefined || null)) {
          console.log(token);
          setIsLogin(true);
          setUserToken(token);
        }
      } catch (e) {
        console.warn(e);
      } finally {
        setAppIsReady(true);
      }
    }
    prepare();
    SplashScreen.hideAsync();
  }, [isLogin]);

  // QUERY CLIENT
  const queryClient = new QueryClient();

  // 테마 확인
  const [isLight, setIsLight] = useState(
    Appearance.getColorScheme() === "light"
  );
  Appearance.addChangeListener(() => {
    setIsLight(!isLight);
  });

  // 로그인 될 시
  return (
    <DataProvider>
      <QueryClientProvider client={queryClient}>
        <ThemeProvider theme={isLight ? lightTheme : darkTheme}>
          <NavigationContainer>
            {/* {isLogin ? <MyDrawer /> : <AuthStack />} */}
            <AuthStack />
            {/* <MyDrawer /> */}
          </NavigationContainer>
        </ThemeProvider>
      </QueryClientProvider>
    </DataProvider>
  );
}
