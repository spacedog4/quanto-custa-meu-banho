import React from "react";
import {Container} from "./style";

type Props = {
  placeholder: string;
};

export default function StyledTextInput({placeholder}: Props) {
  return (
    <Container
      placeholder={placeholder}
      placeholderTextColor="#ffffff99"
      keyboardType="numeric"
    >
    </Container>
  );
}
