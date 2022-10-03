import React from "react";
import { useNavigation } from "@react-navigation/native";
import styled from "styled-components/native";
import { Text, TouchableOpacity } from "react-native";
import { AllNftNonChain } from "../../AllNft";
import { useRecoilState, useRecoilValue } from "recoil";
import { projectString } from "../../atom";

interface ICircleProject {
  title: string;
}
//CSS
const ProjectLogo = styled.Image`
  width: 50px;
  height: 50px;
  border-radius: 100px;
`;
const Container = styled.View`
  background-color: ${(props) => props.theme.Bg0dp};
  justify-content: center;
  align-items: center;
  margin-top: 20px;
`;

//MAIN
const SmallCircleCard: React.FC<ICircleProject> = ({ title }) => {
  //
  const [project, setProject] = useRecoilState(projectString);
  console.log(project);

  return (
    <TouchableOpacity
      onPress={() => {
        setProject(title);
      }}
    >
      <Container>
        <ProjectLogo
          source={{ uri: AllNftNonChain[title].logourl }}
        ></ProjectLogo>
      </Container>
    </TouchableOpacity>
  );
};

export default SmallCircleCard;
