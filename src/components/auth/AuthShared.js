import styled from "styled-components/native";

export const TextInput = styled.TextInput`
  background-color: ${(props) => props.theme.Bg0dp};
  border-radius: 4px;
  border-width: 1px;
  width: 350px;
  height: 40px;
  border-color: ${(props) => props.theme.Text0dp};
  color: ${(props) => props.theme.Text0dp};
  margin-bottom: ${(props) => (props.lastOne ? "15" : 15)}px;
  padding-left: 15px;
  font-size: 14px;
`;
