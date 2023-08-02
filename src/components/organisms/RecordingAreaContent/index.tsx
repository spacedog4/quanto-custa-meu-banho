import React from 'react';
import RecordingValue from "../RecordingValue";
import {View} from "react-native";
import RecordingTimeText from "../../atoms/RecordingTimeText";
import RecordButton from "../../molecules/RecordButton";
import HistoricList from "../HistoricList";
import RecordingButtons from "../../molecules/RecordingButtons";

type Props = {
  isRecording: boolean,
  totalValue: number,
  state: 'recording' | 'paused' | null,
  start: () => void,
  stop: () => void,
  release: () => void,
  pause: () => void,
  handleTimerUpdates: (time: number) => void
}
export default function RecordingAreaContent(
  {
    isRecording,
    totalValue,
    state,
    start,
    stop,
    release,
    pause,
    handleTimerUpdates
  }: Props) {
  return isRecording ? (
    <>
      <RecordingValue value={totalValue}/>
      <View>
        <RecordingButtons
          state={state}
          stop={stop}
          release={release}
          pause={pause}
        />
        <RecordingTimeText
          state={state}
          onTimerUpdates={handleTimerUpdates}
        ></RecordingTimeText>
      </View>
    </>
  ) : (
    <>
      <RecordButton onPress={start}/>
      <View style={{height: 350}}>
        <HistoricList/>
      </View>
    </>
  )
}