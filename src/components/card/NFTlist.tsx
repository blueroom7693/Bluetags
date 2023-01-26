import React from "react";
import { useNavigation } from "@react-navigation/native";
import styled from "styled-components/native";
import { Text, TouchableOpacity, View } from "react-native";
// import BtnSVG from "../assets/images/misc/btn.svg";
import BtnSVG from "../../assets/images/misc/btn.svg";
import MiddleBarSVG from "../../assets/images/misc/middlebar.svg";
import ChartSVG from "../../assets/images/misc/chart.svg";
import FollowerSVG from "../../assets/images/misc/follower.svg";

interface INFTProject {
  fullData: any;
  firstCard: any;
  secondCard: any;
  thirdCard: any;
  forthCard: any;
}
//CSS
const ProjectLogo = styled.Image`
  width: 40px;
  height: 40px;
  border-radius: 6px;
  margin-left: 10px;
  margin-right: 21px;
`;
const Container = styled.View`
  background-color: ${(props) => props.theme.Bg0dp};
  /* justify-content: center; */
  align-items: center;
  margin-top: 20px;
  flex-direction: row;
  width: 356px;
  height: 70px;
  border-width: 1px;
  border-radius: 10px;
  border-color: rgba(25, 31, 40, 0.1);
`;
const Title = styled.Text`
  color: ${(props) => props.theme.Text0dp};
  font-size: 12px;
  font-weight: 700;
  margin-right: 10px;
`;
const Follower = styled.Text`
  color: ${(props) => props.theme.Text1dp};
  font-size: 12px;
  font-weight: 500;
  margin-left: 10px;
`;
const Description = styled.Text`
  font-size: 16px;
  color: ${(props) => props.theme.Text1dp};
  font-weight: 300;
`;

const ChartView = styled.View`
  width: 47px;
  margin-right: 21px;
  margin-left: 21px;
`;
const BtnView = styled.View`
  width: 40px;
`;
//MAIN
const NFTlist: React.FC<INFTProject> = ({
  fullData,
  firstCard,
  secondCard,
  thirdCard,
  forthCard,
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
  return (
    <View>
      <TouchableOpacity onPress={goToDetail}>
        <Container
          style={{
            shadowColor: "rgba(0, 0, 0, 0.05)",
            shadowOffset: { width: 0, height: 4 },
            shadowRadius: 10,
          }}
        >
          <ProjectLogo source={{ uri: firstCard.logoUrl }}></ProjectLogo>
          <View>
            <View
              style={{
                flexDirection: "row",
                alignItems: "center",
                width: 146,
              }}
            >
              <Title>{firstCard.title}</Title>
              <MiddleBarSVG width={11} />
              <FollowerSVG width={17} />
              <Follower>22,992</Follower>
            </View>
            <Description>Modern Hype : AA</Description>
          </View>
          <ChartView>
            <ChartSVG width={47} />
          </ChartView>
          <BtnView>
            <BtnSVG width={40} />
          </BtnView>
        </Container>
      </TouchableOpacity>
      {secondCard !== undefined ? (
        <TouchableOpacity onPress={goToDetail}>
          <Container>
            <ProjectLogo source={{ uri: secondCard.logoUrl }}></ProjectLogo>
            <Title>{secondCard.title}</Title>
            <Text>|</Text>
            <Follower>22,992</Follower>
          </Container>
        </TouchableOpacity>
      ) : null}
      {thirdCard !== undefined ? (
        <TouchableOpacity onPress={goToDetail}>
          <Container>
            <ProjectLogo source={{ uri: thirdCard.logoUrl }}></ProjectLogo>
            <Title>{thirdCard.title}</Title>
            <Text>|</Text>
            <Follower>22,992</Follower>
          </Container>
        </TouchableOpacity>
      ) : null}
      {forthCard !== undefined ? (
        <TouchableOpacity onPress={goToDetail}>
          <Container>
            <ProjectLogo source={{ uri: forthCard.logoUrl }}></ProjectLogo>
            <Title>{forthCard.title}</Title>
            <Text>|</Text>
            <Follower>22,992</Follower>
          </Container>
        </TouchableOpacity>
      ) : null}
    </View>
  );
};

export default NFTlist;
