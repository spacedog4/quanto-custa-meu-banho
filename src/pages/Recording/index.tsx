import React, {useEffect, useState} from "react";
import {Container, RecordArea, RecordAreaBackground} from "./style";
import HeadingTitle from "../../components/atoms/HeadingTitle";
import NavigationButtons from "../../components/organisms/NavigationButtons";
import {Dimensions, View} from "react-native";
import RecordingAreaContent from "../../components/organisms/RecordingAreaContent";
import {NativeStackScreenProps} from "@react-navigation/native-stack";
import AsyncStorage from "@react-native-async-storage/async-storage";
import {EnergyType} from "../../types/EnergyTypes";
import {ShowerType} from "../../types/ShowerTypes";

export default function RecordingPage({navigation}: NativeStackScreenProps<any>) {
  const aspectRadio = Dimensions.get('window').width * 2
  const [state, setState] = useState<'recording' | 'paused' | null>(null)
  const [totalValue, setTotalValue] = useState(0)

  const [energyValue, setEnergyValue] = useState(0)
  const [powerValue, setPowerValue] = useState(0)

  const isRecording = (): boolean => {
    return state === 'recording' || state === 'paused'
  }

  const handleTimerUpdates = (time: number) => {
    const valueKWHour = energyValue
    const kWh = powerValue / 1000
    const hours = time / 3600

    let value = (kWh * hours * valueKWHour);

    setTotalValue(value)
  }

  useEffect(() => {
    navigation.addListener('focus', () => {
      AsyncStorage.getItem('energy').then(
        v => {
          if (v) {
            const energy: EnergyType = JSON.parse(v);
            setEnergyValue(energy.energyValue ?? 0)
          }
        }
      ).catch(err => console.error(err));

      AsyncStorage.getItem('shower').then(
        v => {
          if (v) {
            const shower: ShowerType = JSON.parse(v);
            setPowerValue(shower.power ?? 0)
          }
        }
      ).catch(err => console.error(err));
    });
  }, [navigation])

  const goToHistoricPage = () => {
    navigation.navigate('Historic')
  }

  const goToEnergyFormPage = () => {
    navigation.navigate('EnergyForm')
  }

  const goToShowerFormPage = () => {
    navigation.navigate('ShowerForm')
  }

  const handleStop = async () => {
    setState(null);
    let recordHistoric = []
    let recordHistoricStorage = await AsyncStorage.getItem('record_historic');
    if (recordHistoricStorage) {
      recordHistoric = JSON.parse(recordHistoricStorage);
    }

    recordHistoric.push()

    await AsyncStorage.setItem('record_historic', JSON.stringify(recordHistoric));
  }

  return (
    <Container>
      <HeadingTitle>Bem vindo</HeadingTitle>

      <View style={{flex: 1, justifyContent: 'space-between'}}>
        <View style={{marginTop: 50}}>
          <NavigationButtons
            goToHistoricPage={goToHistoricPage}
            goToEnergyFormPage={goToEnergyFormPage}
            goToShowerFormPage={goToShowerFormPage}
          />
        </View>
        <RecordArea style={{justifyContent: isRecording() ? 'center' : 'space-between', maxHeight: 450}}>
          <RecordingAreaContent
            isRecording={isRecording()}
            totalValue={totalValue}
            state={state}
            start={() => setState('recording')}
            stop={() => handleStop()}
            release={() => setState('recording')}
            pause={() => setState('paused')}
            handleTimerUpdates={handleTimerUpdates}
            onHistoryPress={goToHistoricPage}
            energyValue={energyValue}
            powerValue={powerValue}
          />
          <RecordAreaBackground style={{
            width: aspectRadio,
            height: aspectRadio,
            borderRadius: aspectRadio,
            top: -50
          }}/>
        </RecordArea>
      </View>
    </Container>
  );
}
