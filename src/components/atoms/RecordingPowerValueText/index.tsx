import { TextProps } from 'react-native';
import { Container } from './style';

export default function RecordingPowerValueText({...rest}: TextProps) {
    return (
        <Container {...rest} />
    )
}