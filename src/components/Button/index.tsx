import {ColorValue, StyleProp} from 'react-native';
import * as S from './styles';

interface ButtonProps{
    label: string;
    background: StyleProp<ColorValue>;
    onPress: () => void;
}

export default function Button({label, background, onPress}: ButtonProps){
    return(
        <S.Container>
            <S.Button background={background} onPress={onPress} activeOpacity={0.7}>
                <S.Label>{label}</S.Label>
            </S.Button>
        </S.Container>
    )
}