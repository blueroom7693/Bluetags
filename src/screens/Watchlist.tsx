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
  allSubscirbeProject,
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
import { AllNftNonChain } from "../AllNft";
import CircleCard from "../components/card/CircleCard";
import SmallCircleCard from "../components/card/SmallCircleCard";

//CSS
const ContentsList = styled.FlatList`
  background-color: black;
  flex: 2;
`;

const ProjectScroller = styled.FlatList`
  background-color: black;
  flex: 0.23;
  border-color: #353535;
  border-bottom-width: 1px;
`;
const HListSeparator = styled.View`
  width: 20px;
  background-color: black;
`;

//CSS FIRST COMPONENTS
const AllProject = styled.TouchableOpacity`
  width: 50px;
  height: 50px;
  border-radius: 70px;
  background-color: #ffffff;
  justify-content: center;
  align-items: center;
  margin-top: 20px;
  margin-right: 20px;
`;

const AllProjectText = styled.Text`
  font-size: 20px;
`;

const Watchlist = () => {
  //THEME
  const isDark = useColorScheme() === "dark";
  //TOKEN
  const userToken = useRecoilValue(token);
  //
  const AllNftNonChains = AllNftNonChain;
  //GETDATA
  const { isLoading: isLoadingNft, data: NftData } = useQuery<IInfo>(
    ["watchlistInfo"],
    getAllNft
  );
  //SUBSCRIBE
  const [subscribeData, setSubscribeData] = useRecoilState(allSubscirbeProject);
  useEffect(() => {
    axiosInstance
      .get<IUser>(`/api/v1/user/favorite`, {
        headers: {
          Authorization: `Bearer ${userToken}`,
        },
      })
      .then((response) => setSubscribeData(Object.values(response.data)));
  }, [allSubscirbeProject]);
  console.log(subscribeData);

  //RECOILVALUE
  const chain = useRecoilValue(chainString);
  const [project, setProject] = useRecoilState(projectString);
  const sns = useRecoilValue(snstString);
  const today = useRecoilValue(todayString);
  const past = useRecoilValue(pastString);
  const subscribe = useRecoilValue(allSubscirbeProject);
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

  return isLoadingNft ? null : (
    <SafeAreaView style={styles.container}>
      {/* <HeaderScroller /> */}
      <ProjectScroller
        data={subscribeData}
        keyExtractor={(item) => item}
        horizontal={true}
        ItemSeparatorComponent={HListSeparator}
        contentContainerStyle={{ paddingHorizontal: 20 }}
        ListHeaderComponent={
          <AllProject>
            <AllProjectText
              onPress={() => {
                setProject("");
              }}
            >
              All
            </AllProjectText>
          </AllProject>
        }
        renderItem={({ item }) => (
          <SmallCircleCard title={item}></SmallCircleCard>
        )}
      />
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
    justifyContent: "center",
    alignItems: "center",
  },
});

export default Watchlist;
