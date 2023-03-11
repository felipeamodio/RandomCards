import {useState, useEffect} from 'react';
import {ActivityIndicator, Alert, Dimensions, FlatList, Text, TouchableOpacity, View} from 'react-native';

import {useRoute} from '@react-navigation/native';

import * as S from './styles';

import Button from '../../components/Button';

import { api } from '../../services/api';

interface CardData{
    value: string;
    suit: string;
    image: string;
}

interface CardProps{
    data: CardData;
}

interface Props{
    name: string;
}

function AutoCard({data}: CardProps){
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
    const [cards, setCards] = useState<CardData[]>([]);
    const [isLoading, setIsLoading] = useState(false);
    const [drawCount, setDrawCount] = useState(0);
    const [isAscendingOrder, setIsAscendingOrder] = useState(true);

    const route = useRoute();
    const {name} = route.params as Props;

    const screenWidth = Dimensions.get('window').width;
    const itemWidth = (screenWidth - 20) / 2;

    // useEffect(() => {
    //     getCard();
    // }, []);      

    useEffect(() => {
        async function getCard() {
            setIsLoading(true);
            try {
              const response = await api.get('new/draw/?count=52');
              const filteredCards = response.data.cards.filter(
                (card: Card) => parseInt(card.value) <= 10 || card.value === 'ACE'
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
            //   setDrawCount(1);
            } catch (error) {
              console.error(error);
            }
            setIsLoading(false);
          }
          getCard();
    }, [])

      
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


        function renderItem({ item }: { item: CardData }) {
            if (["JACK", "QUEEN", "KING"].includes(item?.value)) {
                return null;
              }
          return <AutoCard data={item} />;
        }

        function changeOrder() {
            setIsAscendingOrder(!isAscendingOrder);
            setCards(cards.slice().reverse());
          }

    return(
       <S.Container>
        <S.LabelCard>Nome: {name}</S.LabelCard>
            {isLoading ? (
                <ActivityIndicator />
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