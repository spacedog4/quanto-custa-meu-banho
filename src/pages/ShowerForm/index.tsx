import React, {useEffect, useState} from "react";
import {Container} from "./style";
import HeadingTitle from "../../components/atoms/HeadingTitle";
import {NativeStackScreenProps} from "@react-navigation/native-stack";
import ContinueButton from "../../components/molecules/ContinueButton";
import {View} from "react-native";
import BackgroundCircle from "../../components/atoms/BackgroundCircle";
import ShowerFormArea from "../../components/organisms/ShowerFormArea";
import AsyncStorage from "@react-native-community/async-storage";

export default function ShowerFormPage({navigation}: NativeStackScreenProps<any>) {
  const [model, setModel] = useState<string | null>(null);
  const [power, setPower] = useState<string | null>(null);

  const logErr = (err: string) => {
    console.error(err)
  }

  useEffect(() => {
    AsyncStorage.getItem('model').then(
      v => setModel(v)
    ).catch(logErr);

    AsyncStorage.getItem('power').then(
      v => setPower(v)
    ).catch(logErr);
  }, []);

  const goToNext = () => {
    navigation.navigate('Recording')
  };

  return (
    <Container>
      <HeadingTitle>Nos diga mais sobre seu chuveiro</HeadingTitle>

      <View style={{marginBottom: 200}}>
        <ShowerFormArea startingValue={{model, power}}/>
      </View>

      <BackgroundCircle/>

      <ContinueButton onPress={goToNext}/>
    </Container>
  );
}
