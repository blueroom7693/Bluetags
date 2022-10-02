import {
  Image,
  ImageBackground,
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  View,
} from "react-native";
import styled from "styled-components/native";
import { Dimensions, FlatList } from "react-native";
import Swiper from "react-native-swiper";
import icons from "../../icons";
import { WHITE } from "../colors";
import { Ionicons, AntDesign } from "@expo/vector-icons";
import axios from "axios";
import { isLogined } from "../atom";
import { useRecoilState } from "recoil";
import { AllNft, AllNftNonChain } from "../AllNft";
import NFTproject from "../components/card/NFTproject";

console.log(Object.values(AllNftNonChain));
const NFT = () => {
  return (
    <SafeAreaView>
      <FlatList
        data={Object.values(AllNftNonChain)}
        keyExtractor={(item) => item.title}
        renderItem={({ item }) => (
          <NFTproject
            fullData={item}
            chain={item.chain}
            title={item.title}
            logourl={item.logourl}
          />
        )}
      />
    </SafeAreaView>
  );
};
export default NFT;
