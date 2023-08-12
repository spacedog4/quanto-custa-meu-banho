import React from 'react';
import {Container} from "./style";
import StopIcon from "../../atoms/StopIcon";

type Props = { onLongPress: () => void }

export default function StopButton({ onLongPress }: Props) {
    return (
      <Container onLongPress={onLongPress}>
        <StopIcon />
      </Container>
    )
}