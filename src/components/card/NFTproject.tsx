import React from "react";
import { useNavigation } from "@react-navigation/native";
import styled from "styled-components/native";
import { Text, TouchableOpacity, View } from "react-native";
import { AllNft } from "../../AllNft";
import { color } from "react-native-reanimated";
import { AntDesign } from "@expo/vector-icons";

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
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
`;
const ProjectLogo = styled.Image`
  width: 60px;
  height: 60px;
  border-radius: 10px;
  margin-right: 10px;
`;
const ProjectName = styled.Text`
  font-size: 18px;
  color: white;
`;
const ProjectBy = styled.Text`
  font-size: 12px;
  color: #c6c6c6;
`;
const SubscribeBtn = styled.TouchableOpacity`
  justify-content: space-between;
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
      screen: "Detail",
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
        <View style={{ flexDirection: "row" }}>
          <ProjectLogo source={{ uri: logourl }}></ProjectLogo>
          <View>
            <ProjectName>{title}</ProjectName>
            <ProjectBy>by sangwan</ProjectBy>
          </View>
        </View>
        <SubscribeBtn>
          <AntDesign name="staro" size={24} color="white" />
        </SubscribeBtn>
      </Container>
    </TouchableOpacity>
  );
};

export default NFTproject;
