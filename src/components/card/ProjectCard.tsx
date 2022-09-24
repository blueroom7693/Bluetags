import { useNavigation } from "@react-navigation/native";
import React from "react";
import styled from "styled-components/native";
import { Text, View, TouchableOpacity } from "react-native";
import { AntDesign } from "@expo/vector-icons";

//INTERFACE
interface IProjectCard {
  fullData: any;
  chain: string;
  title: string;
  logo: string;
}
//CSS
const Container = styled.View`
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  width: 100%;
`;
const ProjectLogo = styled.Image`
  width: 50px;
  height: 50px;
`;
const Title = styled.Text`
  font-size: 24px;
  font-weight: 800;
  color: white;
`;
const Follower = styled.Text`
  font-size: 12px;
  color: gray;
`;
const Company = styled.Text`
  font-size: 10px;
  color: gray;
`;

const ProjectCard: React.FC<IProjectCard> = ({
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
        <View>
          <Title>{title}</Title>
          <Company>by {chain}</Company>
        </View>
        <View>
          <AntDesign name="staro" size={24} color="white" />
          <Follower>13.2K</Follower>
        </View>
      </Container>
    </TouchableOpacity>
  );
};

export default ProjectCard;
