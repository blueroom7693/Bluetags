import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { useQuery } from "@tanstack/react-query";
import React, { useEffect, useState } from "react";
import { FlatList, Text, TouchableOpacity } from "react-native";
import styled from "styled-components/native";
import { getNftInfo } from "../axios";
import SmallHCard from "../components/card/SmallHCard";
import SquareCard from "../components/card/SquareCard";

//INTERFACE
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
//CSS
const Container = styled.FlatList`
  background-color: black;
  display: flex;
  flex: 1;
`;
// const Container = styled.ScrollView`

//   flex-direction: column;
//   background-color: #000000;
// `;
const Header = styled.View`
  align-items: center;
  margin: 40px;
`;
const ProjectLogo = styled.Image`
  height: 220px;
  width: 220px;
  border-radius: 200px;
`;
const ProjectName = styled.Text`
  font-size: 24px;
  color: white;
  margin-top: 20px;
  font-weight: 800;
`;
const SnsContaier = styled.View`
  flex-direction: row;
  justify-content: center;
`;
const SnsImage = styled.Image`
  height: 40px;
  width: 40px;
  border-radius: 20px;
  margin: 10px;
`;
//MAIN
const Detail = ({ navigation: { setOptions }, route: { params } }) => {
  //GETDATA
  const search = params.title.trim().toLowerCase();
  const { isLoading: isLoadingNft, data: searchedData } = useQuery<IInfo>(
    ["searchedData"],
    () => getNftInfo(search)
  );
  //SETDATA
  const [data, setData] = useState<IData[]>();
  useEffect(() => {
    if (!isLoadingNft) {
      setData(Object.values(searchedData?.data));
    }
  }, [isLoadingNft, searchedData]);
  //RETURN
  return (
    <Container
      ListHeaderComponent={
        <>
          {/* HEADER */}
          <Header>
            <ProjectLogo source={{ uri: params.logourl }}></ProjectLogo>
            <ProjectName>{params.title}</ProjectName>
          </Header>
          {/* SNS */}
          <SnsContaier>
            <TouchableOpacity>
              <SnsImage
                source={{
                  uri: "https://storage.googleapis.com/opensea-static/Logomark/Logomark-White.png",
                }}
              />
            </TouchableOpacity>
            <TouchableOpacity>
              <SnsImage
                source={{
                  uri: "https://e1.pngegg.com/pngimages/916/717/png-clipart-clay-os-6-a-macos-icon-discord-round-blue-icon.png",
                }}
              />
            </TouchableOpacity>
            <TouchableOpacity>
              <SnsImage
                source={{
                  uri: "https://assets.stickpng.com/images/5a2fe3efcc45e43754640848.png",
                }}
              />
            </TouchableOpacity>
            <TouchableOpacity>
              <SnsImage
                source={{
                  uri: "https://seeklogo.com/images/F/facebook-icon-circle-logo-09F32F61FF-seeklogo.com.png",
                }}
              />
            </TouchableOpacity>
            <TouchableOpacity>
              <SnsImage
                source={{
                  uri: "https://toppng.com/uploads/preview/instagram-logo-circle-11549679754rhbcorxntv.png",
                }}
              />
            </TouchableOpacity>
            <TouchableOpacity>
              <SnsImage
                source={{
                  uri: "https://etherscan.io/images/brandassets/etherscan-logo-circle.png",
                }}
              />
            </TouchableOpacity>
          </SnsContaier>
        </>
      }
      data={data}
      keyExtractor={(item) => item._id}
      // contentContainerStyle={{ paddingHorizontal: 20 }}
      renderItem={({ item }) => (
        <SmallHCard
          createdAt={item.createdAt}
          nft={item.nft}
          thumbnail={item.thumbnail}
          title={item.title}
          chain={item.chain}
          SNS={item.SNS}
          fullData={item}
        ></SmallHCard>
      )}
    />
  );
};

export default Detail;
