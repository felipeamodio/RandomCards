import styled from 'styled-components/native';
import {LinearGradient} from 'expo-linear-gradient';

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