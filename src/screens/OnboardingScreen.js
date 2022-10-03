import React from "react";
import {
  SafeAreaView,
  View,
  Text,
  TouchableOpacity,
  Image,
  StyleSheet,
} from "react-native";

import MaterialIcons from "react-native-vector-icons/MaterialIcons";
import styled from "styled-components/native";
import { BlurView, VibrancyView } from "@react-native-community/blur";
import Gaming from "../assets/images/misc/gaming.svg";
import { BLACK_COLOR } from "../colors";
import { useContext } from "react";
import { ThemeContext } from "styled-components/native";

const Container = styled.View`
  flex: 1;
  flex-direction: column;
`;

const BgImg = styled.Image`
  height: 1000px;
`;

const StartButton = styled.TouchableOpacity`
  background-color: ${(props) => props.theme.Bg1dp};
  /* width: 40%; */
  /* justify-content: space-between; */
  border-radius: 20px;
  flex-direction: row;
  align-items: center;
  width: 100px;
  height: 50px;
`;

const ButtonMessage = styled.Text`
  font-size: 18px;
  color: #fff;
`;

const ButtonContainer = styled.View`
  flex-direction: row;
  flex: 0.25;
  height: 200px;
`;
const ImageContainer = styled.View`
  flex: 1;
`;

const OnboardingScreen = ({ navigation }) => {
  const theme = useContext(ThemeContext);

  return (
    <SafeAreaView style={styles.container}>
      <Container>
        <ImageContainer>
          <BgImg
            source={{
              uri: "https://images.unsplash.com/photo-1643941687361-7101751cf89c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1025&q=80",
            }}
          />
        </ImageContainer>
        <ButtonContainer>
          <StartButton onPress={() => navigation.navigate("Login")}>
            <ButtonMessage>Sign in</ButtonMessage>
            {/* <MaterialIcons name="arrow-forward-ios" size={22} color="#fff" /> */}
          </StartButton>
          <StartButton onPress={() => navigation.navigate("Register")}>
            <ButtonMessage>Sign up</ButtonMessage>
            {/* <MaterialIcons name="arrow-forward-ios" size={22} color="#fff" /> */}
          </StartButton>
        </ButtonContainer>
      </Container>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default OnboardingScreen;
