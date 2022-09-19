import { useQuery } from "@tanstack/react-query";
import React, { useState } from "react";
import { Alert, Text } from "react-native";
import styled from "styled-components/native";
import { getSearch } from "../axios";
import Loader from "../components/Loader";

const Container = styled.ScrollView``;

const SearchBar = styled.TextInput`
  background-color: white;
  padding: 10px 15px;
  border-radius: 15px;
  width: 90%;
  margin: 10px auto;
  margin-bottom: 40px;
`;

const Search = () => {
  //set query
  const [query, setQuery] = useState("");
  const onChangeText = (text: string) => setQuery(text);
  //onsubmit
  const onSubmit = () => {
    if (query === "") {
      return;
    }
    console.log("serched");
    console.log(searchedNft?.data);
  };
  //usequery
  const {
    isLoading,
    error,
    data: searchedNft,
  } = useQuery(["Searched"], () => getSearch(query));

  return (
    <Container>
      <SearchBar
        placeholder="Search for NFT Project"
        placeholderTextColor="grey"
        returnKeyType="search"
        onChangeText={onChangeText}
        onSubmitEditing={onSubmit}
      />
      {searchedNft ? (
        // <HList title="Movie Results" data={searchedNft.results} />
        <Text>hi</Text>
      ) : null}
    </Container>
  );
};
export default Search;
