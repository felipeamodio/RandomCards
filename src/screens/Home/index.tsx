import {useState} from 'react';
import {Alert, Keyboard} from 'react-native'
import * as S from './styles';

import theme from '../../global/theme';
import Button from '../../components/Button';

import {useNavigation} from '@react-navigation/native';

export default function Home(){
    const [name, setName] = useState();

    const navigation = useNavigation();

    function handleCards(){
        if(name){
            navigation.navigate('Cards', {name})
        }else{
            Alert.alert('Preencha o campo antes de avançar');
        }
    }

    return(
       <S.Container>
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
       </S.Container>
    )
}