import React from "react";
import { useNavigation } from "@react-navigation/native";
import styled from "styled-components/native";
import { Text, TouchableOpacity, View } from "react-native";
import { AntDesign } from "@expo/vector-icons";
//TYPE
interface ICircleProject {
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
const Title = styled.Text`
  color: white;
  font-size: 12px;
`;
const Container = styled.TouchableOpacity`
  background-color: black;
  justify-content: center;
  align-items: center;
  flex-direction: row;
  flex: 1;
  padding-left: 50px;
  padding-right: 50px;
  margin-bottom: 10px;
`;
const TextContainer = styled.View`
  width: 100%;
`;
const ProjectLogo = styled.Image`
  width: 50px;
  height: 50px;
  border-radius: 10px;
  margin-right: 10px;
`;
const BlueTags = styled.Text`
  color: gray;
  font-size: 14px;
`;

const SmallHCard: React.FC<ICircleProject> = ({
  fullData,
  nft,
  chain,
  title,
  thumbnail,
  description,
  createdAt,
  SNS,
}) => {
  //NAV
  const navigation = useNavigation();
  // const goToDetail = () => {
  //   //@ts-ignore
  //   navigation.navigate("Stack", {
  //     screen: "Detail",
  //     params: {
  //       ...fullData,
  //     },
  //   });
  // };
  return (
    // <TouchableOpacity>
    <Container>
      <ProjectLogo source={{ uri: thumbnail }}></ProjectLogo>
      <TextContainer>
        <BlueTags>#SAMPLE #SAMPLE</BlueTags>
        <Title>{title}</Title>
      </TextContainer>
      <AntDesign name="staro" size={24} color="white" />
      {/* <Follower>Follower</Follower> */}
    </Container>
    // </TouchableOpacity>
  );
};

export default SmallHCard;
