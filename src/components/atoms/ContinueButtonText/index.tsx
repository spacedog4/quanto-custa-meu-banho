import { TextProps } from 'react-native';
import { Container } from './style';

export default function ContinueButtonText({...rest}: TextProps) {
    return (
        <Container {...rest} />
    )
}