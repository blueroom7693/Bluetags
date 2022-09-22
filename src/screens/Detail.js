import { NativeStackScreenProps } from "@react-navigation/native-stack";
import React, { useEffect } from "react";
import { Text } from "react-native";
import styled from "styled-components/native";

const Container = styled.ScrollView`
  /* background-color: ${(props) => props.theme.mainBgColor}; */
  display: flex;
  flex: 1;
  flex-direction: column;
  background-color: white;
`;

const Detail = ({ navigation: { setOptions }, route: { params } }) => {
  // console.log(Object.values(params));
  console.log(params);
  const id = params.title;
  return (
    <Container>
      <Text>하이루 {id}</Text>
    </Container>
  );
};

export default Detail;
