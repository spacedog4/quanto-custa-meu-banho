import React from 'react';
import {Container} from "./style";
import PlayIcon from "../../atoms/PlayIcon";

type Props = { onPress: () => void }

export default function RecordButton({ onPress }: Props) {
    return (
      <Container onPress={onPress}>
        <PlayIcon />
      </Container>
    )
}