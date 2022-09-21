import React from "react";
import { useNavigation } from "@react-navigation/native";
import styled from "styled-components/native";
import { Text, TouchableOpacity } from "react-native";

//TYPE
interface ISquareCard {
  fullData: any;
  nft: string;
}
//CSS
const Container = styled.View`
  align-items: center;
  background-color: white;
`;
//MAIN
const SquareCard: React.FC<ISquareCard> = ({ fullData, nft }) => {
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
  console.log("im rendered");
  return (
    <TouchableOpacity onPress={goToDetail}>
      <Container>
        {/* <Text>{fullData._id}</Text>
        <Text>{fullData.nft}</Text>
        <Text>{fullData.title}</Text> */}

        <Text>{nft}</Text>
      </Container>
    </TouchableOpacity>
  );
};

export default SquareCard;
