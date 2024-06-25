import React, {useEffect, useState} from "react";
import {Container, EnergyBillMockWrapper} from "./style";
import HeadingTitle from "../../components/atoms/HeadingTitle";
import EnergyFormArea from "../../components/organisms/EnergyFormArea";
import {NativeStackScreenProps} from "@react-navigation/native-stack";
import ContinueButton from "../../components/molecules/ContinueButton";
import {Keyboard, View} from "react-native";
import BackgroundCircle from "../../components/atoms/BackgroundCircle";
import AsyncStorage from "@react-native-async-storage/async-storage";
import {EnergyType} from "@type/EnergyTypes";
import {HeadingSubtitle} from "../ShowerForm/style";
import EnergyBillMock from "../../components/atoms/EnergyBillMock";
import {saveEnergyByDistributor} from "../../services/energyByDistributor";

export default function EnergyFormPage({navigation}: NativeStackScreenProps<any>) {
  const [oldEnergy, setOldEnergy] = useState<EnergyType>();
  const [energy, setEnergy] = useState<EnergyType>();
  const [keyboardShowing, setKeyboardShowing] = useState(false);

  useEffect(() => {
    AsyncStorage.getItem('energy').then(value => {
      if (value) {
        const parsedValue = JSON.parse(value);
        setOldEnergy(parsedValue)
        setEnergy(parsedValue)
      } else {
        setEnergy({
          uf: null,
          energyValue: null,
          energyDistributor: null
        })
      }
    })

    const keyboardDidShowListener = Keyboard.addListener(
      'keyboardDidShow',
      () => setKeyboardShowing(true)
    )

    const keyboardDidHideListener = Keyboard.addListener(
      'keyboardDidHide',
      () => setKeyboardShowing(false)
    )

    return () => {
      keyboardDidHideListener.remove()
      keyboardDidShowListener.remove()
    }
  }, [navigation])

  const goToShowerForm = async () => {
    await AsyncStorage.setItem('energy', JSON.stringify(energy));

    if (energy && oldEnergy && energy.energyValue && energy.energyDistributor && energy.energyValue !== oldEnergy.energyValue) {
      await saveEnergyByDistributor(energy.energyDistributor.id, energy.energyValue)
    }

    const shower = await AsyncStorage.getItem('shower')

    if (!shower) {
      navigation.navigate('ShowerForm')
      return
    }

    navigation.navigate('Recording')
  };

  const handleUpdateEnergy = async (newEnergy: EnergyType) => {
    setEnergy(newEnergy);
  }

  return (
    <Container>
      {!keyboardShowing && (
        <View>
          <HeadingTitle>Quanto você paga de energia?</HeadingTitle>
          <HeadingSubtitle>Você pode encontrar em sua conta de energia, somando o consumo e o custo de
            sistema.</HeadingSubtitle>
        </View>
      )}

      <View style={{marginBottom: 200, position: "relative"}}>
        <EnergyBillMockWrapper>
          <EnergyBillMock/>
        </EnergyBillMockWrapper>
        {energy && <EnergyFormArea energy={energy} updateEnergy={handleUpdateEnergy}/>}
      </View>

      <BackgroundCircle/>

      <ContinueButton onPress={() => void goToShowerForm()}/>
    </Container>
  );
}
