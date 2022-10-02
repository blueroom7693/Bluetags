import React, { useEffect, useRef, useState } from "react";
import {
  SafeAreaView,
  View,
  Text,
  // TextInput,
  TouchableOpacity,
} from "react-native";

import { isLogined } from "../atom";
import { useRecoilState } from "recoil";
import { useForm, Controller } from "react-hook-form";
import axios from "axios";

import styled from "styled-components/native";
import { logUserIn } from "../async";
import AuthLayout from "../components/auth/AuthLayout";
import AuthButton from "../components/auth/AuthButton";
import { TextInput } from "../components/auth/AuthShared";

import GoogleSVG from "../assets/images/misc/google.svg";
import FacebookSVG from "../assets/images/misc/facebook.svg";
import TwitterSVG from "../assets/images/misc/twitter.svg";

const InputBox = styled.View`
  flex-direction: row;
  border-bottom-color: #ccc;
  border-bottom-width: 1px;
  padding-bottom: 8px;
  margin-bottom: 25px;
`;

const ErrorText = styled.Text`
  color: white;
  margin-bottom: 10px;
`;

const DetailText = styled.Text`
  color: white;
  font-size: 14px;
`;
const RegisterText = styled.Text`
  color: blue;
  font-size: 14px;
`;
const SNSloginBox = styled.View`
  flex-direction: row;
  justify-content: center;
  align-items: center;
  margin: 20px;
`;
const SNSlogo = styled.TouchableOpacity`
  margin: 10px;
`;

const LoginScreen = ({ navigation }) => {
  //typescript
  interface IForm {
    username: string;
    password: string;
  }
  //setError
  const [errorMessage, setErrorMessage] = useState("");
  //useRecoil
  const [isLogin, setIsLogin] = useRecoilState(isLogined);
  //useForm
  const {
    register,
    setValue,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm<IForm>();
  const onValid = ({ username, password }: IForm) => {
    const body = {
      username,
      password,
    };
    axios
      .post("https://blueroom-info.herokuapp.com/api/v1/user/login", body)
      .then((response) => {
        axios.defaults.headers.common["Authorization"] =
          "Bearer " + response.data.accessToken;
        if (response.status === 200) {
          setIsLogin(true);
          //async storage
          logUserIn(response);
        }
      })
      .catch((error) => setErrorMessage(error.response.data));
  };
  // reference
  const passwordRef = useRef();
  // onNext
  const onNext = (nextOne) => {
    nextOne?.current?.focus();
  };
  // register
  useEffect(() => {
    register("username", {
      required: true,
    });
    register("password", {
      required: true,
    });
  }, [register]);
  //return
  return (
    <AuthLayout>
      <TextInput
        value={watch("username")}
        placeholder="Username"
        returnKeyType="next"
        autoCapitalize="none"
        placeholderTextColor={"rgba(255, 255, 255, 0.6)"}
        onSubmitEditing={() => onNext(passwordRef)}
        onChangeText={(text) => setValue("username", text)}
      />
      <TextInput
        value={watch("password")}
        ref={passwordRef}
        placeholder="Password"
        secureTextEntry
        returnKeyType="done"
        lastOne={true}
        placeholderTextColor={"rgba(255, 255, 255, 0.6)"}
        onSubmitEditing={handleSubmit(onValid)}
        onChangeText={(text) => setValue("password", text)}
      />
      <ErrorText>{errorMessage}</ErrorText>

      <AuthButton
        text="Log In"
        // loading={loading}
        disabled={!watch("username") || !watch("password")}
        onPress={handleSubmit(onValid)}
      />
      <View style={{ alignItems: "center", marginTop: 30 }}>
        <DetailText>or continue with</DetailText>
      </View>
      <SNSloginBox>
        <SNSlogo onPress={() => {}}>
          <GoogleSVG height={30} width={30} />
        </SNSlogo>
        <SNSlogo onPress={() => {}}>
          <FacebookSVG height={30} width={30} />
        </SNSlogo>
        <SNSlogo onPress={() => {}}>
          <TwitterSVG height={30} width={30} />
        </SNSlogo>
      </SNSloginBox>
      <View
        style={{
          flexDirection: "row",
          justifyContent: "center",
          marginBottom: 30,
        }}
      >
        <DetailText>Not a member? </DetailText>
        <TouchableOpacity onPress={() => navigation.navigate("Register")}>
          <RegisterText> Register now</RegisterText>
        </TouchableOpacity>
      </View>
    </AuthLayout>
  );
};

export default LoginScreen;
