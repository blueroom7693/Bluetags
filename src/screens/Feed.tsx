import {
  Button,
  FlatList,
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import styled from "styled-components/native";
import { getAllNft } from "../axios";
import { useQuery } from "@tanstack/react-query";
import { useCallback, useEffect, useMemo, useRef, useState } from "react";
import { logUserOut } from "../async";
import { useRecoilState, useRecoilValue } from "recoil";
import {
  chainString,
  isBottomDetail,
  isBottomFilter,
  isLogined,
  pastString,
  projectString,
  snstString,
  subscirbeProject,
  todayString,
} from "../atom";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { useNavigation } from "@react-navigation/native";
import FeedData from "../components/FeedData";
import { Picker } from "@react-native-picker/picker";
import BottomSheet from "@gorhom/bottom-sheet";
import BottomFilter from "../components/bottomsheet/BottomFilter";
import { BLACK_COLOR } from "../colors";
import { WINDOW_HEIGHT, WINDOW_WIDTH } from "@gorhom/bottom-sheet";
import SquareCard from "../components/card/SquareCard";

//INTERFACE
interface HMediaProps {
  _id: string;
  createdAt: string;
  nft: string;
  thumbnail: string;
  fullData: any;
}
interface IProps {
  nftData: IInfo;
}
interface IData {
  _id: string;
  chain: string;
  nft: string;
  title: string;
  thumbnail: string;
  description: string;
  createdAt: string;
  likes: [string];
  unlikes: [string];
  SNS: string;
}

////////////////////
export interface IInfo {
  data: IData;
}

const HomeContainer = styled.View`
  display: flex;
  flex: 1;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: white;
  width: 100%;
  /* height: auto;
  width: 100vw; */
  /* font-family: "Open Sans";
  padding-top: 200px; */
`;
const Sample = styled.Text`
  color: white;
`;
const NFTList = styled.FlatList`
  flex: 2;
  background-color: white;
`;
const HeaderScroll = styled.ScrollView`
  flex-direction: row;
  flex: 0.1;
  background-color: black;
  /* height: WINDOW_HEIGHT/4; */
`;
const Filterbox = styled.TouchableOpacity`
  margin-left: 15px;
  border-width: 2px;
  border-radius: 10px;
  border-color: white;
  background-color: grey;
  padding-left: 10px;
  padding-right: 10px;
`;
const FilterText = styled.Text`
  color: white;
  font-size: 12px;
`;
export const HListSeparator = styled.View`
  width: 20px;
`;
const HeaderTitle = styled.Text`
  font-size: 36px;
  color: white;
`;

// main
export default function Feed() {
  //BOTTOM FILTER
  const [bottomFilter, setBottomFilter] = useRecoilState(isBottomFilter);
  const openFilter = () => {
    setBottomFilter(true);
  };
  //BOTTOM DETAIL
  const [bottomDetail, setBottomDetail] = useRecoilState(isBottomDetail);
  const openDetail = () => {
    setBottomDetail(true);
  };
  //logout
  const [isLogin, setIsLogin] = useRecoilState(isLogined);
  const signOut = async () => {
    try {
      await AsyncStorage.removeItem("sangwan");
      setIsLogin(false);
    } catch (e) {}
  };
  //query
  const { isLoading: isLoadingNft, data: NftData } = useQuery<IInfo>(
    ["homeInfo"],
    getAllNft
  );

  //////////////////////////////////////////////////////////////////////////////////////////

  //recoil value
  const chain = useRecoilValue(chainString);
  const project = useRecoilValue(projectString);
  const sns = useRecoilValue(snstString);
  const today = useRecoilValue(todayString);
  const past = useRecoilValue(pastString);
  const subscribe = useRecoilValue(subscirbeProject);
  //recoil state

  //filter
  const filter = (info: IData) => {
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
          .replaceAll(" ", "")
          .replaceAll("-", "")
          .replaceAll("`", "")
          .toLowerCase();
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
          .replaceAll(" ", "")
          .replaceAll("-", "")
          .replaceAll("`", "")
          .toLowerCase()
      );
    }
    return chainBool && projectBool && snsBool && dateBool && subscribeBool;
  };
  //SETDATA
  // const [data, setData] = useState<IData[]>(Object.values(NftData?.data));
  const [data, setData] = useState<IData[]>();

  useEffect(() => {
    if (!isLoadingNft) {
      setData(Object.values(NftData.data));
    }
  }, [isLoadingNft, NftData]);

  useEffect(() => {
    if (!isLoadingNft) {
      setData(Object.values(NftData?.data).filter(filter));
    }
  }, [chain, project, sns, today, past, subscribe, NftData]);
  // console.log(data[1]._id);
  //////////////////////////////////////////////////////////////////////////////////////////
  //RETURN
  return isLoadingNft ? null : (
    <SafeAreaView style={styles.container}>
      <HeaderScroll horizontal={true} showsHorizontalScrollIndicator={false}>
        <Filterbox onPress={openFilter}>
          <FilterText>Filter</FilterText>
        </Filterbox>
        <Filterbox onPress={openDetail}>
          <FilterText>Detail</FilterText>
        </Filterbox>
        <Filterbox>
          <FilterText>#event</FilterText>
        </Filterbox>
        <Filterbox>
          <FilterText>#announcement</FilterText>
        </Filterbox>
        <Filterbox>
          <FilterText>#voting</FilterText>
        </Filterbox>
        <Filterbox>
          <FilterText>#minting</FilterText>
        </Filterbox>
        <Filterbox>
          <FilterText>#off-line</FilterText>
        </Filterbox>
        <Filterbox>
          <FilterText>#proposal</FilterText>
        </Filterbox>
      </HeaderScroll>
      {/* <TouchableOpacity onPress={signOut}>
        <Text>sign out</Text>
      </TouchableOpacity> */}
      {/* FLATLIST */}
      {/* <NFTList
        data={NftData.data}
        keyExtractor={(item) => item._id}
        // keyExtractor={(item) => {
        //   console.log(item._id);
        // }}
        // renderItem={renderItem}
        renderItem={({ item }) => (
          <FeedData
            // nftData={NftData}
            nftData={NftData}
            _id={item._id}
            createdAt={item.createdAt}
            nft={item.nft}
            thumbnail={item.thumbnail}
            fullData={item}
          ></FeedData>
        )}
      /> */}
      <HeaderTitle>Recommended Project</HeaderTitle>

      <HeaderTitle>Recommended Article</HeaderTitle>
      <NFTList
        data={data}
        keyExtractor={(item) => item._id}
        horizontal={true}
        ItemSeparatorComponent={HListSeparator}
        renderItem={({ item }) => (
          <SquareCard
            // _id={item._id}
            createdAt={item.createdAt}
            nft={item.nft}
            thumbnail={item.thumbnail}
            title={item.title}
            chain={item.chain}
            SNS={item.SNS}
            fullData={item}
          ></SquareCard>
        )}
      />
      {/* Bottom Sheet */}
      <Text>hi</Text>
      <BottomFilter />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    fontSize: 50,
  },
  text: {
    fontSize: 25,
    fontWeight: "500",
    color: "white",
  },
  picker: {
    backgroundColor: "grey",
    alignItems: "center",
    borderWidth: 5,
    borderColor: "black",
  },
});
