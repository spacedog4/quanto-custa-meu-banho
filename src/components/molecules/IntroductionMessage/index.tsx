import React from 'react';
import ShowerIcon from '../../atoms/ShowerIcon';
import IntroductionSubTitle from '../../atoms/IntroductionSubTitle';
import ShowerTube from '../../atoms/ShowerTube';
import HeadingTitle from '../../atoms/HeadingTitle';

export default function IntroductionMessage() {
    return (
        <>
            <ShowerIcon />
            <HeadingTitle>Quanto custa meu banho?</HeadingTitle>
            <IntroductionSubTitle>Calcule quanto você está gastando para tomar banho</IntroductionSubTitle>
            <ShowerTube/>
        </>
    )
}