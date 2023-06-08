import { Container, ContainerInner } from './style';
import React from 'react';
import ContinueButtonIcon from '../../atoms/ContinueButtonIcon';
import ContinueButtonText from '../../atoms/ContinueButtonText';

type Props = { onPress: () => void }

export default function ContinueButton({ onPress }: Props) {
    return (
        <Container onPress={onPress}>
            <ContainerInner>
                <ContinueButtonIcon/>
                <ContinueButtonText>Continuar</ContinueButtonText>
            </ContainerInner>
        </Container>
    )
}