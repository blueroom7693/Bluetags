import React from "react";
import { useNavigation } from "@react-navigation/native";
import styled from "styled-components/native";
import { Text, TouchableOpacity } from "react-native";
import { AllNft } from "../../AllNft";
import { color } from "react-native-reanimated";

//TYPE
interface ISquareCard {
  fullData: any;
  nft: string;
  chain: string;
  title: string;
  thumbnail: string;
  description: string;
  createdAt: string;
  SNS: string;
}
//CSS
const Container = styled.View`
  background-color: black;
  width: 190px;
  border-width: 1px;
  text-align: left;
  justify-content: center;
  font-size: 40px;
  color: black;
  margin-top: 20px;
`;
const TimeContaier = styled.View`
  flex-direction: row;
  justify-content: flex-end;
`;
const Thumbnail = styled.Image`
  width: 190px;
  height: 160px;
  border-radius: 5px;
  background-color: rgba(255, 255, 255, 0.5);
  border-radius: 20px;
`;
const ProjectLogo = styled.Image`
  width: 40px;
  height: 40px;
  border-radius: 30px;
  z-index: 2;
  position: absolute;
  left: 5px;
  top: 30px;
`;
const SnsLogo = styled.Image`
  width: 20px;
  height: 20px;
  margin-left: 10px;
`;
const CreatedAt = styled.Text`
  font-size: 12px;
  margin-right: 0px;
  color: white;
`;
const BlueTags = styled.Text`
  font-size: 12px;
  color: white;
`;
const ArticleTitle = styled.Text`
  font-size: 12px;
  color: white;
`;

//MAIN
const NFTproject: React.FC<ISquareCard> = ({
  fullData,
  logourl,
  chain,
  title,
}) => {
  //NAV
  const navigation = useNavigation();
  const goToDetail = () => {
    //@ts-ignore
    navigation.navigate("Stack", {
      screen: "DetailArticle",
      params: {
        ...fullData,
      },
    });
  };
  //ALLDATA
  const AllNfts = AllNft;
  return (
    <TouchableOpacity onPress={goToDetail}>
      <Container>
        <Text>hi</Text>
      </Container>
    </TouchableOpacity>
  );
};

export default NFTproject;
