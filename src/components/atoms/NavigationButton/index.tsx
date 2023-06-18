import React from 'react';
import {Container} from "./style";

type Props = {
  children: React.ReactNode
}

export default function NavigationButton({children}: Props) {
  return (
    <Container>
      {children}
    </Container>
  )
}