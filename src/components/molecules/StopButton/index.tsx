import React from 'react';
import {Container} from "./style";
import StopIcon from "../../atoms/StopIcon";

type Props = { onPress: () => void }

export default function StopButton({ onPress }: Props) {
    return (
      <Container onPress={onPress}>
        <StopIcon />
      </Container>
    )
}