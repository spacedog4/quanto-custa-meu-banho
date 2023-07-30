import React from 'react';
import { Container } from './style';

const pauseIcon = require('../../../assets/pause-icon.png');

export default function PauseIcon() {
    return (
        <Container source={pauseIcon}/>
    )
}