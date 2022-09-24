import { useState } from "react";
import {
  FlatList,
  Text,
  TouchableOpacity,
  useColorScheme,
  View,
  Image,
} from "react-native";
import styled from "styled-components/native";
import { AZUKI, BAYC, DOODLES } from "../model.js/data";
import { windowWidth, windowHeight } from "../utils/Dimensions";
import { FontAwesome5 } from "@expo/vector-icons";
import {
  BLACK_COLOR,
  BLUE,
  DARK_GREY,
  LIGHT_GREY,
  Pallet,
  WHITE,
  YELLOW_COLOR,
} from "../colors";

// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import {
//   solid,
//   regular,
//   brands,
// } from "@fortawesome/fontawesome-svg-core/import.macro";

const BgContainer = styled.View<{ isDark: boolean }>`
  flex: 1;
  align-items: center;
  background-color: ${(props) =>
    props.isDark ? props.theme.BLACK_COLOR : props.theme.WHITE};

  margin-bottom: 80px;
`;
const HeaderContainer = styled.View<{ isDark: boolean }>`
  /* flex: 1; */
  background-color: ${(props) =>
    props.isDark ? props.theme.BLACK_COLOR : "white"};
  width: 100%;
  height: 15%;
  flex-direction: row;
  background-color: #070707;
  /* border-color: white; */
  /* border-bottom-color: #94a9f5;
  border-bottom-width: 2px;
  border-bottom-style: dashed; */
  margin-bottom: 40px;
`;
const HeaderBtn = styled.TouchableOpacity`
  margin: 20px 10px 0px 10px;
  flex-direction: row;
  align-items: center;
  justify-content: center;
`;
const HeaderText = styled.Text`
  font-size: 12px;
  font-family: sans-serif;
  color: #ffffff;
`;
const ActiveHeaderText = styled.Text`
  font-size: 12px;
  font-family: sans-serif;
  color: #94a9f5;
`;

const CardnewsContainer = styled.ScrollView`
  flex: 1;
`;

export const HListSeparator = styled.View`
  width: 30px;
`;

const CardContainer = styled.View`
  align-items: center;
  margin-bottom: 120px;
  margin-top: 20px;
  height: 400px;
  width: 300px;
  border-radius: 20px;
  background-color: #1f1f1f;
`;
const Container = styled.TouchableOpacity`
  align-items: center;
`;
const Poster = styled.Image`
  height: 200px;
  width: 280px;
  /* border-top-left-radius: 20px;
  border-top-right-radius: 20px; */
  border-radius: 20px;
  margin-top: 20px;
`;
const DetailBtnContainer = styled.View`
  margin-left: 20px;
  margin-top: 20px;
  text-align: center;
  width: 250px;
  flex-direction: column;
  justify-content: space-between;
  background-color: #1f1f1f;
`;
const DetailBtn = styled.Text`
  font-size: 17px;
  color: #070707;
  text-align: center;
  font-weight: 500;
`;
const TextContainer = styled.View`
  flex: 1;
  height: 100px;
  width: 300px;
  border-bottom-left-radius: 20px;
  border-bottom-right-radius: 20px;
  background-color: #1f1f1f;
`;

const Title = styled.Text`
  font-size: 18px;
  color: #ffffff;
  font-weight: 600;
  margin-top: 7px;
  margin-bottom:-5px
  text-align: left;
  margin-left: 17px;
  /* font-family: "Roboto-Regular"; */
`;
const Category = styled.Text`
  font-size: 30px;
  color: #ffffff;
  font-weight: 700;
  margin-left: 35px;
  margin-top: 10px;

  /* font-family: "Roboto-Regular"; */
`;
const DateText = styled.Text`
  font-size: 12px;
  color: grey;

  /* font-family: "Roboto-Regular"; */
`;

