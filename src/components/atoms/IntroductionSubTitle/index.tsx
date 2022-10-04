import { TextProps } from 'react-native';
import { Container } from './style';

export default function IntroductionSubTitle({ ...rest }: TextProps) {
    return (
        <Container {...rest} />
    )
}