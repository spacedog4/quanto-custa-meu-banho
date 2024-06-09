import React from 'react';
import RecordingValue from "../RecordingValue";
import {TouchableWithoutFeedback, View} from "react-native";
import RecordingTimeText from "../../atoms/RecordingTimeText";
import RecordButton from "../../molecules/RecordButton";
import HistoricList from "../HistoricList";
import RecordingButtons from "../../molecules/RecordingButtons";
import {HistoricItemGroupedByMonthType} from "@type/HistoricTypes";

type Props = {
  isRecording: boolean,
  totalValue: number,
  state: 'recording' | 'paused' | null,
  start: () => void,
  stop: () => void,
  release: () => void,
  pause: () => void,
  handleTimerUpdates: (time: number) => void,
  onHistoryPress: () => void,
  energyValue: number,
  powerValue: number,
  historic: HistoricItemGroupedByMonthType
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
    handleTimerUpdates,
    onHistoryPress,
    energyValue,
    powerValue,
    historic
  }: Props) {
  return isRecording ? (
    <>
      <RecordingValue total={totalValue} energyValue={energyValue} powerValue={powerValue}/>
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
      <TouchableWithoutFeedback onPress={onHistoryPress}>
        <View style={{height: 250, marginTop: 25}}>
          <HistoricList size="small" historic={historic}/>
        </View>
      </TouchableWithoutFeedback>
    </>
  )
}