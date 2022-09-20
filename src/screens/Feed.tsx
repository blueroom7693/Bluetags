import {
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
import { chainString, isLogined, projectString, snstString } from "../atom";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { useNavigation } from "@react-navigation/native";
import FeedData from "../components/FeedData";
import { Picker } from "@react-native-picker/picker";
import BottomSheet from "@gorhom/bottom-sheet";
import BottomFilter from "../components/bottomsheet/BottomFilter";

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
  /* height: auto;
  width: 100vw; */
  /* font-family: "Open Sans";
  padding-top: 200px; */
`;
const NFTList = styled.FlatList`
  flex: 2;
  background-color: white;
`;

export interface IInfo {
  data: IData;
}

// main
export default function Feed() {
  //filter
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
  // console.log(NftData.data[1].nft);
  // console.log(NftData.data[1]._id);s
  //RETURN
  return (
    <HomeContainer>
      {isLoadingNft ? null : (
        <SafeAreaView>
          <TouchableOpacity onPress={signOut}>
            <Text>sign out</Text>
          </TouchableOpacity>

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

          <View></View>
          {/* Bottom Sheet */}
          <BottomFilter />
        </SafeAreaView>
      )}
    </HomeContainer>
  );
}
