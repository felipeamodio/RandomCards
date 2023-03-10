import styled from 'styled-components/native';
import {LinearGradient} from 'expo-linear-gradient';
import theme from '../../global/theme';

export const Container = styled.SafeAreaView`
    flex: 1;
    justify-content: center;
    align-items: center;
`;

//melhorar isso
export const Degrade = styled(LinearGradient)`
    width: 100%;
    height: 1000px; 
    align-items: center;
    justify-content: center;
`;

export const Content = styled.View`
    margin-bottom: 30px;
`;

export const Label = styled.Text`
    font-size: ${theme.size.MD}px;
    color: ${theme.colors.white};
    font-weight: bold;
`;

export const Card = styled.Image`
    width: 250px;
    height: 350px;
`;