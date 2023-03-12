import styled from 'styled-components/native';
import theme from '../../global/theme';

export const Container = styled.KeyboardAvoidingView`
    flex: 1;
    justify-content: center;
    align-items: center;
    background-color: ${theme.colors.pokerGreen};
`;

export const Content = styled.View`
    margin-bottom: 30px;
    align-items: center;
    justify-content: center;
`;

export const Label = styled.Text`
    font-size: ${theme.size.XS}px;
    color: ${theme.colors.white};
    font-weight: 600;
`;

export const Containerinput = styled.View`
    width: 70%;
    height: 45px;
    background-color: ${theme.colors.white};
    border-radius: 5px;
    border: 1px solid;
    border-color: ${theme.colors.grey};
    align-items: center;
    justify-content: center;
    margin-bottom: 30px;
`;

export const Input = styled.TextInput`
    width: 100%;
    padding-left: 20px;
    color: ${theme.colors.dark}
`;