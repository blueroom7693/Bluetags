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
import { getAllNft, IData } from "../axios";
import { useQuery } from "@tanstack/react-query";
import { useCallback, useMemo, useRef, useState } from "react";
import { logUserOut } from "../async";
import { useRecoilState } from "recoil";
import {
  chainString,
  isBottomDetail,
  isBottomFilter,
  isLogined,
  projectString,
  snstString,
} from "../atom";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { useNavigation } from "@react-navigation/native";
import FeedData from "../components/FeedData";
import { Picker } from "@react-native-picker/picker";
import BottomSheet from "@gorhom/bottom-sheet";
import BottomFilter from "../components/bottomsheet/BottomFilter";
import { BLACK_COLOR } from "../colors";
import { WINDOW_HEIGHT, WINDOW_WIDTH } from "@gorhom/bottom-sheet";

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
  //selector
  const [chain, setChain] = useRecoilState(chainString);
  const [project, setProject] = useRecoilState(projectString);
  const [sns, setSns] = useRecoilState(snstString);
  console.log(chain);
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

      {/* picker */}
      <Picker
        selectedValue={chain}
        onValueChange={(itemValue, itemIndex) => setChain(itemValue)}
      >
        <Picker.Item label="ALL" value="" />
        <Picker.Item label="ETH" value="ETH" />
        <Picker.Item label="SOL" value="SOL" />
        <Picker.Item label="KLAY" value="KLAY" />
      </Picker>
      <Picker
        selectedValue={sns}
        onValueChange={(itemValue, itemIndex) => setSns(itemValue)}
      >
        <Picker.Item label="ALL" value="" />
        <Picker.Item label="twitter" value="twitter" />
        <Picker.Item label="discord" value="discord" />
      </Picker>
      {/* picker */}

      <NFTList
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
            // _id={item._id}
            // createdAt={item.createdAt}
            // nft={item.nft}
            // thumbnail={item.thumbnail}
            // fullData={item}
          ></FeedData>
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
});
