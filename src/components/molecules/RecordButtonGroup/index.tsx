import {Container} from './style';
import React from "react";

type Props = {
  children: React.ReactNode
}


export default function RecordButtonGroup({children}: Props) {
  return (
    <Container>
      {children}
    </Container>
  )
}