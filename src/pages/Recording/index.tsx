import React from "react";
import {Container} from "./style";
import HeadingTitle from "../../components/atoms/HeadingTitle";
import NavigationButtons from "../../components/organisms/NavigationButtons";
import {View} from "react-native";

export default function RecordingPage() {
  return (
    <Container>
      <HeadingTitle>Bem vindo</HeadingTitle>

      <View style={{marginTop: 50}}>
        <NavigationButtons/>
      </View>
    </Container>
  );
}
