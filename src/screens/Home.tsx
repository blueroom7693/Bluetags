import { SafeAreaView, StyleSheet } from "react-native";
import styled from "styled-components/native";
import { getAllNft } from "../axios";
import { useQuery } from "@tanstack/react-query";
import { useContext, useEffect, useState } from "react";
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
import BottomFilter from "../components/bottomsheet/BottomFilter";
import SquareCard from "../components/card/SquareCard";
import { AllNftNonChain } from "../AllNft";
import CircleCard from "../components/card/CircleCard";
import HeaderScroller from "../components/HeaderScroller";
import { DataContext } from "../context/DataProvider";

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

export interface IInfo {
  data: IData;
}

//CSS
const HomeContainer = styled.ScrollView`
  display: flex;
  flex: 1;
  flex-direction: column;
  background-color: black;
`;
const Sample = styled.Text`
  color: white;
`;
const NFTList = styled.FlatList`
  flex: 2;
  background-color: black;
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
  background-color: black;
`;
const HeaderTitle = styled.Text`
  font-size: 24px;
  color: white;
  margin-left: 30px;
  font-weight: 800;
`;
const SubHeaderTitle = styled.Text`
  font-size: 18px;
  color: grey;
  margin-left: 30px;
  margin-bottom: -8px;
  margin-top: 35px;
`;

// main
export default function Home() {
  //USERDATA
  const { user } = useContext(DataContext);
  // console.log(user);
  //AllNftNonChain
  const AllNft = Object.values(AllNftNonChain);
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
  //query
  const { isLoading: isLoadingNft, data: NftData } = useQuery<IInfo>(
    ["homeInfo"],
    getAllNft
  );
  //recoil value
  const chain = useRecoilValue(chainString);
  const project = useRecoilValue(projectString);
  const sns = useRecoilValue(snstString);
  const today = useRecoilValue(todayString);
  const past = useRecoilValue(pastString);
  const subscribe = useRecoilValue(subscirbeProject);
  //filter
  const filter = (info: IData) => {
    let chainBool: boolean = true;
    let projectBool: boolean = true;
    let snsBool: boolean = true;
    let dateBool: boolean = true;
    const date = new Date(Date.parse(info.createdAt)).getTime();
    if (chain !== "") {
      chainBool = info.chain === chain.toUpperCase();
    }

    if (sns !== "") {
      snsBool = info.SNS === sns;
    }
    if (today.getTime() - date < 0 || date - past.getTime() < 0) {
      dateBool = false;
    }

    return chainBool && snsBool && dateBool;
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
      setData(Object.values(NftData?.data).filter(filter));
    }
  }, [chain, project, sns, today, past, subscribe, NftData]);
  //RETURN
  return isLoadingNft ? null : (
    <SafeAreaView style={styles.container}>
      <HomeContainer>
        {/* HEADER */}
        {/* <HeaderScroller /> */}
        {/* RECOMMEDED ARTICLE FLATLIST */}
        <SubHeaderTitle>start with tags</SubHeaderTitle>
        <HeaderTitle>Recommended Article</HeaderTitle>
        <NFTList
          data={data}
          keyExtractor={(item) => item._id}
          horizontal={true}
          ItemSeparatorComponent={HListSeparator}
          contentContainerStyle={{ paddingHorizontal: 20 }}
          renderItem={({ item }) => (
            <SquareCard
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
        {/* RECOMMEDED PROJECT FLATLIST */}
        <SubHeaderTitle>for you</SubHeaderTitle>
        <HeaderTitle>Recommended Project</HeaderTitle>
        <NFTList
          data={AllNft}
          keyExtractor={(item) => item.title}
          horizontal={true}
          ItemSeparatorComponent={HListSeparator}
          contentContainerStyle={{ paddingHorizontal: 20 }}
          renderItem={({ item }) => (
            <CircleCard
              fullData={item}
              chain={item.chain}
              title={item.title}
              logo={item.logourl}
            ></CircleCard>
          )}
        />
        {/* RECOMMEDED ARTICLE FLATLIST */}
        <SubHeaderTitle>start with tags</SubHeaderTitle>
        <HeaderTitle>Recommended Article</HeaderTitle>
        <NFTList
          data={data}
          keyExtractor={(item) => item._id}
          horizontal={true}
          ItemSeparatorComponent={HListSeparator}
          contentContainerStyle={{ paddingHorizontal: 20 }}
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
      </HomeContainer>
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
