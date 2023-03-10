import {useState, useEffect} from 'react';
import * as S from './styles';

import theme from '../../global/theme';
import Button from '../../components/Button';

import { api } from '../../services/api';
import { Alert } from 'react-native';

export default function Cards(){
    const [card, setCard] = useState('');
    const [nipe, setNipe] = useState('');
    const [image, setImage] = useState('');

    async function getCard() {
        const response = await api.get(`luhv4bwbqtcz/draw/?count=1`);
            setCard(response.data.cards[0].value);
            setNipe(response.data.cards[0].suit);
            setImage(response.data.cards[0].image);

    }

    return(
       <S.Container>
        <S.Degrade colors={[`${theme.colors.pokerGreen}`, `${theme.colors.lightGreen}`]}>
        <S.Content>
            <S.Label>carta: {card}</S.Label>
            <S.Label>Nipe: {nipe}</S.Label>
            <S.Card source={{uri: image}} />
        </S.Content>
            <Button label='Gerar Cartas' onPress={getCard} />
        </S.Degrade>
       </S.Container>
    )
}