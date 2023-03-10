import * as S from './styles';

interface ButtonProps{
    label: string;
    onPress: () => void;
}

export default function Button({label, onPress}: ButtonProps){
    return(
        <S.Container>
            <S.Button onPress={onPress} activeOpacity={0.7}>
                <S.Label>{label}</S.Label>
            </S.Button>
        </S.Container>
    )
}