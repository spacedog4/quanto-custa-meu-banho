import React, {useEffect, useState} from "react";
import {Container} from "./style";
import HeadingTitle from "../../components/atoms/HeadingTitle";
import EnergyFormArea from "../../components/organisms/EnergyFormArea";
import {NativeStackScreenProps} from "@react-navigation/native-stack";
import ContinueButton from "../../components/molecules/ContinueButton";
import {View} from "react-native";
import BackgroundCircle from "../../components/atoms/BackgroundCircle";
import AsyncStorage from "@react-native-async-storage/async-storage";
import {OptionType} from "../../components/molecules/SelectInput";

export default function EnergyFormPage({navigation}: NativeStackScreenProps<any>) {
  const [uf, setUf] = useState<OptionType | null>(null);
  const [energyValue, setEnergyValue] = useState<number | null>(null);
  const [energyDistributor, setEnergyDistributor] = useState<OptionType | null>(null);

  const logErr = (err: string) => {
    console.error(err)
  }

  useEffect(() => {
    AsyncStorage.getItem('uf').then(
      v => setUf(v ? JSON.parse(v) : null)
    ).catch(logErr);

    AsyncStorage.getItem('energyValue').then(
      v => setEnergyValue(v ? Number(v) : null)
    ).catch(logErr);

    AsyncStorage.getItem('energyDistributor').then(
      v => setEnergyDistributor(v ? JSON.parse(v) : null)
    ).catch(logErr);
  }, []);

  const goToShowerForm = async () => {
    const model = await AsyncStorage.getItem('model')
    const power = await AsyncStorage.getItem('power')

    if (!model || !power) {
      navigation.navigate('ShowerForm')
      return
    }

    navigation.navigate('Recording')

  };

  return (
    <Container>
      <HeadingTitle>Quanto você paga de energia?</HeadingTitle>

      <View style={{marginBottom: 200}}>
        <EnergyFormArea startingValue={{uf, energyDistributor, energyValue}}/>
      </View>

      <BackgroundCircle/>

      <ContinueButton onPress={() => void goToShowerForm()}/>
    </Container>
  );
}
