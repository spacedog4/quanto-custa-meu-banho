import React from 'react';
import { Container } from './style';

const downIcon = require('../../../assets/down-icon.png');

export default function DownIcon({...rest}) {
    return (
        <Container source={downIcon} {...rest}/>
    )
}