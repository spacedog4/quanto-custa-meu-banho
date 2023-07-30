import {TextProps} from 'react-native';
import {Container} from './style';
import {useEffect, useState} from "react";

type Props = {
  state: 'recording' | 'paused' | null,
  onTimerUpdates: (time: number) => void
} & TextProps;

export default function RecordingTimeText({state, onTimerUpdates, ...rest}: Props) {
  const [time, setTime] = useState(0)
  const [intervalId, setIntervalId] = useState<ReturnType<typeof setInterval>>()

  const startStopWatch = () => {
    let currTime = time;

    if (!intervalId) {
      const interval = setInterval(() => {
        currTime++
        setTime(currTime)
        onTimerUpdates(currTime)
      }, 1000)
      setIntervalId(interval)
    }
  }

  useEffect(() => {
    if (state === 'recording') {
      startStopWatch()
    } else if (state === 'paused') {
      clearInterval(intervalId)
      setIntervalId(undefined)
    } else {
      setTime(0)
    }
  }, [state])

  const padForTwo = (value: number) => {
    return value <= 9 ? `0${value}` : value;
  }

  const getSeconds = () => {
    return time % 60;
  }

  const getRemainSeconds = () => {
    return time - getSeconds();
  }

  const getMinutes = () => {
    return (getRemainSeconds() / 60) % 60;
  }

  const getRemainMinutes = () => {
    return (getRemainSeconds() / 60) - getMinutes()
  }

  const getHours = () => {
    return (getRemainMinutes() / 60) % 60;
  }

  return (
    <Container {...rest}>
      {padForTwo(getHours())}:{padForTwo(getMinutes())}:{padForTwo(getSeconds())}
    </Container>
  )
}