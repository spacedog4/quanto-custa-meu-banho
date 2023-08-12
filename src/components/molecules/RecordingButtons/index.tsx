import React from 'react';
import RecordButtonGroup from "../RecordButtonGroup";
import StopButton from "../StopButton";
import RecordButton from "../RecordButton";
import PauseButton from "../PauseButton";

type Props = {
  state: 'recording' | 'paused' | null,
  stop: () => void,
  release: () => void
  pause: () => void
}

export default function RecordingButtons({state, stop, release, pause}: Props) {
  return state === 'paused' ? (
    <RecordButtonGroup>
      <StopButton onLongPress={stop}/>
      <RecordButton onPress={release}/>
    </RecordButtonGroup>
  ) : (
    <PauseButton onLongPress={pause}/>
  )
}