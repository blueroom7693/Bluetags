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
import styled from "styled-components";
import { BlurView, VibrancyView } from "@react-native-community/blur";
import Gaming from "../assets/images/misc/gaming.svg";
import { BLACK_COLOR } from "../colors";

const Container = styled.View`
  justify-content: center;
  align-items: center;
  height: 100%;
`;

const BgImg = styled.Image`
  flex: 1;
  position: absolute;
`;

const MessageContainer = styled.View`
  margin-bottom: 150px;
`;

const WelcomeMessage1 = styled.Text`
  font-size: 36px;
  text-align: center;
  font-weight: 700;
`;
const WelcomeMessage2 = styled.Text`
  font-size: 24px;
  text-align: center;
`;

const StartButton = styled.TouchableOpacity`
  flex: 0.2;
  background-color: #1e272e;
  /* height: 10%; */
  width: 80%;
  justify-content: space-between;
  border-radius: 10px;
  flex-direction: row;
  align-items: center;
  padding: 20px;

  /* padding: 20px; */
  /* width: 80%; */
`;

const ButtonMessage = styled.Text`
  font-size: 24px;
  color: #fff;
`;
const OnboardingScreen = ({ navigation }) => {
  return (
    <Container>
      <BgImg
        key={"blurryImage"}
        source={{
          uri: "https://cdn.wallpapersafari.com/67/85/mrKhq2.jpg",
        }}
        style={styles.absolute}
      />
      <BlurView
        style={styles.absolute}
        blurType="light"
        blurAmount={3}
        reducedTransparencyFallbackColor="white"
      />
      <MessageContainer>
        <WelcomeMessage1>Don't DYOR anymore😒</WelcomeMessage1>
        <WelcomeMessage2>Easily manage your NFTs😁</WelcomeMessage2>
      </MessageContainer>
      <StartButton onPress={() => navigation.navigate("Login")}>
        <ButtonMessage>Let's start</ButtonMessage>
        <MaterialIcons name="arrow-forward-ios" size={22} color="#fff" />
      </StartButton>
    </Container>
  );
};

const styles = StyleSheet.create({
  absolute: {
    position: "absolute",
    top: 0,
    left: 0,
    bottom: 0,
    right: 0,
  },
});

export default OnboardingScreen;
