import React, { useContext, useEffect, useState } from "react";
import { useNavigation } from "@react-navigation/native";
import styled from "styled-components/native";
import { Text, TouchableOpacity, View } from "react-native";
import { AllNft } from "../../AllNft";
import { color } from "react-native-reanimated";
import { AntDesign } from "@expo/vector-icons";
import { DataContext } from "../../context/DataProvider";
import { token } from "../../atom";
import { axiosInstance } from "../../axiosInstance";
import { useRecoilValue } from "recoil";

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
  // ISSUBSCRIBE?
  const userToken = useRecoilValue(token);
  const [isSubscribed, setIsSubscribed] = useState(false);
  const { user } = useContext(DataContext);
  useEffect(() => {
    if (user) {
      if (
        user.favoriteNft.includes(
          title
            .toLowerCase()
            .replace(/ /gi, "")
            .replace(/-/gi, "")
            .replace(/`/gi, "")
        )
      ) {
        setIsSubscribed(true);
      }
    }
  }, []);
  // Subscribe

  const queryTitle = `${title
    .toLowerCase()
    .replace(/ /gi, "")
    .replace(/-/gi, "")
    .replace(/`/gi, "")}`;

  const onClick = () => {
    console.log(queryTitle);
    console.log(userToken);
    console.log(user);
    console.log(user.favoriteNft);
  };
  const onClickSubcribe = () => {
    axiosInstance.get(`/api/v1/user/favorite/choose/?nft=${queryTitle}`, {
      headers: {
        Authorization: `Bearer ${userToken}`,
      },
    });
    console.log(user);
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
            {isSubscribed ? <ProjectBy>subscribed</ProjectBy> : null}
          </View>
        </View>
        {/* <SubscribeBtn
          onPress={() => {
            onClickSubcribe;
            setIsSubscribed((prev) => !prev);
          }}
        > */}
        <SubscribeBtn onPress={onClick}>
          <AntDesign name="staro" size={24} color="white" />
        </SubscribeBtn>
      </Container>
    </TouchableOpacity>
  );
};

export default NFTproject;
