import React from "react";
import { Container, SelectInputPlaceholder } from "./style";
import { Entypo } from "@expo/vector-icons";

type Props = {
  placeholder: string;
  onPress: () => void;
};

export default function SelectInputField({ placeholder, onPress }: Props) {
  return (
    <Container onPress={onPress}>
      <>
        <SelectInputPlaceholder>{placeholder}</SelectInputPlaceholder>
        <Entypo name="chevron-small-down" size={24} color="white" />
      </>
    </Container>
  );
}
