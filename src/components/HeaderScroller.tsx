import React from "react";
import { useRecoilState } from "recoil";
import styled from "styled-components/native";
import { isBottomFilter } from "../atom";

const HeaderScroll = styled.ScrollView`
  flex-direction: row;
  flex: 0.1;
  background-color: black;
  /* height: WINDOW_HEIGHT/4; */
`;
const HeaderTitle = styled.Text`
  font-size: 24px;
  color: white;
  margin-left: 30px;
  font-weight: 800;
`;
const Filterbox = styled.TouchableOpacity`
  margin-left: 15px;
  border-width: 2px;
  border-radius: 10px;
  border-color: white;
  background-color: grey;
  padding-left: 10px;
  padding-right: 10px;
`;
const FilterText = styled.Text`
  color: white;
  font-size: 12px;
`;
const HeaderScroller = () => {
  //BOTTOM FILTER
  const [bottomFilter, setBottomFilter] = useRecoilState(isBottomFilter);
  const openFilter = () => {
    setBottomFilter(true);
  };

  return (
    <HeaderScroll horizontal={true} showsHorizontalScrollIndicator={false}>
      <Filterbox onPress={openFilter}>
        <FilterText>Filter</FilterText>
      </Filterbox>
      <Filterbox>
        <FilterText>Detail</FilterText>
      </Filterbox>
      <Filterbox>
        <FilterText>#event</FilterText>
      </Filterbox>
      <Filterbox>
        <FilterText>#announcement</FilterText>
      </Filterbox>
      <Filterbox>
        <FilterText>#voting</FilterText>
      </Filterbox>
      <Filterbox>
        <FilterText>#minting</FilterText>
      </Filterbox>
      <Filterbox>
        <FilterText>#off-line</FilterText>
      </Filterbox>
      <Filterbox>
        <FilterText>#proposal</FilterText>
      </Filterbox>
    </HeaderScroll>
  );
};

export default HeaderScroller;
