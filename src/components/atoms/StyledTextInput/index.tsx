import React from "react";
import {Container} from "./style";
import {TextInputProps} from "react-native";

type Props = {
  placeholder: string;
  value: string,
  setValue: (value: string) => void
};

export default function StyledTextInput({...rest}: TextInputProps) {
  return (
    <Container
      {...rest}
      placeholderTextColor="#ffffff99"
    >
    </Container>
  );
}
