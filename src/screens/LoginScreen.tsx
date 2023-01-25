import React, { useContext, useEffect, useRef, useState } from "react";
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

import styled, { ThemeContext } from "styled-components/native";
import { logUserIn } from "../async";
import AuthLayout from "../components/auth/AuthLayout";
import AuthButton from "../components/auth/AuthButton";
import { TextInput } from "../components/auth/AuthShared";

import GoogleSVG from "../assets/images/misc/google.svg";
import FacebookSVG from "../assets/images/misc/facebook.svg";
import TwitterSVG from "../assets/images/misc/twitter.svg";
import useMutation from "../libs/client/useMutation";

import * as WebBrowser from "expo-web-browser";
import * as Google from "expo-auth-session/providers/google";
import { getAllNft } from "../axios";
import { useQuery } from "@tanstack/react-query";

const SubText = styled.Text`
  font-size: 12px;
  font-weight: 700;
  color: ${(props) => props.theme.Text0dp};
  margin-bottom: 10px;
`;
const ErrorText = styled.Text`
  color: ${(props) => props.theme.Text0dp};
  margin-bottom: 10px;
`;

const DetailText = styled.Text`
  color: ${(props) => props.theme.Text0dp};
  font-size: 12px;
  font-weight: 700;
  text-decoration-line: underline;
`;
const RegisterText = styled.Text`
  color: ${(props) => props.theme.Primary1dp};
  font-size: 16px;
  font-weight: 700;
`;
const SNSloginBox = styled.View`
  flex-direction: row;
  justify-content: center;
  align-items: center;
  margin: 20px;
  margin-top: 40px;
`;
const SNSlogo = styled.TouchableOpacity`
  margin: 10px;
`;

const LoginScreen = ({ navigation }) => {
  //themeprovider
  const theme = useContext(ThemeContext);
  //typescript
  interface IForm {
    email: string;
    password: string;
  }
  interface LoginResponse {
    error?: string;
    auth?: string;
  }

  //Google Auth
  //setUser,setToken
  const [user, setUser] = React.useState(null);
  const [accessToken, setAccessToken] = React.useState(null);
  //
  WebBrowser.maybeCompleteAuthSession();
  //Request
  const [request, response, promptAsync] = Google.useAuthRequest({
    expoClientId:
      "372775712005-skoe316ceiohdurrpil0k9r8la42hpl3.apps.googleusercontent.com",
    // iosClientId: "GOOGLE_GUID.apps.googleusercontent.com",
    // androidClientId: "GOOGLE_GUID.apps.googleusercontent.com",
    // webClientId: "GOOGLE_GUID.apps.googleusercontent.com",
  });
  // console.log(response);
  // console.log(request);

  //Response
  React.useEffect(() => {
    if (response?.type === "success") {
      const { authentication } = response;
      setAccessToken(response.authentication.accessToken);
      accessToken && fetchUserInfo();
      console.log("okay");
      console.log(accessToken);
    }
  }, [response]);

  //FetchUserInfo
  async function fetchUserInfo() {
    let response = await fetch("https://www.googleapis.com/userinfo/v2/me", {
      headers: { Authorization: `Bearer ${accessToken}` },
    });
    const userInfo = await response.json();
    console.log(userInfo);
    setUser(userInfo);
  }

  //*useMutation
  //login
  const [login, { loading, data, error, status }] = useMutation<LoginResponse>(
    "https://www.bluetags.app/api/users/sign-in"
  );
  //--sociallogin
  const [
    socialLogin,
    {
      loading: socialLoading,
      data: socialData,
      error: socialError,
      status: socialStatus,
    },
  ] = useMutation("https://www.bluetags.app/api/users/sign-in/social/google");
  //--logout

  const [
    logOut,
    { data: logoutData, loading: logoutLoading, status: logoutStatus },
  ] = useMutation("https://www.bluetags.app/api/users/sign-out");

  function logoutFun() {
    logOut({});

    console.log("logout result is:");
    console.log(logoutStatus);

    console.log("result is:");
    axios
      .get("https://www.bluetags.app/api/users")
      .then((res) => console.log(res.data));
    setUser(null);
  }

  //*setError
  const [errorMessage, setErrorMessage] = useState("");
  //*useRecoil
  const [isLogin, setIsLogin] = useRecoilState(isLogined);
  //*useForm
  const {
    register,
    setValue,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm<IForm>();

  //onValid
  const onValid = ({ email, password }: IForm) => {
    const body = {
      email,
      password,
    };
    // New Method Login
    if (loading) return;
    login(body);
    if (status === 200) {
      setIsLogin(true);
      console.log("login result is :");
      //async storage
      logUserIn(data);
    }
    setErrorMessage(error);
  };

  //social login
  useEffect(() => {
    if (user && !socialLoading) {
      socialLogin({ name: user.name, email: user.email, image: user.picutre });
    }
    console.log(socialData);
  }, [user]);

  // reference
  const passwordRef = useRef();

  // onNext
  const onNext = (nextOne) => {
    nextOne?.current?.focus();
  };

  // register
  useEffect(() => {
    register("email", {
      required: true,
    });
    register("password", {
      required: true,
    });
  }, [register]);

  //usercheck
  useEffect(() => {
    axios.get("https://www.bluetags.app/api/users/check").then((response) => {
      console.log(response.data);
      if (response.data) {
        console.log("user ON");
        // console.log(response.data.email);
        // console.log(response.data);
        setIsLogin(true);
      } else {
        console.log("user OFF");
        setIsLogin(false);
      }
    });
  }, [status, socialStatus]);

  //
  const { isLoading: isLoadingNft, data: NftData } = useQuery(
    ["homeInfo"],
    getAllNft
  );
  if (!isLoadingNft) {
    // console.log(Object.values(NftData.data.bluecards)[2].id);
    // console.log(Object.values(NftData.data));
    // console.log(Object.values(NftData.data.bluecards)[2].project.chain);
  }
  //RETURN
  return (
    <AuthLayout>
      <SubText>E-mail</SubText>
      <TextInput
        value={watch("email")}
        placeholder="email"
        returnKeyType="next"
        autoCapitalize="none"
        onSubmitEditing={() => onNext(passwordRef)}
        onChangeText={(text) => setValue("email", text)}
      />
      <SubText>Password</SubText>

      <TextInput
        value={watch("password")}
        ref={passwordRef}
        placeholder="Password"
        secureTextEntry
        returnKeyType="done"
        lastOne={true}
        onSubmitEditing={handleSubmit(onValid)}
        onChangeText={(text) => setValue("password", text)}
      />
      <ErrorText>{errorMessage}</ErrorText>

      <AuthButton
        text="Log In"
        // loading={loading}
        disabled={!watch("email") || !watch("password")}
        onPress={handleSubmit(onValid)}
      />

      <SNSloginBox>
        <SNSlogo
          disabled={!request}
          onPress={() => {
            promptAsync();
          }}
        >
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
          justifyContent: "space-between",
          paddingLeft: 70,
          paddingRight: 70,
          paddingTop: 30,
        }}
      >
        <TouchableOpacity onPress={() => navigation.navigate("Register")}>
          <RegisterText> Sign up +</RegisterText>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => logoutFun()}>
          <RegisterText> logout</RegisterText>
        </TouchableOpacity>
        <DetailText>Not a member? </DetailText>
      </View>
    </AuthLayout>
  );
};

export default LoginScreen;
