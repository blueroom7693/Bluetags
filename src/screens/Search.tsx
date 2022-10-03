import { useNavigation } from "@react-navigation/native";
import { useQuery } from "@tanstack/react-query";
import React, { useContext, useState } from "react";
import {
  Alert,
  FlatList,
  SafeAreaView,
  StyleSheet,
  Text,
  Touchable,
  TouchableOpacity,
} from "react-native";
import styled, { ThemeContext } from "styled-components/native";
import { getSearch } from "../axios";
import SmallHCard from "../components/card/SmallHCard";
import Loader from "../components/Loader";
import { Ionicons } from "@expo/vector-icons";

const Container = styled.FlatList`
  background-color: ${(props) => props.theme.Bg0dp}; ;
`;
const BigContainer = styled.View`
  background-color: ${(props) => props.theme.Bg0dp};
  flex: 1;
`;

const BackButton = styled.TouchableOpacity``;

const HeaderContainer = styled.View`
  margin-top: 40px;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  margin-bottom: 30px;
`;

const SearchBar = styled.TextInput`
  background-color: ${(props) => props.theme.Text0dp};
  padding: 10px 15px;
  border-radius: 15px;
  width: 90%;
`;
const Search = ({ navigation }) => {
  //
  const theme = useContext(ThemeContext);

  //usequery
  const {
    isLoading,
    error,
    data: searchedNft,
    refetch: searchNFT,
  } = useQuery(["Searched", query], () => getSearch(query), {
    enabled: false,
  });
  //set query
  const [query, setQuery] = useState("");
  const onChangeText = (text: string) => setQuery(text);
  //onsubmit
  const onSubmit = () => {
    if (query === "") {
      return;
    }
    searchNFT();
  };

  return isLoading ? (
    <SafeAreaView style={styles.container}>
      <BigContainer>
        <HeaderContainer>
          <BackButton>
            <Ionicons
              name="arrow-back"
              size={24}
              color="white"
              onPress={() => navigation.goBack()}
            />
          </BackButton>
          <SearchBar
            placeholder="Search for NFT Project"
            placeholderTextColor="grey"
            returnKeyType="search"
            onChangeText={onChangeText}
            onSubmitEditing={onSubmit}
          />
        </HeaderContainer>
      </BigContainer>
    </SafeAreaView>
  ) : (
    <SafeAreaView style={styles.container}>
      <BigContainer>
        <Container
          ListHeaderComponent={
            <HeaderContainer>
              <BackButton>
                <Ionicons
                  name="arrow-back"
                  size={24}
                  color="white"
                  onPress={() => navigation.goBack()}
                />
              </BackButton>
              <SearchBar
                placeholder="Search for NFT Project"
                placeholderTextColor="grey"
                returnKeyType="search"
                onChangeText={onChangeText}
                onSubmitEditing={onSubmit}
              />
            </HeaderContainer>
          }
          data={searchedNft.data}
          keyExtractor={(item) => item._id}
          renderItem={({ item }) => (
            <SmallHCard
              // createdAt={item.createdAt}
              // nft={item.nft}
              thumbnail={item.thumbnail}
              title={item.title}
              // chain={item.chain}
              // SNS={item.SNS}
              fullData={item}
            />
          )}
        />
      </BigContainer>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // backgroundColor: "black",
  },
});

export default Search;
