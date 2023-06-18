import React from "react";
import {Container} from "./style";
import HeadingTitle from "../../components/atoms/HeadingTitle";
import {NativeStackScreenProps} from "@react-navigation/native-stack";
import ContinueButton from "../../components/molecules/ContinueButton";
import {View} from "react-native";
import BackgroundCircle from "../../components/atoms/BackgroundCircle";
import ShowerFormArea from "../../components/organisms/ShowerFormArea";

export default function ShowerFormPage({navigation}: NativeStackScreenProps<any>) {
  const goToShowerForm = () => {
    navigation.navigate('ShowerForm')
  };

  return (
    <Container>
      <HeadingTitle>Nos dia mais sobre seu chuveiro</HeadingTitle>

      <View style={{marginBottom: 200}}>
        <ShowerFormArea/>
      </View>

      <BackgroundCircle/>

      <ContinueButton onPress={goToShowerForm}/>
    </Container>
  );
}
