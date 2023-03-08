import * as S from './styles';

import theme from '../../global/theme';
import { Text, View } from 'react-native';
import Button from '../../components/Button';

export default function Home(){
    return(
       <S.Container>
        <S.Degrade colors={[`${theme.colors.pokerGreen}`, `${theme.colors.lightGreen}`]}>
            <Button background label='Embaralhar' onPress={() => {}} />
        </S.Degrade>
       </S.Container>
    )
}