const Watchlist = () => {
  const isDark = useColorScheme() === "dark";

  const Item = ({ title, poster, bluetag, isDiscord, date }) => (
    <CardContainer>
      <Container>
        <Poster source={poster}></Poster>
      </Container>
      <TextContainer>
        <Title>{bluetag}</Title>
        <DetailBtnContainer>
          <View
            style={{
              flexDirection: "row",
              justifyContent: "space-between",
              marginBottom: 50,
            }}
          >
            <DateText>{date}</DateText>
            {isDiscord ? (
              <FontAwesome5 name="discord" size={24} color="#7289da" />
            ) : (
              <FontAwesome5 name="twitter" size={24} color="#00acee" />
            )}
          </View>
          <TouchableOpacity
            style={{
              height: 30,
              width: 90,
              justifyContent: "center",
              alignItems: "center",
              backgroundColor: "#94a9f5",
              borderRadius: 5,
            }}
          >
            <DetailBtn>Go detail {"\n"}</DetailBtn>
          </TouchableOpacity>
        </DetailBtnContainer>
      </TextContainer>
    </CardContainer>
  );

  const renderItem = ({ item }) => (
    <Item
      title={item.title}
      poster={item.poster}
      bluetag={item.bluetags}
      isDiscord={item.isDiscord}
      date={item.date}
    />
  );

  return (
    <BgContainer isDark={isDark}>
      <HeaderContainer isDark={isDark}>
        <HeaderBtn>
          <Image
            source={{
              uri: "https://raw.githubusercontent.com/aarmn/aarmn/main/res/crypto/eth.png",
            }}
            style={{ width: 30, height: 30, marginRight: 5 }}
          />

          <ActiveHeaderText>Ethereum</ActiveHeaderText>
        </HeaderBtn>
        <View
          style={{
            justifyContent: "center",
            alignItems: "center",
            borderBottomColor: "#94a9f5",
            borderBottomWidth: 1,
            width: 85,
            position: "absolute",
            marginLeft: 20,
            marginTop: 95,
          }}
        ></View>

        <HeaderBtn>
          <Image
            source={{
              uri: "https://cloudfront-us-east-1.images.arcpublishing.com/coindesk/DPYBKVZG55EWFHIK2TVT3HTH7Y.png",
            }}
            style={{ width: 25, height: 25, marginRight: 5 }}
          />
          <HeaderText>Polygon</HeaderText>
        </HeaderBtn>
        <HeaderBtn>
          <Image
            source={{
              uri: "https://cdn-images-1.medium.com/max/1200/1*3tSS6q_D-lyttNdlRwqoQw.png",
            }}
            style={{ width: 23, height: 23, marginRight: 5 }}
          />
          <HeaderText>Klaytn</HeaderText>
        </HeaderBtn>
        <HeaderBtn>
          <Image
            source={{
              uri: "https://upload.wikimedia.org/wikipedia/commons/b/b9/Solana_logo.png",
            }}
            style={{ width: 25, height: 25, marginRight: 5 }}
          />
          <HeaderText>Solana</HeaderText>
        </HeaderBtn>
      </HeaderContainer>
      <CardnewsContainer>
        <Category>AZUKI</Category>

        <FlatList
          data={AZUKI}
          horizontal
          showsHorizontalScrollIndicator={false}
          ItemSeparatorComponent={HListSeparator}
          contentContainerStyle={{ paddingHorizontal: 30 }}
          renderItem={renderItem}
          keyExtractor={(item) => item.id}
        />
        <Category>BAYC</Category>

        <FlatList
          data={BAYC}
          horizontal
          showsHorizontalScrollIndicator={false}
          ItemSeparatorComponent={HListSeparator}
          contentContainerStyle={{ paddingHorizontal: 30 }}
          renderItem={renderItem}
          keyExtractor={(item) => item.id}
        />
        <Category>DOODLES</Category>

        <FlatList
          data={DOODLES}
          horizontal
          showsHorizontalScrollIndicator={false}
          ItemSeparatorComponent={HListSeparator}
          contentContainerStyle={{ paddingHorizontal: 30 }}
          renderItem={renderItem}
          keyExtractor={(item) => item.id}
        />
      </CardnewsContainer>
    </BgContainer>
  );
};

export default Watchlist;
