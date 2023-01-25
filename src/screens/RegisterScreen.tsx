import React, { useContext, useRef, useState } from "react";
import { SafeAreaView, StyleSheet } from "react-native";
import { useEffect } from "react";
import { useForm } from "react-hook-form";
import AuthButton from "../components/auth/AuthButton";
import { TextInput } from "../components/auth/AuthShared";
import styled, { ThemeContext } from "styled-components/native";
import AuthLayoutScroll from "../components/auth/AuthLayoutScroll";
import useMutation from "../libs/client/useMutation";
import { User } from "../utils/type";
import Checkbox from "expo-checkbox";

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

const ErrorText = styled.Text`
  color: ${(props) => props.theme.Text0dp};
  margin-bottom: 10px;
`;

const TermBox = styled.View`
  flex-direction: row;
  width: 300px;
  margin: 5px;
  justify-content: space-between;
  align-items: center;
`;

const TermText = styled.Text`
  color: ${(props) => props.theme.Text0dp};
  font-size: 11px;
  font-weight: 400;
`;
//Typescript

interface EnterForm {
  email: string;
  name: string;
  password: string;
  confirm_password: string;
}

interface EnterResponse {
  user: User;
  error?: {
    email: string;
    password: string;
    confirm_password: string;
    name: string;
  };
}

interface ErrorResponse {
  email: string;
  name: string;
  password: string;
  confirm_password: string;
}

interface UserResponse {
  data: User;
}

export default function CreateAccount({ navigation }) {
  //Use Mutation
  const [enter, { loading, data, error, status }] = useMutation<
    EnterResponse,
    ErrorResponse
  >("https://www.bluetags.app/api/users/sign-up");

  const [
    socialLogin,
    {
      loading: socialLoading,
      data: socialData,
      error: socialError,
      status: socialStatus,
    },
  ] = useMutation("https://www.bluetags.app/api/users/sign-in/social/google");

  const [auth, {}] = useMutation("/api/users/sign-up/auth");

  //isChecked
  const [isChecked1, setChecked1] = useState(false);
  const [isChecked2, setChecked2] = useState(false);
  //themeprovider
  const theme = useContext(ThemeContext);
  //useform
  const {
    register,
    handleSubmit,
    setValue,
    watch,
    setError,
    formState: { errors },
  } = useForm<EnterForm>();
  console.log(errors);
  //error
  // const [errorMessage, setErrorMessage] = useState("");
  useEffect(() => {
    if (error) {
      if (error.confirm_password) {
        setError("confirm_password", { message: error.confirm_password });
      }
      if (error.email) {
        setError("email", { message: error.email });
      }
      if (error.password) {
        setError("password", { message: error.password });
      }
      if (error.name) {
        setError("name", { message: error.name });
      }
    }
    if (status === 200) {
      console.log(data?.user.email);
      auth({ email: data?.user.email });
    }
  }, [data, error, status, setError]);

  //reference
  const name = useRef();
  const passwordRef = useRef();
  const confirmPasswordRef = useRef();
  //auto next
  const onNext = (nextOne) => {
    nextOne?.current?.focus();
  };
  //submit
  const onValid = (validForm: EnterForm) => {
    if (loading) return;
    enter(validForm);
    console.log(data);
    console.log(status);
    console.log(loading);
  };
  //register
  useEffect(() => {
    register("email", {
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
        placeholder="email"
        returnKeyType="next"
        onSubmitEditing={() => onNext(name)}
        placeholderTextColor={"rgba(255, 255, 255, 0.6)"}
        onChangeText={(text) => setValue("email", text)}
      />
      <ErrorText>{errors.email?.message}</ErrorText>
      <SubText>Name</SubText>
      <TextInput
        ref={name}
        placeholder="name"
        returnKeyType="next"
        onSubmitEditing={() => onNext(passwordRef)}
        placeholderTextColor={"rgba(255, 255, 255, 0.6)"}
        onChangeText={(text) => setValue("name", text)}
      />
      <ErrorText>{errors.name?.message}</ErrorText>
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
      <ErrorText>{errors.password?.message}</ErrorText>
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
      <ErrorText>{errors.confirm_password?.message}</ErrorText>
      <TermBox>
        <Checkbox
          style={styles.checkbox}
          value={isChecked1}
          onValueChange={setChecked1}
          color={isChecked1 ? "#0075ff" : undefined}
        />
        <TermText>
          This site is protected by reCAPTCHA and the Google Privacy Policy and
          Terms of Service apply.
        </TermText>
      </TermBox>
      <TermBox>
        <Checkbox
          style={styles.checkbox}
          value={isChecked2}
          onValueChange={setChecked2}
          color={isChecked2 ? "#0075ff" : undefined}
        />
        <TermText>
          Creating an account means you are okay with our Terms of Service,
          Privacy Policy, and our default Notification Settings.
        </TermText>
      </TermBox>
      <AuthButton
        text="Create Account"
        disabled={false}
        onPress={handleSubmit(onValid)}
        disabled={
          !watch("email") ||
          !watch("password") ||
          !watch("confirm_password") ||
          !watch("name")
        }
      />
    </AuthLayoutScroll>
  );
}
const styles = StyleSheet.create({
  checkbox: {
    marginRight: 10,
  },
});
