import React from 'react';
import ShowerIcon from '../../atoms/ShowerIcon';
import IntroductionTitle from '../../atoms/IntroductionTitle';
import IntroductionSubTitle from '../../atoms/IntroductionSubTitle';
import ShowerTube from '../../atoms/ShowerTube';

export default function IntroductionMessage() {
    return (
        <>
            <ShowerIcon />
            <IntroductionTitle>Quanto custa meu banho?</IntroductionTitle>
            <IntroductionSubTitle>Calcule quanto você está gastando para tomar banho</IntroductionSubTitle>
            <ShowerTube/>
        </>
    )
}