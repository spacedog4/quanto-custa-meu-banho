import React from "react";
import {Container} from "./style";
import HeadingTitle from "../../components/atoms/HeadingTitle";
import EnergyFormArea from "../../components/organisms/EnergyFormArea";
import {NativeStackScreenProps} from "@react-navigation/native-stack";
import ContinueButton from "../../components/molecules/ContinueButton";
import {View} from "react-native";
import BackgroundCircle from "../../components/atoms/BackgroundCircle";

export default function EnergyFormPage({navigation}: NativeStackScreenProps<any>) {
  const goToEnergyForm = () => {
    navigation.navigate('EnergyForm')
  };

  return (
    <Container>
      <HeadingTitle>Quanto você paga de energia?</HeadingTitle>

      <View style={{marginBottom: 200}}>
        <EnergyFormArea/>
      </View>

      <BackgroundCircle/>

      <ContinueButton onPress={goToEnergyForm}/>
    </Container>
  );
}
