import { TextProps } from 'react-native';
import { Container } from './style';

export default function HeadingTitle({ ...rest }: TextProps) {
    return (
        <Container {...rest} />
    )
}