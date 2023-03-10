import {useState, useEffect} from 'react';
import * as S from './styles';

import theme from '../../global/theme';
import Button from '../../components/Button';

import { api } from '../../services/api';

export default function Home(){
    const [card, setCard] = useState('');
    const [nipe, setNipe] = useState('');
    const [image, setImage] = useState('');
    const [id, setId] = useState('');

    // useEffect(() => {
    //     async function getId() {
    //         const response = await api.get(`new/draw/?count=1`);
    //         setId(response.data.deck_id);
    //         console.tron.log('ID =>', response.data.deck_id);
    //     }
    //     getId();
    // }, []);

    // useEffect(() => {
    //     async function getCard() {
    //         const response = await api.get(`luhv4bwbqtcz/draw/?count=1`);
    //         setCard(response.data.cards[0].value);
    //         setNipe(response.data.cards[0].suit);
    //         setImage(response.data.cards[0].image);
    //         console.tron.log('VALUE =>', response.data.cards[0].value);
    //         console.tron.log('NIPE =>', response.data.cards[0].suit);
    //     }
    //     getCard();
    // }, [])

    async function getCard() {
        const response = await api.get(`luhv4bwbqtcz/draw/?count=1`);
        setCard(response.data.cards[0].value);
        setNipe(response.data.cards[0].suit);
        setImage(response.data.cards[0].image);
        console.tron.log('VALUE =>', response.data.cards[0].value);
        console.tron.log('NIPE =>', response.data.cards[0].suit);
    }

    return(
       <S.Container>
        <S.Degrade colors={[`${theme.colors.pokerGreen}`, `${theme.colors.lightGreen}`]}>
        <S.Content>
            <S.Label>carta: {card}</S.Label>
            <S.Label>Nipe: {nipe}</S.Label>
            <S.Card source={{uri: image}} />
        </S.Content>
            <Button background label='Sacar' onPress={getCard} />
        </S.Degrade>
       </S.Container>
    )
}