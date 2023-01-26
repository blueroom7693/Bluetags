import React from "react";
import { useNavigation } from "@react-navigation/native";
import styled from "styled-components/native";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
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
  projectlogo: string;
}
//CSS
const Container = styled.View`
  background-color: ${(props) => props.theme.Bg0dp};
  width: 336px;
  height: 480px;
  margin-top: 20px;
  align-items: flex-start;
  border-radius: 10px;
  margin-bottom: 20px;
  margin: 10px;
  /* justify-content: center; */
  /* border: 1px solid rgba(0, 0, 0, 0.1); */
  /* box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.1); */
`;
const MainContainer = styled.View`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding: 0px 24px 24px;
  gap: 16px;

  width: 336px;
  height: 200px;
`;

const TitleConatainer = styled.View`
  display: flex;
  flex-direction: row;
  align-items: center;
  padding: 0px 0px 0px;

  width: 260px;
  height: 50px;
  margin-top: 16px;
  /* border-bottom-width: 1px;
  border-bottom-color: rgba(0, 0, 0, 0.1);
  border-bottom-style: solid; */
`;

const TimeContaier = styled.View`
  width: 100%;
  flex-direction: row;
  align-items: center;
  justify-content: flex-end;
`;

const Thumbnail = styled.Image`
  width: 336px;
  height: 160px;
  border-top-left-radius: 10px;
  border-top-right-radius: 10px;
`;
const ProjectLogo = styled.Image`
  width: 45px;
  height: 45px;
  border-radius: 5px;
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
const Description = styled.Text`
  font-size: 12px;
  font-weight: 500;
  line-height: 14px;
  color: ${(props) => props.theme.Text0dp};
`;
const BlueTags = styled.Text`
  font-size: 12px;
  color: ${(props) => props.theme.Text0dp};
`;
const ArticleTitle = styled.Text`
  font-size: 16px;
  font-weight: 500;
  color: ${(props) => props.theme.Text0dp};
  padding-left: 15px;
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
  projectlogo,
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
      <Container
        style={{
          shadowColor: "#000000",
          shadowOffset: { width: 0, height: 4 },
          // shadowOpacity: 0.1,
          shadowRadius: 8,
          elevation: 3,
        }}
      >
        {/* 예전버전 */}
        {/* <ProjectLogo
          source={{ uri: AllNfts.eth[`${nft}`].logourl }}
        ></ProjectLogo> */}
        <Thumbnail source={{ uri: thumbnail }}></Thumbnail>
        <MainContainer>
          <TitleConatainer>
            <View
              style={{
                shadowColor: "#000",
                shadowOffset: { width: 0, height: 2 },
                shadowOpacity: 0.25,
                shadowRadius: 5,
                elevation: 10,
                justifyContent: "center",
                alignItems: "center",
                width: 45,
                height: 45,
              }}
            >
              <ProjectLogo source={{ uri: projectlogo }}></ProjectLogo>
            </View>
            <ArticleTitle>
              {title.slice(0, 45)}
              {title.length > 45 ? "..." : null}
            </ArticleTitle>
          </TitleConatainer>
          <TimeContaier>
            <CreatedAt>{`${new Date(createdAt).toDateString()}`}</CreatedAt>
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
          <Description>{description}</Description>
        </MainContainer>
        {/* <BlueTags>#SAMPLE</BlueTags> */}
      </Container>
    </TouchableOpacity>
  );
};

export default SquareCard;
