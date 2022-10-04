import { StatusBar } from 'expo-status-bar';
import React from 'react';
import {
    Container,
} from './style';

import IntroductionMessage from '../../components/molecules/IntroductionMessage';
import IntroductionBackground from '../../components/atoms/IntroductionBackground';
import ContinueButton from '../../components/molecules/ContinueButton';

export default function IntroductionPage() {
    return (
        <Container>
            <StatusBar style="light"/>
            <IntroductionBackground/>
            <IntroductionMessage/>
            <ContinueButton/>
        </Container>
    )
}