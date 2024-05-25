import React from 'react';
import {Container} from './style';

const energyBillMockImage = require('../../../assets/energy-bill-mock.png');

export default function EnergyBillMock() {
    return (
        <Container source={energyBillMockImage}/>
    )
}