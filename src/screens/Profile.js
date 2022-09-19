import styled from "styled-components";
import React, { useRef, useState } from "react";
import { Text, StyleSheet } from "react-native";

const Container = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
  background-color: #070707;
  flex-direction: column;
`;

const BackgroundContainer = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
  width: 100%;
`;
const ProfileImage = styled.Image`
  /* float: left; */
  margin-left: 20px;
  margin-top: 90px;
  width: 120px;
  height: 120px;
  z-index: 1;
  border-radius: 100px;
`;

const DetailContainer = styled.View`
  flex: 3.3;
  background-color: #070707;
  width: 100%;
  padding: 0px 20px;
  margin-top: 70px;
  margin-left: 20px;
`;

const BackgroundImage = styled.Image`
  flex: 1;
  opacity: 0.4;
`;

const Name = styled.Text`
  color: white;
  font-size: 20px;
  align-self: flex-start;
  margin-left: 15px;
  font-weight: 500;
`;
const Position = styled.Text`
  color: white;
  font-size: 13px;
  align-self: flex-start;
  font-weight: 300;
`;

const Profile = () => {
  return (
    <Container>
      <BackgroundContainer>
        <BackgroundImage
          style={StyleSheet.absoluteFill}
          source={{
            uri: "https://media.istockphoto.com/videos/colored-smoke-on-a-dark-background-blue-and-red-light-with-smoke-video-id1341408852?s=640x640",
          }}
        />
      </BackgroundContainer>
      <ProfileImage
        style={StyleSheet.absoluteFill}
        source={{
          uri: "https://media.istockphoto.com/videos/colored-smoke-on-a-dark-background-blue-and-red-light-with-smoke-video-id1341408852?s=640x640",
        }}
      />

      <DetailContainer>
        <Name>김상완</Name>
        <Position>CEO of BLUEROOM</Position>
        <Position>Suwon, South Korea</Position>
        <Position>https://blueroom.app</Position>
      </DetailContainer>
    </Container>
  );
};

export default Profile;
