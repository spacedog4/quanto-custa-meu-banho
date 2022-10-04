import { TextProps } from 'react-native';
import { Container } from './style';

export default function IntroductionTitle({ ...rest }: TextProps) {
    return (
        <Container {...rest} />
    )
}