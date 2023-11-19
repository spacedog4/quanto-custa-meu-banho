import React, {useEffect, useState} from "react";
import {Container} from "./style";
import HeadingTitle from "../../components/atoms/HeadingTitle";
import EnergyFormArea from "../../components/organisms/EnergyFormArea";
import {NativeStackScreenProps} from "@react-navigation/native-stack";
import ContinueButton from "../../components/molecules/ContinueButton";
import {View} from "react-native";
import BackgroundCircle from "../../components/atoms/BackgroundCircle";
import AsyncStorage from "@react-native-async-storage/async-storage";
import {EnergyType} from "../../types/EnergyTypes";

export default function EnergyFormPage({navigation}: NativeStackScreenProps<any>) {
  const [energy, setEnergy] = useState<EnergyType>();

  useEffect(() => {
    AsyncStorage.getItem('energy').then(value => {
      if (value) {
        setEnergy(JSON.parse(value))
      } else {
        setEnergy({
          uf: null,
          energyValue: null,
          energyDistributor: null
        })
      }
    })
  }, [navigation])

  const goToShowerForm = async () => {
    const shower = await AsyncStorage.getItem('shower')

    if (!shower) {
      navigation.navigate('ShowerForm')
      return
    }

    navigation.navigate('Recording')

  };

  const handleUpdateEnergy = async (energy: EnergyType) => {
    setEnergy(energy);
    await AsyncStorage.setItem('energy', JSON.stringify(energy));
  }

  return (
    <Container>
      <HeadingTitle>Quanto você paga de energia?</HeadingTitle>

      <View style={{marginBottom: 200}}>
        {energy && <EnergyFormArea energy={energy} updateEnergy={handleUpdateEnergy}/>}
      </View>

      <BackgroundCircle/>

      <ContinueButton onPress={() => void goToShowerForm()}/>
    </Container>
  );
}
