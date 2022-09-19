import React, { useState, useEffect, useCallback } from "react";
import { Text, useColorScheme, View, Appearance } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { NavigationContainer } from "@react-navigation/native";
// import Root from "./navigation/Root";
import { ThemeProvider } from "styled-components";
import { darkTheme, lightTheme, Pallet } from "./src/utils/styled";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import MyDrawer from "./src/navigation/Drawer";
import AuthStack from "./src/navigation/AuthStack";
import { RecoilRoot, useRecoilState } from "recoil";
import { useCookies } from "react-cookie";
import { isLogined } from "./src/atom";
import DataProvider from "./src/context/DataProvider";
import Entypo from "@expo/vector-icons/Entypo";
import * as SplashScreen from "expo-splash-screen";
import * as Font from "expo-font";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { getUserStored } from "./src/async";

SplashScreen.preventAutoHideAsync();

export default function App() {
  // 쿠키 확인 및 로그인 토큰
  const [isLogin, setIsLogin] = useRecoilState(isLogined);
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
        }
        // await new Promise((resolve) => setTimeout(resolve, 100));
      } catch (e) {
        console.warn(e);
      } finally {
        setAppIsReady(true);
      }
    }
    prepare();
    SplashScreen.hideAsync();
  }, [isLogin]);
  // const onLayoutRootView = useCallback(async () => {
  //   if (appIsReady) {
  //     await SplashScreen.hideAsync();
  //   }
  // }, [appIsReady]);

  // if (!appIsReady) {
  //   return null;
  // }

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
            {isLogin ? <MyDrawer /> : <AuthStack />}
            {/* <AuthStack /> */}
            {/* <MyDrawer /> */}
          </NavigationContainer>
        </ThemeProvider>
      </QueryClientProvider>
    </DataProvider>
  );
}
