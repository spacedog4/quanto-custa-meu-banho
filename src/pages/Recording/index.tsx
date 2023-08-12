import React, {useState} from "react";
import {Container, RecordArea, RecordAreaBackground} from "./style";
import HeadingTitle from "../../components/atoms/HeadingTitle";
import NavigationButtons from "../../components/organisms/NavigationButtons";
import {Dimensions, View} from "react-native";
import RecordingAreaContent from "../../components/organisms/RecordingAreaContent";
import {NativeStackScreenProps} from "@react-navigation/native-stack";

export default function RecordingPage({ navigation }: NativeStackScreenProps<any>) {
  const aspectRadio = Dimensions.get('window').width * 2
  const [state, setState] = useState<'recording' | 'paused' | null>(null)
  const [totalValue, setTotalValue] = useState(0)

  const isRecording = (): boolean => {
    return state === 'recording' || state === 'paused'
  }

  const handleTimerUpdates = (time: number) => {
    const valueKWHour = 0.785455
    const kWh = 5
    const hours = time / 3600

    let value = (kWh * hours * valueKWHour);

    setTotalValue(value)
  }

  const goToHistoricPage = () => {
    navigation.navigate('Historic')
  }

  return (
    <Container>
      <HeadingTitle>Bem vindo</HeadingTitle>

      <View style={{marginTop: 50}}>
        <NavigationButtons goToHistoricPage={goToHistoricPage}/>
      </View>
      <RecordArea style={{justifyContent: isRecording() ? 'space-between' : 'center'}}>
        <RecordingAreaContent
          isRecording={isRecording()}
          totalValue={totalValue}
          state={state}
          start={() => setState('recording')}
          stop={() => setState(null)}
          release={() => setState('recording')}
          pause={() => setState('paused')}
          handleTimerUpdates={handleTimerUpdates}
          onHistoryPress={goToHistoricPage}
        />
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
