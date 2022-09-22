import React from "react";
import { useNavigation } from "@react-navigation/native";
import styled from "styled-components/native";
import { Text, TouchableOpacity } from "react-native";

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
    <TouchableOpacity>
      <Text>hi</Text>
      {/* <Container>
          <ProjectLogo source={{ uri: logo }}></ProjectLogo>
          <Title>{title}</Title>
          <Follower>Follower</Follower>
        </Container> */}
    </TouchableOpacity>
  );
};

export default SmallHCard;
