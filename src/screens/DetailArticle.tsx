import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { useQuery } from "@tanstack/react-query";
import React, { useEffect, useState } from "react";
import { FlatList, Text, TouchableOpacity } from "react-native";
import styled from "styled-components/native";
import { AllNft } from "../AllNft";
import { getNftInfo } from "../axios";
import SmallHCard from "../components/card/SmallHCard";
import SquareCard from "../components/card/SquareCard";

//CSS
const Container = styled.ScrollView`
  background-color: ${(props) => props.theme.Bg0dp};
  display: flex;
  flex: 1;
  padding: 20px;
`;
const Header = styled.View`
  align-items: center;
  margin-bottom: 10px;
`;
const SubHeader = styled.View`
  align-items: flex-end;
  margin-bottom: 20px;
`;
const ThumbnailPhoto = styled.Image`
  height: 220px;
  width: 100%;
  border-radius: 20px;
`;
const ArticleTitle = styled.Text`
  font-size: 14px;
  color: ${(props) => props.theme.Text0dp};
  margin-top: 20px;
  font-weight: 800;
`;
const WrittenBy = styled.Text`
  font-size: 14px;
  color: ${(props) => props.theme.Text1dp}; ;
`;
const Description = styled.Text`
  font-size: 12px;
  color: ${(props) => props.theme.Text0dp}; ;
`;
const SubContaier = styled.View`
  flex-direction: row;
  align-items: center;
  margin-bottom: 5px;
`;
const SnsImage = styled.Image`
  height: 20px;
  width: 20px;
  margin-right: 10px;
`;
const ProjectLogo = styled.Image`
  height: 20px;
  width: 20px;
  margin-left: 10px;
  border-radius: 15px;
`;
//MAIN
const DetailArticle = ({ navigation: { setOptions }, route: { params } }) => {
  //RETURN
  return (
    <Container>
      {/* HEADER */}
      <Header>
        <ThumbnailPhoto source={{ uri: params.thumbnail }}></ThumbnailPhoto>
        <ArticleTitle>{params.title}</ArticleTitle>
      </Header>
      <SubHeader>
        <SubContaier>
          <WrittenBy>Written by</WrittenBy>
          <ProjectLogo
            source={{ uri: AllNft.eth[`${params.nft}`].logourl }}
          ></ProjectLogo>
        </SubContaier>
        <SubContaier>
          {params.SNS === "discord" ? (
            <SnsImage
              source={{
                uri: "https://www.freepnglogos.com/uploads/discord-logo-png/discord-logo-vector-download-0.png",
              }}
            ></SnsImage>
          ) : (
            <SnsImage
              source={{
                uri: "https://www.iconpacks.net/icons/2/free-twitter-logo-icon-2429-thumb.png",
              }}
            ></SnsImage>
          )}

          <Description>{params.createdAt}</Description>
        </SubContaier>
      </SubHeader>
      <Description>{params.description}</Description>
      {/* SNS */}
    </Container>
  );
};

export default DetailArticle;
