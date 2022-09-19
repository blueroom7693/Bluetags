import {
  FlatList,
  SafeAreaView,
  StatusBar,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import styled from "styled-components/native";
import { getAllNft, IData } from "../axios";
import { useQuery } from "@tanstack/react-query";
import { useState } from "react";
import { logUserOut } from "../async";
import { useRecoilState } from "recoil";
import { chainString, isLogined, projectString } from "../atom";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { useNavigation } from "@react-navigation/native";
import FeedData from "../components/FeedData";
import { Picker } from "@react-native-picker/picker";

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
  console.log(NftData);
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
          {/* picker */}

          {/* <NFTList
            data={NftData.data}
            keyExtractor={(item) => item._id}
            // renderItem={renderItem}
            renderItem={({ item }) => (
              <FeedData
                nftData={NftData}
                // _id={item._id}
                // createdAt={item.createdAt}
                // nft={item.nft}
                // thumbnail={item.thumbnail}
                // fullData={item}
              ></FeedData>
            )}
          /> */}
        </SafeAreaView>
      )}
    </HomeContainer>
  );
}
