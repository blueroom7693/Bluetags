import styled, { ThemeContext } from "styled-components/native";
import React, { useRef, useState } from "react";
import { Text, StyleSheet, SafeAreaView, View } from "react-native";
import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";
import {
  faBackward,
  faChevronRight,
  faCircleDollar,
  faClockRotateLeft,
  faDownToBracket,
} from "@fortawesome/pro-regular-svg-icons";
import {
  faGear,
  faRightFromBracket,
  faSquareUser,
} from "@fortawesome/pro-light-svg-icons";
import { faCircleQuestion } from "@fortawesome/free-regular-svg-icons";
import { useRecoilState } from "recoil";
import { isLogined } from "../atom";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { useContext } from "react";

const Container = styled.View`
  flex: 1;
  justify-content: flex-start;
  align-items: center;
  background-color: ${(props) => props.theme.Bg0dp};
  flex-direction: column;
  width: 100%;
`;

const ProfileContainer = styled.TouchableOpacity`
  flex-direction: row;
  align-items: center;
  width: 100%;
  justify-content: space-between;
  padding: 20px;
  border-bottom-width: 1px;
  border-color: ${(props) => props.theme.BgBorder};
`;

const OptionContainer = styled.TouchableOpacity`
  flex-direction: row;
  align-items: center;
  width: 100%;
  padding: 20px;
  margin-bottom: -10px;
  margin-top: -10px;
`;

const ProfileImage = styled.Image`
  width: 50px;
  height: 50px;
  border-radius: 100px;
  margin-right: 20px;
`;

const Name = styled.Text`
  color: ${(props) => props.theme.Text0dp};
  font-size: 18px;
  font-weight: 400;
`;
const OptionName = styled.Text`
  color: ${(props) => props.theme.Text0dp};
  font-size: 16px;
  margin-left: 20px;
`;

const ServiceTerms = styled.Text`
  color: ${(props) => props.theme.Text1dp};
  font-size: 14px;
  margin-top: 250px;
`;

const Profile = () => {
  //
  const theme = useContext(ThemeContext);

  //logout
  const [isLogin, setIsLogin] = useRecoilState(isLogined);
  const signOut = async () => {
    try {
      await AsyncStorage.removeItem("sangwan");
      setIsLogin(false);
    } catch (e) {}
  };

  return (
    <SafeAreaView style={styles.container}>
      <Container>
        <ProfileContainer>
          <View style={{ flexDirection: "row", alignItems: "center" }}>
            <ProfileImage
              source={{
                uri: "https://img.freepik.com/free-photo/pleasant-looking-serious-man-stands-profile-has-confident-expression-wears-casual-white-t-shirt_273609-16959.jpg?w=2000",
              }}
            />
            <Name>SANGWAN KIM</Name>
          </View>
          <FontAwesomeIcon
            icon={faChevronRight}
            color={theme.Text0dp}
            size={18}
          />
        </ProfileContainer>
        <OptionContainer>
          <FontAwesomeIcon
            icon={faSquareUser}
            color={theme.Text0dp}
            size={24}
          />
          <OptionName>내 채널</OptionName>
        </OptionContainer>
        <OptionContainer>
          <FontAwesomeIcon
            icon={faDownToBracket}
            color={theme.Text0dp}
            size={24}
          />
          <OptionName>오프라인 저장 콘텐츠</OptionName>
        </OptionContainer>
        <OptionContainer>
          <FontAwesomeIcon
            icon={faClockRotateLeft}
            color={theme.Text0dp}
            size={24}
          />
          <OptionName>기록</OptionName>
        </OptionContainer>
        <OptionContainer>
          <FontAwesomeIcon icon={faBackward} color={theme.Text0dp} size={24} />
          <OptionName>내 Recap</OptionName>
        </OptionContainer>
        <OptionContainer>
          <FontAwesomeIcon
            icon={faCircleDollar}
            color={theme.Text0dp}
            size={24}
          />
          <OptionName>유료 멤버십</OptionName>
        </OptionContainer>
        <OptionContainer>
          <FontAwesomeIcon icon={faGear} color={theme.Text0dp} size={24} />
          <OptionName>설정</OptionName>
        </OptionContainer>
        <OptionContainer>
          <FontAwesomeIcon
            icon={faCircleQuestion}
            color={theme.Text0dp}
            size={24}
          />
          <OptionName>고객센터</OptionName>
        </OptionContainer>
        <OptionContainer onPress={signOut}>
          <FontAwesomeIcon
            icon={faRightFromBracket}
            color={theme.Text0dp}
            size={24}
          />
          <OptionName>로그아웃</OptionName>
        </OptionContainer>
        <ServiceTerms>개인정보처리방침 및 서비스약관</ServiceTerms>
      </Container>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});

export default Profile;
