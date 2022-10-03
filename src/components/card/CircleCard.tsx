import React from "react";
import { useNavigation } from "@react-navigation/native";
import styled from "styled-components/native";
import { Text, TouchableOpacity } from "react-native";

interface ICircleProject {
  fullData: any;
  chain: string;
  title: string;
  logo: string;
}
//CSS
const ProjectLogo = styled.Image`
  width: 150px;
  height: 150px;
  border-radius: 100px;
`;
const Container = styled.View`
  background-color: ${(props) => props.theme.Bg0dp};
  justify-content: center;
  align-items: center;
  margin-top: 20px;
`;
const Title = styled.Text`
  color: ${(props) => props.theme.Text0dp};
  font-size: 15px;
`;
const Follower = styled.Text`
  color: ${(props) => props.theme.Text1dp};
  font-size: 12px;
`;
//MAIN
const CircleCard: React.FC<ICircleProject> = ({
  fullData,
  chain,
  title,
  logo,
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
    <TouchableOpacity onPress={goToDetail}>
      <Container>
        <ProjectLogo source={{ uri: logo }}></ProjectLogo>
        <Title>{title}</Title>
        <Follower>Follower</Follower>
      </Container>
    </TouchableOpacity>
  );
};

export default CircleCard;
