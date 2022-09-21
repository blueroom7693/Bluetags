import React, { useCallback, useRef, useMemo, useState } from "react";
import { StyleSheet, View, Text, Button } from "react-native";
import BottomSheet, {
  BottomSheetFlatList,
  BottomSheetView,
} from "@gorhom/bottom-sheet";
import { useRecoilState, useRecoilValue } from "recoil";
import { isBottomFilter } from "../../atom";
import styled from "styled-components/native";
import CustomBackground from "../custom/CustomBackground";
import { Entypo } from "@expo/vector-icons";

const BottomFilter = () => {
  // hooks
  const sheetRef = useRef<BottomSheet>(null);
  // SNAPPOINT
  const snapPoints = ["80%"];
  //ISOPEN RECOIL
  const [isOpen, setIsOpen] = useRecoilState(isBottomFilter);
  //CSS
  const BottomContainerText = styled.Text`
    color: white;
    font-size: 20px;
    padding-left: 20px;
  `;
  const TopSection = styled.View`
    border-bottom-width: 1px;
    border-color: grey;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
  `;

  return isOpen ? (
    <BottomSheet
      ref={sheetRef}
      snapPoints={snapPoints}
      enablePanDownToClose={true}
      onClose={() => setIsOpen(false)}
      // backgroundComponent={CustomBackground}
      backgroundStyle={styles.container}
    >
      <BottomSheetView style={styles.container}>
        <TopSection>
          <BottomContainerText>Filter</BottomContainerText>
          <Entypo name="cross" size={36} color="white" />
        </TopSection>
        <BottomContainerText>hello</BottomContainerText>
        <BottomContainerText>hello</BottomContainerText>
        <BottomContainerText>hello</BottomContainerText>
      </BottomSheetView>
    </BottomSheet>
  ) : null;
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#3d3d3d",
  },
});

export default BottomFilter;
