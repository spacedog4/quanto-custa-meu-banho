import React from "react";
import {Container, RecordArea, RecordAreaBackground} from "./style";
import HeadingTitle from "../../components/atoms/HeadingTitle";
import NavigationButtons from "../../components/organisms/NavigationButtons";
import {Dimensions, View} from "react-native";
import RecordButton from "../../components/molecules/RecordButton";
import HistoricList from "../../components/organisms/HistoricList";

export default function RecordingPage() {
  const aspectRadio = Dimensions.get('window').width * 2;

  return (
    <Container>
      <HeadingTitle>Bem vindo</HeadingTitle>

      <View style={{marginTop: 50}}>
        <NavigationButtons/>
      </View>
      <RecordArea>
        <RecordButton/>
        <View style={{marginTop: 80}}>
          <HistoricList/>
        </View>
        <RecordAreaBackground style={{
          width: aspectRadio,
          height: aspectRadio,
          borderRadius: aspectRadio,
          top: -100
        }}/>
      </RecordArea>
    </Container>
  );
}
