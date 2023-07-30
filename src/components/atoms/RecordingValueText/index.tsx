import { TextProps } from 'react-native';
import { Container } from './style';

export default function RecordingValueText({...rest}: TextProps) {
    return (
        <Container {...rest} />
    )
}