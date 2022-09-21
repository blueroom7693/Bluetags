import { useNavigation } from "@react-navigation/native";
import React, { useEffect, useState } from "react";
import { TouchableOpacity, Text } from "react-native";
import { useRecoilValue } from "recoil";
import styled from "styled-components/native";
import {
  chainString,
  pastString,
  projectString,
  snstString,
  subscirbeProject,
  todayString,
} from "../atom";
import { IInfo } from "../screens/Feed";

//INTERFACE
interface HMediaProps {
  _id: string;
  createdAt: string;
  nft: string;
  thumbnail: string;
  fullData: any;
}
interface IProps {
  nftData: IInfo;
}
interface IData {
  _id: string;
  chain: string;
  nft: string;
  title: string;
  thumbnail: string;
  description: string;
  createdAt: string;
  likes: [string];
  unlikes: [string];
  SNS: string;
}
//CSS
const HeaderText = styled.Text`
  color: white;
`;
//MAIN
function FeedData({ nftData }: IProps, { _id }: IData) {
  //recoil value
  const chain = useRecoilValue(chainString);
  const project = useRecoilValue(projectString);
  const sns = useRecoilValue(snstString);
  const today = useRecoilValue(todayString);
  const past = useRecoilValue(pastString);
  const subscribe = useRecoilValue(subscirbeProject);
  //recoil state

  //filter
  const filter = (info: IData) => {
    let chainBool: boolean = true;
    let projectBool: boolean = true;
    let snsBool: boolean = true;
    let dateBool: boolean = true;
    let subscribeBool: boolean = true;
    const date = new Date(Date.parse(info.createdAt)).getTime();
    if (chain !== "") {
      chainBool = info.chain === chain.toUpperCase();
    }
    if (project !== "") {
      projectBool =
        info.nft ===
        project
          .replaceAll(" ", "")
          .replaceAll("-", "")
          .replaceAll("`", "")
          .toLowerCase();
    }
    if (sns !== "") {
      snsBool = info.SNS === sns;
    }
    if (today.getTime() - date < 0 || date - past.getTime() < 0) {
      dateBool = false;
    }
    if (subscribe.length !== 0) {
      subscribeBool = subscribe.includes(
        info.nft
          .replaceAll(" ", "")
          .replaceAll("-", "")
          .replaceAll("`", "")
          .toLowerCase()
      );
    }
    return chainBool && projectBool && snsBool && dateBool && subscribeBool;
  };

  // NAVIGATION
  const navigation = useNavigation();
  const goToDetail = () => {
    // @ts-ignore
    navigation.navigate("Stack", {
      screen: "Detail",
      params: {
        // ...fullData,
      },
    });
  };
  //setData
  const [data, setData] = useState<IData[]>(Object.values(nftData?.data));
  useEffect(() => setData(Object.values(nftData.data)), [nftData]);
  useEffect(() => {
    setData(Object.values(nftData?.data).filter(filter));
  }, [chain, project, sns, today, past, subscribe, nftData]);

  //RETURN
  return (
    <TouchableOpacity onPress={goToDetail}>
      <HeaderText>hi</HeaderText>
      {data.map((info, index) => (
        <HeaderText>{info.nft}</HeaderText>
      ))}
    </TouchableOpacity>
  );
}

export default FeedData;
