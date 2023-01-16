import React, { useContext, useRef, useState } from "react";
import { useEffect } from "react";
import { useForm } from "react-hook-form";
import AuthButton from "../components/auth/AuthButton";
import AuthLayout from "../components/auth/AuthLayout";
import { TextInput } from "../components/auth/AuthShared";
import { axiosInstance } from "../axiosInstance";
import styled, { ThemeContext } from "styled-components/native";
import AuthLayoutScroll from "../components/auth/AuthLayoutScroll";

const ErrorText = styled.Text`
  color: white;
  margin-bottom: 10px;
`;
const MainText = styled.Text`
  font-size: 26px;
  font-weight: 300;
  color: ${(props) => props.theme.Text0dp};
  margin-bottom: 48px;
`;

const SubText = styled.Text`
  font-size: 12px;
  font-weight: 700;
  color: ${(props) => props.theme.Text0dp};
  margin-bottom: 10px;
`;

interface IForm {
  username: string;
  name: string;
  password: string;
  confirm_password: string;
}

export default function CreateAccount({ navigation }) {
  //themeprovider
  const theme = useContext(ThemeContext);

  //error
  const [errorMessage, setErrorMessage] = useState("");
  //useform
  const { register, handleSubmit, setValue, watch } = useForm<IForm>();
  //reference
  const name = useRef();
  const passwordRef = useRef();
  const confirmPasswordRef = useRef();
  //auto next
  const onNext = (nextOne) => {
    nextOne?.current?.focus();
  };
  //submit
  const onValid = ({ username, name, password, confirm_password }: IForm) => {
    const body = {
      username,
      name,
      password,
      confirm_password,
    };
    console.log("submitted");
    console.log(body);
    axiosInstance
      .post("/api/v1/user/join", body)
      .then((response) => {
        if (response.status === 200) {
          navigation.navigate("Login");
          console.log("hi");
        }
      })
      .catch((error) => setErrorMessage(error.response.data));
  };
  //register
  useEffect(() => {
    register("username", {
      required: true,
    });
    register("name", {
      required: true,
    });
    register("password", {
      required: true,
    });
    register("confirm_password", {
      required: true,
    });
  }, [register]);
  //return
  return (
    <AuthLayoutScroll>
      <MainText>Sign up</MainText>
      <SubText>E-mail</SubText>
      <TextInput
        placeholder="username"
        returnKeyType="next"
        onSubmitEditing={() => onNext(name)}
        placeholderTextColor={"rgba(255, 255, 255, 0.6)"}
        onChangeText={(text) => setValue("username", text)}
      />
      <SubText>Name</SubText>

      <TextInput
        ref={name}
        placeholder="name"
        returnKeyType="next"
        onSubmitEditing={() => onNext(passwordRef)}
        placeholderTextColor={"rgba(255, 255, 255, 0.6)"}
        onChangeText={(text) => setValue("name", text)}
      />
      <SubText>Password</SubText>
      <TextInput
        ref={passwordRef}
        placeholder="password"
        autoCapitalize="none"
        returnKeyType="next"
        onSubmitEditing={() => onNext(confirmPasswordRef)}
        placeholderTextColor={"rgba(255, 255, 255, 0.6)"}
        onChangeText={(text) => setValue("password", text)}
      />
      <SubText>Confirm Password</SubText>
      <TextInput
        ref={confirmPasswordRef}
        placeholder="Confirm password"
        secureTextEntry
        returnKeyType="done"
        lastOne={true}
        placeholderTextColor={"rgba(255, 255, 255, 0.6)"}
        onChangeText={(text) => setValue("confirm_password", text)}
        onSubmitEditing={handleSubmit(onValid)}
      />
      <ErrorText>{errorMessage}</ErrorText>
      <AuthButton
        text="Create Account"
        disabled={false}
        onPress={handleSubmit(onValid)}
        disabled={
          !watch("username") ||
          !watch("password") ||
          !watch("confirm_password") ||
          !watch("name")
        }
      />
    </AuthLayoutScroll>
  );
}
