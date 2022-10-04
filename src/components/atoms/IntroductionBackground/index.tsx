import { BackgroundImage } from './style';
import React from 'react';
import { Dimensions } from 'react-native';

const width = Dimensions.get('window').width
const heroBackground = require('../../../assets/hero-background.png');

export default function IntroductionBackground() {
    return (
        <BackgroundImage source={heroBackground} resizeMode="contain" imageStyle={{
            height: 600,
            width: width / 1.2,
            alignSelf: 'flex-end'
        }}/>
    )
}