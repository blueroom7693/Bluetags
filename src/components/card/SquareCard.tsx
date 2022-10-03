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
  SNS: string;
}
//CSS
const Container = styled.View`
  background-color: ${(props) => props.theme.Bg0dp};
  width: 190px;
  text-align: left;
  justify-content: center;
  font-size: 40px;
  color: ${(props) => props.theme.Bg0dp};
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
  color: ${(props) => props.theme.Text0dp};
`;
const BlueTags = styled.Text`
  font-size: 12px;
  color: ${(props) => props.theme.Text0dp};
`;
const ArticleTitle = styled.Text`
  font-size: 12px;
  color: ${(props) => props.theme.Text0dp};
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
        <TimeContaier>
          <CreatedAt>{createdAt}</CreatedAt>
          {SNS === "discord" ? (
            <SnsLogo
              source={{
                uri: "https://www.freepnglogos.com/uploads/discord-logo-png/discord-logo-vector-download-0.png",
              }}
            ></SnsLogo>
          ) : (
            <SnsLogo
              source={{
                uri: "https://www.iconpacks.net/icons/2/free-twitter-logo-icon-2429-thumb.png",
              }}
            ></SnsLogo>
          )}
        </TimeContaier>
        <ProjectLogo
          source={{ uri: AllNfts.eth[`${nft}`].logourl }}
        ></ProjectLogo>
        <Thumbnail source={{ uri: thumbnail }}></Thumbnail>
        <BlueTags>#SAMPLE</BlueTags>
        <ArticleTitle>
          {title.slice(0, 35)}
          {title.length > 35 ? "..." : null}
        </ArticleTitle>
      </Container>
    </TouchableOpacity>
  );
};

export default SquareCard;
