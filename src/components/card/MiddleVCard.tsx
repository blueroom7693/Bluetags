import React from "react";
import { useNavigation } from "@react-navigation/native";
import styled from "styled-components/native";
import { Text, TouchableOpacity, View } from "react-native";
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
  flex-direction: column;
  align-items: center;
  width: 300px;
  margin-top: 30px;
`;
const TitleConatier = styled.View`
  flex-direction: row;
  width: 100%
  margin-top: 10px;
  align-items: center;
`;
const TimeContaier = styled.View`
  flex-direction: row;
  justify-content: flex-start;
  margin-top: 5px;
`;
const Thumbnail = styled.Image`
  width: 300px;
  height: 200px;
  border-radius: 5px;
  background-color: rgba(255, 255, 255, 0.5);
  border-radius: 20px;
`;
const ProjectLogo = styled.Image`
  width: 50px;
  height: 50px;
  border-radius: 30px;
  margin-right: 20px;
`;
const SnsLogo = styled.Image`
  width: 20px;
  height: 20px;
  margin-left: 10px;
`;
const CreatedAt = styled.Text`
  font-size: 12px;
  margin-right: 0px;
  color: ${(props) => props.theme.Text0dp}; ;
`;
const BlueTags = styled.Text`
  font-size: 12px;
  color: ${(props) => props.theme.Text0dp}; ;
`;
const ArticleTitle = styled.Text`
  font-size: 12px;
  color: ${(props) => props.theme.Text0dp}; ;
`;

//MAIN
const MiddleVCard: React.FC<ISquareCard> = ({
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
        <Thumbnail source={{ uri: thumbnail }}></Thumbnail>
        <TitleConatier>
          <TouchableOpacity>
            <ProjectLogo
              source={{ uri: AllNfts.eth[`${nft}`].logourl }}
            ></ProjectLogo>
          </TouchableOpacity>
          <View>
            <BlueTags>#SAMPLE</BlueTags>
            {/* <ArticleTitle>{title}</ArticleTitle> */}
            <ArticleTitle>
              {title.slice(0, 45)}
              {title.length > 45 ? "..." : null}
            </ArticleTitle>
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
          </View>
        </TitleConatier>
      </Container>
    </TouchableOpacity>
  );
};

export default MiddleVCard;
