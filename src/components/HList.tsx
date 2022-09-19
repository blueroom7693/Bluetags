import React from "react";
import { Text } from "react-native";
import { FlatList } from "react-native-gesture-handler";
import styled from "styled-components/native";
// import { Movie, TV } from "../api";
// import VMedia from "./VMedia";
import { sliderData } from "../model.js/data";

const ListContainer = styled.View`
  margin-bottom: 40px;
`;

const ListTitle = styled.Text`
  color: white;
  font-size: 18px;
  font-weight: 600;
  margin-left: 30px;
  margin-bottom: 20px;
`;

export const HListSeparator = styled.View`
  width: 20px;
`;

interface HListProps {
  title: string;
  data: sliderData[];
}

const Item = ({ title }) => (
  <View>
    <Text>{title}</Text>
  </View>
);

console.log(sliderData);
const renderItem = ({ item }) => <Item title={item.title} />;
const HList: React.FC<HListProps> = ({ title, data }) => (
  <ListContainer>
    <ListTitle>{title}</ListTitle>
    <FlatList
      data={data}
      horizontal
      showsHorizontalScrollIndicator={false}
      ItemSeparatorComponent={HListSeparator}
      contentContainerStyle={{ paddingHorizontal: 30 }}
      keyExtractor={(item: sliderData) => item.id + ""}
      renderItem={({ item }: { item: Movie | TV }) => (
        <Text>hi</Text>
        // <VMedia
        //   posterPath={item.poster_path || ""}
        //   originalTitle={
        //     "original_title" in item ? item.original_title : item.original_name
        //   }
        //   voteAverage={item.vote_average}
        //   fullData={item}
        // />
      )}
    />
  </ListContainer>
);

export default HList;
