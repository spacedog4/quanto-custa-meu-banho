import React, {useEffect, useState} from "react";
import {Container, RecordArea, RecordAreaBackground} from "./style";
import HeadingTitle from "../../components/atoms/HeadingTitle";
import NavigationButtons from "../../components/organisms/NavigationButtons";
import {Dimensions, View} from "react-native";
import RecordingAreaContent from "../../components/organisms/RecordingAreaContent";
import {NativeStackScreenProps} from "@react-navigation/native-stack";
import AsyncStorage from "@react-native-async-storage/async-storage";
import {EnergyType} from "@type/EnergyTypes";
import {ShowerType} from "@type/ShowerTypes";
import {HistoricItemType} from "@type/HistoricTypes";

export default function RecordingPage({navigation}: NativeStackScreenProps<any>) {
  const aspectRadio = Dimensions.get('window').width * 2
  const [state, setState] = useState<'recording' | 'paused' | null>(null)
  const [totalValue, setTotalValue] = useState(0)

  const [energy, setEnergy] = useState<EnergyType>()
  const [shower, setShower] = useState<ShowerType>()
  const [historic, setHistoric] = useState<HistoricItemType[]>([])

  const isRecording = (): boolean => {
    return state === 'recording' || state === 'paused'
  }

  const handleTimerUpdates = (time: number) => {
    const valueKWHour = energy?.energyValue ?? 0
    const kWh = (shower?.power ?? 0) / 1000
    const hours = time / 3600

    let value = (kWh * hours * valueKWHour);

    setTotalValue(value)
  }

  useEffect(() => {
    navigation.addListener('focus', () => {
      AsyncStorage.getItem('energy').then(
        v => {
          if (v) {
            setEnergy(JSON.parse(v))
          } else {
            goToEnergyFormPage()
          }
        }
      ).catch(err => console.error(err));

      AsyncStorage.getItem('shower').then(
        v => {
          if (v) {
            setShower(JSON.parse(v))
          } else {
            goToShowerFormPage()
          }
        }
      ).catch(err => console.error(err));

      AsyncStorage.getItem('historic').then(
        v => {
          if (v) {
            setHistoric(JSON.parse(v))
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

    if (!shower || !energy) {
      console.log('No shower or energy setted');
      return;
    }

    historic.unshift({
      value: totalValue,
      date: new Date(),
      shower: shower,
      energy: energy
    })

    await AsyncStorage.setItem('historic', JSON.stringify(historic));
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
        {(shower && energy) && (
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
              energyValue={energy.energyValue ?? 0}
              powerValue={shower.power ?? 0}
              historic={historic}
            />
            <RecordAreaBackground style={{
              width: aspectRadio,
              height: aspectRadio,
              borderRadius: aspectRadio,
              top: -50
            }}/>
          </RecordArea>
        )}
      </View>
    </Container>
  );
}
