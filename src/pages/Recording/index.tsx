import React, {useState} from "react";
import {Container, RecordArea, RecordAreaBackground} from "./style";
import HeadingTitle from "../../components/atoms/HeadingTitle";
import NavigationButtons from "../../components/organisms/NavigationButtons";
import {Dimensions, View, Text} from "react-native";
import RecordButton from "../../components/molecules/RecordButton";
import HistoricList from "../../components/organisms/HistoricList";
import RecordingValue from "../../components/organisms/RecordingValue";
import PauseButton from "../../components/molecules/PauseButton";
import RecordingTimeText from "../../components/atoms/RecordingTimeText";
import StopButton from "../../components/molecules/StopButton";
import RecordButtonGroup from "../../components/molecules/RecordButtonGroup";
import RecordingAreaContent from "../../components/organisms/RecordingAreaContent";

export default function RecordingPage() {
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

  return (
    <Container>
      <HeadingTitle>Bem vindo</HeadingTitle>

      <View style={{marginTop: 50}}>
        <NavigationButtons/>
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
