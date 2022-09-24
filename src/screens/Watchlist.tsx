import { useEffect, useState } from "react";
import {
  FlatList,
  Text,
  TouchableOpacity,
  useColorScheme,
  View,
  Image,
  ViewBase,
  SafeAreaView,
  StyleSheet,
} from "react-native";
import styled from "styled-components/native";
import HeaderScroller from "../components/HeaderScroller";
import BottomFilter from "../components/bottomsheet/BottomFilter";
import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import { axiosInstance } from "../axiosInstance";
import { useRecoilState, useRecoilValue } from "recoil";
import { subscirbeProject, token } from "../atom";
import { IUser } from "../context/DataProvider";
import { getUser } from "../axios";

// const BgContainer = styled.View<{ isDark: boolean }>`
//   flex: 1;
//   align-items: center;
//   background-color: ${(props) =>
//     props.isDark ? props.theme.BLACK_COLOR : props.theme.WHITE};

//   margin-bottom: 80px;
// `;
// const HeaderContainer = styled.View<{ isDark: boolean }>`
//   /* flex: 1; */
//   background-color: ${(props) =>
//     props.isDark ? props.theme.BLACK_COLOR : "white"};
//   width: 100%;
//   height: 15%;
//   flex-direction: row;
//   background-color: #070707;
//   margin-bottom: 40px;
// `;

const Watchlist = () => {
  //SUBSCRIBE
  const [subscribeData, setSubscribeData] = useRecoilState(subscirbeProject);
  //THEME
  const isDark = useColorScheme() === "dark";
  console.log(isDark);
  //TOKEN
  const userToken = useRecoilValue(token);

  //QUERY
  // const { isLoading: isLoadingNft, data: NftData } = useQuery(
  //   ["homeInfo"],
  //   getAllNft
  // );

  //AXIOS
  // axiosInstance
  //   .get<IUser>(`/api/v1/user/favorite`, {
  //     headers: {
  //       Authorization: `Bearer ${userToken["token"]}`,
  //     },
  //   })
  //   .then((response) => setSubscribeData(Object.values(response.data)));
  // console.log(subscribeData);
  // console.log(userToken);
  // useEffect(() => {
  //   const DATA = getUser(userToken);
  //   console.log(DATA);
  // }, []);

  return (
    <SafeAreaView style={styles.container}>
      <HeaderScroller />
      <BottomFilter />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    fontSize: 50,
  },
});

export default Watchlist;
