import React from 'react';
import { Container } from './style';

const arrowLeftIcon = require('../../../assets/arrow-left.png');

export default function BackButtonIcon() {
    return (
        <Container source={arrowLeftIcon}/>
    )
}