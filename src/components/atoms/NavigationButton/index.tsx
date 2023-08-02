import React from 'react';
import {Container} from "./style";

type Props = {
  children: React.ReactNode,
  onPress: () => void
}

export default function NavigationButton({children, onPress}: Props) {
  return (
    <Container onPress={onPress}>
      {children}
    </Container>
  )
}