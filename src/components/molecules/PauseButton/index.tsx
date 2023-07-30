import React from 'react';
import {Container} from "./style";
import PauseIcon from "../../atoms/PauseIcon";

type Props = { onPress: () => void }

export default function PauseButton({ onPress }: Props) {
    return (
      <Container onPress={onPress}>
        <PauseIcon />
      </Container>
    )
}