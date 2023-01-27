import React, { useEffect, useState } from "react";
import { FlatList, Text, TouchableOpacity, View } from "react-native";
import styled from "styled-components/native";

//CSS
const Container = styled.ScrollView`
  background-color: ${(props) => props.theme.Bg0dp};
  display: flex;
  flex: 1;
`;
const Header = styled.View`
  align-items: center;
  margin-bottom: 10px;
`;
const ThumbnailPhoto = styled.Image`
  width: 100%;
  height: 235px;
  opacity: 0.5;
`;
const ArticleTitle = styled.Text`
  font-size: 26px;
  color: ${(props) => props.theme.Text0dp};
  font-weight: 300;
  margin-right: 30px;
`;

const SnsImage = styled.Image`
  height: 30px;
  width: 30px;
`;
const ProjectLogo = styled.Image`
  height: 20px;
  width: 20px;
  border-radius: 5px;
  margin-right: 5px;
`;
const ProjectText = styled.Text`
  font-size: 16px;
  font-weight: 700;
  color: ${(props) => props.theme.Text0dp};
`;
const DateText = styled.Text`
  font-size: 15px;
  font-weight: 500;
  color: ${(props) => props.theme.Text0dp};
`;
const Description = styled.Text`
  font-size: 13px;
  font-weight: 400;
  color: ${(props) => props.theme.Text0dp}; ;
`;

//MAIN
const DetailArticle = ({ navigation: { setOptions }, route: { params } }) => {
  //RETURN
  return (
    <Container>
      <Header>
        <ThumbnailPhoto source={{ uri: params.thumbnail }}></ThumbnailPhoto>
      </Header>
      <View
        style={{
          flexDirection: "column",
          // alignItems: "center",
          justifyContent: "space-between",
          paddingLeft: 20,
          paddingRight: 20,
        }}
      >
        <View
          style={{
            flexDirection: "row",
            width: 348,
            alignItems: "center",
            justifyContent: "space-between",
            marginBottom: 20,
          }}
        >
          <ArticleTitle>{params.title}</ArticleTitle>
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
        </View>
        <View
          style={{
            flexDirection: "row",
            alignItems: "center",
            marginBottom: 20,
          }}
        >
          <ProjectLogo source={{ uri: params.project.logoUrl }}></ProjectLogo>
          <ProjectText>{params.project.title}</ProjectText>
          <DateText>| {new Date(params.createdAt).toDateString()}</DateText>
          {/* <Text>| {new Date(params.createdAt).toDateString()}</Text> */}
        </View>
        <Description>{params.description}</Description>
      </View>
    </Container>
  );
};

export default DetailArticle;
