import React from 'react';
import {Container} from "./style";
import PauseIcon from "../../atoms/PauseIcon";

type Props = { onLongPress?: () => void }

export default function PauseButton({ onLongPress }: Props) {
    return (
      <Container onLongPress={onLongPress}>
        <PauseIcon />
      </Container>
    )
}