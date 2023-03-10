import {useState} from 'react';
import {Alert, Keyboard} from 'react-native'
import * as S from './styles';

import {useNavigation} from '@react-navigation/native';

import theme from '../../global/theme';
import Button from '../../components/Button';

import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { IStackRoutes } from '../../routes/index';

type CardScreenNavigationProp = NativeStackNavigationProp<IStackRoutes, "Cards">;

type HomeProps = {
    navigation: CardScreenNavigationProp;
}

export default function Home({navigation}: HomeProps){
    const [name, setName] = useState();

    const handleCards = () => {
        if(name){
            navigation.navigate('Cards')
        }else{
            Alert.alert('Preencha o campo antes de avançar');
        }
    }

    return(
       <S.Container>
        <S.Degrade colors={[`${theme.colors.pokerGreen}`, `${theme.colors.lightGreen}`]}>
            <S.Content>
                <S.Label>♥️ Olá, bora fazer um joguinho de cartas? ♠️</S.Label>
                <S.Label>Mas antes, como você gostaria de ser chamado?</S.Label>
            </S.Content>

            <S.Containerinput>
                <S.Input 
                    value={name}
                    onChangeText={(text) => setName(text)}
                    placeholder="Digite o seu nome ou apelido"
                    placeholderTextColor={theme.colors.grey}
                    onSubmitEditing={Keyboard.dismiss}
                />
            </S.Containerinput>
            <Button label='Ver cartas' onPress={handleCards} />
        </S.Degrade>
       </S.Container>
    )
}