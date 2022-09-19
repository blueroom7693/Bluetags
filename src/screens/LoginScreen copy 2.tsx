import React, { useState } from "react";
import {
  SafeAreaView,
  View,
  Text,
  TextInput,
  TouchableOpacity,
} from "react-native";

import MaterialIcons from "react-native-vector-icons/MaterialIcons";
import Ionicons from "react-native-vector-icons/Ionicons";

import LoginSVG from "../assets/images/misc/login.svg";
import GoogleSVG from "../assets/images/misc/google.svg";
import FacebookSVG from "../assets/images/misc/facebook.svg";
import TwitterSVG from "../assets/images/misc/twitter.svg";

import CustomButton from "../components/CustomButton";
import InputField from "../components/InputField";

import { isLogined } from "../atom";
import { useRecoilState, useRecoilValue } from "recoil";
import { useForm, Controller } from "react-hook-form";
import { useCookies } from "react-cookie";
import axios from "axios";
import AsyncStorage from "@react-native-async-storage/async-storage";

import styled from "styled-components";
import { logUserIn } from "../async";

const InputBox = styled.View`
  flex-direction: row;
  border-bottom-color: #ccc;
  border-bottom-width: 1px;
  padding-bottom: 8px;
  margin-bottom: 25px;
`;

const LoginScreen = ({ navigation }) => {
  //typescript
  interface IForm {
    username: string;
    password: string;
  }
  //setToken
  const [token, setToken, removeToken] = useCookies(["token", "refreshToken"]);
  //setError
  const [errorMessage, setErrorMessage] = useState("");
  //useRecoil
  // const isLogin = useRecoilValue(isLogined);
  //setRecoilValue
  const [isLogin, setIsLogin] = useRecoilState(isLogined);
  //useForm
  const {
    register,
    setValue,
    handleSubmit,
    control,
    reset,
    formState: { errors },
  } = useForm<IForm>();
  const onSubmit = ({ username, password }: IForm) => {
    const body = {
      username,
      password,
    };
    axios
      .post("https://blueroom-info.herokuapp.com/api/v1/user/login", body)
      .then((response) => {
        axios.defaults.headers.common["Authorization"] =
          "Bearer " + response.data.accessToken;
        setToken("refreshToken", response.data.refreshToken);
        setToken("token", response.data.accessToken);
        if (response.status === 200) {
          setIsLogin(true);
          //async storage
          logUserIn(response);
        }
      })
      .catch((error) => setErrorMessage(error.response.data));
  };

  const onChange = (arg) => {
    return {
      value: arg.nativeEvent.text,
    };
  };

  console.log("errors", errors);

  //return
  return (
    <SafeAreaView style={{ flex: 1, justifyContent: "center" }}>
      <View style={{ paddingHorizontal: 25 }}>
        <View style={{ alignItems: "center" }}>
          {/* <LoginSVG
            height={300}
            width={300}
            style={{ transform: [{ rotate: "-5deg" }] }}
          /> */}
        </View>

        <Text
          style={{
            fontSize: 28,
            fontWeight: "500",
            color: "#333",
            marginBottom: 30,
          }}
        >
          Login
        </Text>
        {/* 테스트용 */}
        <Text>First name</Text>
        <Controller
          control={control}
          render={({ field: { onChange, onBlur, value } }) => (
            <TextInput
              onBlur={onBlur}
              onChangeText={(value) => onChange(value)}
              value={value}
            />
          )}
          name="username"
          rules={{ required: true }}
        />
        <Text>Last name</Text>
        <Controller
          control={control}
          render={({ field: { onChange, onBlur, value } }) => (
            <TextInput
              onBlur={onBlur}
              onChangeText={(value) => onChange(value)}
              value={value}
            />
          )}
          name="password"
          rules={{ required: true }}
        />
        {/* 테스트용 */}
        {/* 
        <InputField
          label={"Email ID"}
          icon={
            <MaterialIcons
              name="alternate-email"
              size={20}
              color="#666"
              style={{ marginRight: 5 }}
            />
          }
          keyboardType="email-address"
        />

        <InputField
          label={"Password"}
          icon={
            <Ionicons
              name="ios-lock-closed-outline"
              size={20}
              color="#666"
              style={{ marginRight: 5 }}
            />
          }
          inputType="password"
          fieldButtonLabel={"Forgot?"}
          fieldButtonFunction={() => {}}
        /> */}

        <CustomButton label={"Login"} onPress={handleSubmit(onSubmit)} />

        {/* 하위 로그인 방법들 */}

        {/* <Text style={{ textAlign: "center", color: "#666", marginBottom: 30 }}>
          Or, login with ...
        </Text>

        <View
          style={{
            flexDirection: "row",
            justifyContent: "space-between",
            marginBottom: 30,
          }}
        >
          <TouchableOpacity
            onPress={() => {}}
            style={{
              borderColor: "#ddd",
              borderWidth: 2,
              borderRadius: 10,
              paddingHorizontal: 30,
              paddingVertical: 10,
            }}
          >
            <GoogleSVG height={24} width={24} />
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => {}}
            style={{
              borderColor: "#ddd",
              borderWidth: 2,
              borderRadius: 10,
              paddingHorizontal: 30,
              paddingVertical: 10,
            }}
          >
            <FacebookSVG height={24} width={24} />
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => {}}
            style={{
              borderColor: "#ddd",
              borderWidth: 2,
              borderRadius: 10,
              paddingHorizontal: 30,
              paddingVertical: 10,
            }}
          >
            <TwitterSVG height={24} width={24} />
          </TouchableOpacity>
        </View> */}

        <View
          style={{
            flexDirection: "row",
            justifyContent: "center",
            marginBottom: 30,
          }}
        >
          <Text>New to the app?</Text>
          <TouchableOpacity onPress={() => navigation.navigate("Register")}>
            <Text style={{ color: "#AD40AF", fontWeight: "700" }}>
              {" "}
              Register
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default LoginScreen;
