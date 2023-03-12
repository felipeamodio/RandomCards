import {useState, useEffect} from 'react';
import {ActivityIndicator, Alert, Dimensions, FlatList, Text, TouchableOpacity, View} from 'react-native';

import {useRoute} from '@react-navigation/native';

import * as S from './styles';

import Button from '../../components/Button';
import { api } from '../../services/api';
import theme from '../../global/theme';

interface ICardData{
    value: string;
    suit: string;
    image: string;
}

interface ICardProps{
    data: ICardData;
}

interface IProps{
    name: string;
}

// Traduzindo o nome dos naipes e das cartas
function TranslateCard({data}: ICardProps){
    function translateSuit(suit: string): string {
        switch (suit) {
          case 'CLUBS':
            return 'PAUS';
          case 'HEARTS':
            return 'COPAS';
          case 'SPADES':
            return 'ESPADAS';
          case 'DIAMONDS':
            return 'OURO';
          default:
            return suit;
        }
      };

    function translateValue(value: string): string {
        switch (value) {
          case 'ACE':
            return 'Ás';
          default:
            return value;
        }
      };

    return(
        <S.ContainerCard>
            <S.LabelCard>{translateValue(data?.value)} de {translateSuit(data?.suit)}</S.LabelCard>
            <S.Card source={{uri: data?.image}} />
        </S.ContainerCard>
    )
}

export default function Cards(){
    const [cards, setCards] = useState<ICardData[]>([]);
    const [isLoading, setIsLoading] = useState(false);
    const [drawCount, setDrawCount] = useState(0);
    const [isAscendingOrder, setIsAscendingOrder] = useState(true);

    const route = useRoute();
    const {name} = route.params as IProps;

    const screenWidth = Dimensions.get('window').width;
    const itemWidth = (screenWidth - 20) / 2;     

    // Retornando as cartas do baralho, puxando da api
    useEffect(() => {
        async function getCard() {
            setIsLoading(true);
            try {
              const response = await api.get('new/draw/?count=52');
              const filteredCards = response.data.cards.filter(
                (card: ICardData) => parseInt(card.value) <= 10 || card.value === 'ACE'
              );
              const newCards = [];
              while(newCards.length < 5){
                const randomIndex = Math.floor(Math.random() * filteredCards.length);
                newCards.push(filteredCards[randomIndex]);
                filteredCards.splice(randomIndex, 1);
                if(filteredCards.length === 0){
                    break;
                }
              }
              setCards(newCards);
            } catch (error) {
              console.error(error);
            }
            setIsLoading(false);
          }
          getCard();
    }, [])

      //função que permite sacar masi uma carta, no máximo 3 vezes
      async function getNewCard(){
        if(drawCount < 3){
            setIsLoading(true)
            try {
            const response = await api.get('new/draw/?count=1');
            const newCard = response.data.cards[0];
            setCards([...cards, newCard]);
            setDrawCount(drawCount + 1)
            } catch (error) {
            console.error(error);
            }
            setIsLoading(false);
            }else{
                return Alert.alert('Você pode sacar apenas 3 cartas');
            }
        }


        // função para não retornar as cartas de Rei, Valete e Rainha
        function renderItem({ item }: { item: ICardData }) {
            if (["JACK", "QUEEN", "KING"].includes(item?.value)) {
                return null;
              }
          return <TranslateCard data={item} />;
        }

        function changeOrder() {
            setIsAscendingOrder(!isAscendingOrder);
            setCards(cards.slice().reverse());
          }

    return(
       <S.Container>
        <S.ContainerTitle>
          <S.Title>Olá, {name}</S.Title>
          <S.Rules>Aqui estão as 5 cartas geradas. Você pode sacar somente mais 3 cartas, e pode embaralha-lás também 😄</S.Rules>
        </S.ContainerTitle>
            {isLoading ? (
                <ActivityIndicator size="small" color={theme.colors.white} />
            ) : (
            <>
                <S.Content>
                    <FlatList 
                        data={cards}
                        renderItem={renderItem}
                        keyExtractor={(item, index) => `${item?.value}-${item?.suit}-${index}`}
                        style={{height: itemWidth * 3, flexWrap: 'wrap'}}
                        contentContainerStyle={{paddingHorizontal: 10}}
                        numColumns={3}
                        removeClippedSubviews={false}
                        showsHorizontalScrollIndicator={false}
                    />
                </S.Content>

                <S.ContainerButton>
                    <Button label='Tire uma carta' onPress={getNewCard} />
                </S.ContainerButton>

                <S.ContainerButton>
                    <Button label='Embaralhe as cartas' onPress={changeOrder} />
                </S.ContainerButton>
            </>
            )
        }
       </S.Container>
    )
}