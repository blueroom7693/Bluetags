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
import {
  chainString,
  pastString,
  projectString,
  snstString,
  subscirbeProject,
  todayString,
  token,
} from "../atom";
import { IUser } from "../context/DataProvider";
import { getAllNft, getUser, IData } from "../axios";
import { IInfo } from "./Detail";
import MiddleVCard from "../components/card/MiddleVCard";

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

//CSS
const ContentsList = styled.FlatList`
  background-color: black;
  flex: 2;
`;

const Watchlist = () => {
  //THEME
  const isDark = useColorScheme() === "dark";
  console.log(isDark);
  //TOKEN
  const userToken = useRecoilValue(token);
  console.log(userToken);
  //SUBSCRIBE
  const [subscribeData, setSubscribeData] = useRecoilState(subscirbeProject);
  useEffect(() => {
    axiosInstance
      .get<IUser>(`/api/v1/user/favorite`, {
        headers: {
          Authorization: `Bearer ${userToken}`,
        },
      })
      .then((response) => setSubscribeData(Object.values(response.data)));
  }, [subscirbeProject]);

  //GETDATA
  const { isLoading: isLoadingNft, data: NftData } = useQuery<IInfo>(
    ["watchlistInfo"],
    getAllNft
  );
  //RECOILVALUE
  const chain = useRecoilValue(chainString);
  const project = useRecoilValue(projectString);
  const sns = useRecoilValue(snstString);
  const today = useRecoilValue(todayString);
  const past = useRecoilValue(pastString);
  const subscribe = useRecoilValue(subscirbeProject);
  //Filter
  const Watchlistfilter = (info: IData) => {
    let chainBool: boolean = true;
    let projectBool: boolean = true;
    let snsBool: boolean = true;
    let dateBool: boolean = true;
    let subscribeBool: boolean = true;
    const date = new Date(Date.parse(info.createdAt)).getTime();
    if (chain !== "") {
      chainBool = info.chain === chain.toUpperCase();
    }
    if (project !== "") {
      projectBool =
        info.nft ===
        project
          .toLowerCase()
          .replace(/ /gi, "")
          .replace(/-/gi, "")
          .replace(/`/gi, "");
    }
    if (sns !== "") {
      snsBool = info.SNS === sns;
    }
    if (today.getTime() - date < 0 || date - past.getTime() < 0) {
      dateBool = false;
    }
    if (subscribe.length !== 0) {
      subscribeBool = subscribe.includes(
        info.nft
          .toLowerCase()
          .replace(/ /gi, "")
          .replace(/-/gi, "")
          .replace(/`/gi, "")
      );
    }
    return chainBool && projectBool && snsBool && dateBool && subscribeBool;
  };
  //SETDATA
  const [data, setData] = useState<IData[]>();

  useEffect(() => {
    if (!isLoadingNft) {
      setData(Object.values(NftData.data));
    }
  }, [isLoadingNft, NftData]);

  useEffect(() => {
    if (!isLoadingNft) {
      setData(Object.values(NftData?.data).filter(Watchlistfilter));
    }
  }, [chain, project, sns, today, past, subscribe, NftData]);

  // console.log(subscribeData);
  // console.log(data);

  return (
    <SafeAreaView style={styles.container}>
      <HeaderScroller />
      <ContentsList
        data={data}
        keyExtractor={(item) => item._id}
        renderItem={({ item }) => (
          <MiddleVCard
            createdAt={item.createdAt}
            nft={item.nft}
            thumbnail={item.thumbnail}
            title={item.title}
            chain={item.chain}
            SNS={item.SNS}
            fullData={item}
          ></MiddleVCard>
        )}
      />

      <BottomFilter />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default Watchlist;
