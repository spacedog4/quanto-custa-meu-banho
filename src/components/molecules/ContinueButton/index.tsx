import { Container } from './style';
import React from 'react';
import ContinueButtonIcon from '../../atoms/ContinueButtonIcon';
import ContinueButtonText from '../../atoms/ContinueButtonText';

export default function ContinueButton() {
    return (
        <Container>
            <ContinueButtonIcon />
            <ContinueButtonText>Continuar</ContinueButtonText>
        </Container>
    )
}