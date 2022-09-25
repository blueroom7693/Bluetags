import {
  Image,
  ImageBackground,
  ScrollView,
  StyleSheet,
  Text,
  View,
} from "react-native";
import styled from "styled-components";
import { Dimensions, FlatList } from "react-native";
import Swiper from "react-native-swiper";
import icons from "../../icons";
import { WHITE } from "../colors";
import { Ionicons, AntDesign } from "@expo/vector-icons";
import axios from "axios";
import { isLogined } from "../atom";
import { useRecoilState } from "recoil";

const { height: SCREEN_HEIGHT } = Dimensions.get("window");

const Container = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
`;
const ImageContainer = styled.Image`
  width: 100%;
  height: 100%;
  opacity: 0.5;
  z-index: -1;
  position: absolute;
`;
const ImageText = styled.Text`
  color: white;
  font-size: 30px;
  font-weight: bold;
  text-align: center;
  opacity: 0.8;
`;
const OverallContainer = styled.View`
  flex: 1;
  color: white;
`;
const NFTContainer = styled.View`
  flex: 1;
  flex-direction: row;
`;
const JustifyView = styled.View`
  flex: 1;
  flex-direction: row;
  justify-content: space-between;
`;
const NFTList = styled.FlatList`
  flex: 2;
`;
const Poster = styled.Image`
  height: 60px;
  width: 60px;
  border-radius: 60px;
  margin: 10px;
`;
const IconContainer = styled.View`
  flex-direction: row;
`;

const Home = () => {
  axios
    .get(`https://blueroom-info.herokuapp.com/api/v1/nft/all`)
    .then(function (response) {
      // handle success
      // console.log(response.data[1].thumbnail);
    });
  // const [user, setUser] = useRecoilState(isLogined);
  // setUser(true);
  // console.log(user);

  /////////////////////////////////////////////////////////

  const Item = ({ title, poster, by, follower, isFollowed }) => (
    <NFTContainer>
      <Poster source={poster}></Poster>
      <JustifyView>
        <View>
          <Text style={{ color: WHITE, fontSize: 20, marginTop: 10 }}>
            {title}
          </Text>
          <Text style={{ color: "grey", fontSize: 12, marginTop: 5 }}>
            {by}
          </Text>
        </View>
        <View style={{ justifyContent: "center", alignItems: "flex-end" }}>
          <Text
            style={{
              color: WHITE,
              fontSize: 18,
              marginTop: 10,
              textAlign: "right",
            }}
          >
            {follower}
          </Text>
          <IconContainer>
            <Ionicons
              name="heart"
              size={24}
              color={isFollowed ? "tomato" : "white"}
              style={{ marginLeft: 3 }}
            />
          </IconContainer>
        </View>
      </JustifyView>
    </NFTContainer>
  );
  const DATA = [
    {
      id: "8",
      title: "Bored Ape Yacht Club",
      poster: {
        uri: "https://lh3.googleusercontent.com/Ju9CkWtV-1Okvf45wo8UctR-M9He2PjILP0oOvxE89AyiPPGtrR3gysu1Zgy0hjd2xKIgjJJtWIc0ybj4Vd7wv8t3pxDGHoJBzDB=s168",
      },
      by: "YugaLabs",
      follower: "167.8k",
      isFollowed: true,
    },
    {
      id: "7",
      title: "Azuki",
      poster: {
        uri: "https://lh3.googleusercontent.com/H8jOCJuQokNqGBpkBN5wk1oZwO7LM8bNnrHCaekV2nKjnCqw6UB5oaH8XyNeBDj6bA_n1mjejzhFQUP3O1NfjFLHr3FOaeHcTOOT=s168",
      },
      by: "TeamAzuki",
      follower: "106.2k",
      isFollowed: true,
    },
    {
      id: "3",
      title: "Doodles",
      poster: {
        uri: "https://lh3.googleusercontent.com/7B0qai02OdHA8P_EOVK672qUliyjQdQDGNrACxs7WnTgZAkJa_wWURnIFKeOh5VTf8cfTqW3wQpozGedaC9mteKphEOtztls02RlWQ=s168",
      },
      by: "Doodles_LLC",
      follower: "59.8k",
      isFollowed: true,
    },

    {
      id: "2",
      title: "Cool Cats NFT",
      poster: {
        uri: "https://lh3.googleusercontent.com/LIov33kogXOK4XZd2ESj29sqm_Hww5JSdO7AFn5wjt8xgnJJ0UpNV9yITqxra3s_LMEW1AnnrgOVB_hDpjJRA1uF4skI5Sdi_9rULi8=s168",
      },
      by: "CoolCatsContract",
      follower: "98.5k",
      isFollowed: false,
    },

    {
      id: "4",
      title: "Moonbirds",
      poster: {
        uri: "https://lh3.googleusercontent.com/H-eyNE1MwL5ohL-tCfn_Xa1Sl9M9B4612tLYeUlQubzt4ewhr4huJIR5OLuyO3Z5PpJFSwdm7rq-TikAh7f5eUw338A2cy6HRH75=s168",
      },
      by: "PROOF_XYZ",
      follower: "21.2k",
      isFollowed: false,
    },
    {
      id: "5",
      title: "Decentraland",
      poster: {
        uri: "https://lh3.googleusercontent.com/5KIxEGmnAiL5psnMCSLPlfSxDxfRSk4sTQRSyhPdgnu70nGb2YsuVxTmO2iKEkOZOfq476Bl1hAu6aJIKjs1myY=s168",
      },
      by: "eodcl",
      follower: "14.3k",
      isFollowed: false,
    },
    {
      id: "6",
      title: "CLONE X",
      poster: {
        uri: "https://lh3.googleusercontent.com/XN0XuD8Uh3jyRWNtPTFeXJg_ht8m5ofDx6aHklOiy4amhFuWUa0JaR6It49AH8tlnYS386Q0TW_-Lmedn0UET_ko1a3CbJGeu5iHMg=s168",
      },
      by: "RTFKTCLONEXTM",
      follower: "245k",
      isFollowed: false,
    },
    {
      id: "1",
      title: "CryptoPunks",
      poster: {
        uri: "https://lh3.googleusercontent.com/BdxvLseXcfl57BiuQcQYdJ64v-aI8din7WPk0Pgo3qQFhAUH-B6i-dCqqc_mCkRIzULmwzwecnohLhrcH8A9mpWIZqA7ygc52Sr81hE=s168",
      },
      by: "Yuga Labs",
      follower: "68.6k",
      isFollowed: false,
    },
  ];
  /////////////////////////////////////////////
  const renderItem = ({ item }) => (
    <Item
      title={item.title}
      poster={item.poster}
      by={item.by}
      follower={item.follower}
      isFollowed={item.isFollowed}
    />
  );
  return (
    <OverallContainer>
      <Text
        style={{
          fontSize: 25,
          color: "white",
          marginBottom: 20,
          marginLeft: 10,
          fontWeight: "700",
        }}
      >
        TOP COLLECTIONS
      </Text>

      <NFTList
        data={DATA}
        renderItem={renderItem}
        keyExtractor={(item) => item.id}
        contentContainerStyle={{ paddingHorizontal: 15 }}
      />

      <View style={{ marginBottom: 70 }}></View>
    </OverallContainer>
  );
};
export default Home;
