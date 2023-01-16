import React, { useContext } from "react";
import { ActivityIndicator } from "react-native";
import styled, { ThemeContext } from "styled-components/native";
// import { colors } from "../../colors";

const Button = styled.TouchableOpacity`
  background-color: ${(props) => props.theme.Primary0dp};
  width: 350px;
  height: 40px;
  justify-content: center;
  border-radius: 10px;
  opacity: ${(props) => (props.disabled ? "0.5" : "1")};
`;

const ButtonText = styled.Text`
  color: ${(props) => props.theme.BtnInner};
  font-size: 12px;
  font-weight: 700;
  text-align: center;
`;

export default function AuthButton({ onPress, disabled, text, loading }) {
  const theme = useContext(ThemeContext);

  return (
    <Button disabled={disabled} onPress={onPress}>
      {loading ? (
        <ActivityIndicator color="white" />
      ) : (
        <ButtonText>{text}</ButtonText>
      )}
    </Button>
  );
}
