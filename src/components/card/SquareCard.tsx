import React from "react";
import { useNavigation } from "@react-navigation/native";
import styled from "styled-components/native";
import { Text, TouchableOpacity } from "react-native";
import { AllNft } from "../../AllNft";

//TYPE
interface ISquareCard {
  fullData: any;
  nft: string;
  chain: string;
  title: string;
  thumbnail: string;
  description: string;
  createdAt: string;
  //   likes: [string];
  //   unlikes: [string];
  SNS: string;
  //   _id: string;
}
//CSS
const Container = styled.View`
  align-items: center;
  background-color: white;
  width: 180px;
  border-width: 1px;
  border-color: black;
  /* width: 200px; */
`;
const Thumbnail = styled.Image`
  width: 180px;
  height: 160px;
  border-radius: 5px;
  background-color: rgba(255, 255, 255, 0.5);
  border-radius: 30px;
`;
const ProjectLogo = styled.Image`
  width: 40px;
  height: 40px;
  /* position */
`;

//MAIN
const SquareCard: React.FC<ISquareCard> = ({
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
        {/* <Text>{fullData._id}</Text>
        <Text>{fullData.nft}</Text>
        <Text>{fullData.title}</Text> */}
        <Text>{createdAt}</Text>
        <ProjectLogo
          source={{ uri: AllNfts.eth[`${nft}`].logourl }}
        ></ProjectLogo>
        <Thumbnail source={{ uri: thumbnail }}></Thumbnail>
        <Text>#SAMPLE</Text>

        <Text>
          {title.slice(0, 30)}
          {title.length > 30 ? "..." : null}
        </Text>

        {/* <Text>{AllNfts.eth[`${nft}`].logourl}</Text> */}
        <Text>{SNS}</Text>
        {/* <Text>{nft}</Text> */}
      </Container>
    </TouchableOpacity>
  );
};

export default SquareCard;
