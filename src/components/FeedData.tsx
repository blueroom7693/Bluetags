import { useNavigation } from "@react-navigation/native";
import React, { useEffect, useState } from "react";
import { TouchableOpacity, Text } from "react-native";
import styled from "styled-components/native";
import { IInfo } from "../screens/Feed";

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
// const FeedData = ({ nftData }: IProps) => {
// function FeedData({ nftData }: IProps) {
const FeedData: React.FC<IProps> = ({
  nftData,

  // _id,
  // createdAt,
  // nft,
  // thumbnail,
  // fullData,
}) => {
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
  // const [data, setData] = useState<IData[]>(Object.values(nftData?.data));
  // useEffect(() => setData(Object.values(nftData.data)), [nftData]);

  // console.log(data);
  // console.log(nftData);
  // console.log("hi");

  // useEffect(() => {
  //   setData(Object.values(nftData?.data).filter(filter));
  // }, [chain, project, sns, today, past, subscribe, nftData]);

  //

  return (
    <TouchableOpacity onPress={goToDetail}>
      <Text>hi</Text>
      {/* <Text>{data._id}</Text> */}
      {/* <HMovie>
        <Poster path={posterPath} />
        <HColumn>
          <Title>
            {originalTitle.length > 30
              ? `${originalTitle.slice(0, 30)}...`
              : originalTitle}
          </Title>
          {releaseDate ? (
            <Release>
              {new Date(releaseDate).toLocaleDateString("ko", {
                month: "long",
                day: "numeric",
                year: "numeric",
              })}
            </Release>
          ) : null}
          {voteAverage ? <Votes votes={voteAverage} /> : null}
          <Overview>
            {overview !== "" && overview.length > 140
              ? `${overview.slice(0, 140)}...`
              : overview}
          </Overview>
        </HColumn>
      </HMovie> */}
    </TouchableOpacity>
  );
};

export default FeedData;
