import React from 'react';
import { Container } from './style';

const trashIcon = require('../../../assets/trash.png');

export default function TrashIcon() {
    return (
        <Container source={trashIcon}/>
    )
}