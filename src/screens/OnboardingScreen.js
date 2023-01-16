import React from "react";
import { SafeAreaView, StyleSheet } from "react-native";

import styled from "styled-components/native";
import { useContext } from "react";
import { ThemeContext } from "styled-components/native";

const Container = styled.View`
  flex: 1;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
`;
const ImageContainer = styled.View`
  width: 350px;
  align-items: center;
  justify-content: center;
  margin-bottom: 30px;
  margin-top: 150px;
`;
const BgImg = styled.Image`
  width: 350px;
  height: 330px;
  border-radius: 20px;
`;
const WelcomeBox = styled.View`
  flex-direction: column;
  width: 350px;
  margin-bottom: 100px;
`;
const Welcome = styled.Text`
  font-size: 26px;
  font-weight: 300;
  letter-spacing: -1px;
  color: ${(props) => props.theme.Text0dp};
  text-align: left;
  line-height: 24px;
  padding-bottom: 10px;
`;
const WelcomeSub = styled.Text`
  font-size: 13px;
  font-weight: 400;
  letter-spacing: -1px;
  color: ${(props) => props.theme.Text0dp};
  text-align: left;
  line-height: 16px;
`;

const ButtonContainer = styled.View`
  flex-direction: column;
  justify-content: center;
  align-content: center;
  margin-bottom: 50px;
`;
const StartButton1 = styled.TouchableOpacity`
  background-color: ${(props) => props.theme.Primary0dp};
  border-radius: 10px;
  align-items: center;
  justify-content: center;
  width: 350px;
  height: 40px;
  margin-bottom: 10px;
`;
const StartButton2 = styled.TouchableOpacity`
  background-color: ${(props) => props.theme.Secondary0dp};
  border-radius: 10px;
  align-items: center;
  justify-content: center;
  width: 350px;
  height: 40px;
  margin-bottom: 5px;
`;

const ButtonMessage = styled.Text`
  font-size: 12px;
  color: ${(props) => props.theme.BtnInner};
  font-style: normal;
  font-weight: 700;
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
        <WelcomeBox>
          <Welcome>Welcome!</Welcome>
          <WelcomeSub>
            Welcome to Polytrip! Log in to the service now and start a new
            journey!
          </WelcomeSub>
        </WelcomeBox>
        <ButtonContainer>
          <StartButton1 onPress={() => navigation.navigate("Login")}>
            <ButtonMessage>Sign in</ButtonMessage>
          </StartButton1>
          <StartButton2 onPress={() => navigation.navigate("Register")}>
            <ButtonMessage>Register</ButtonMessage>
          </StartButton2>
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
