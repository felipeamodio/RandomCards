import {ColorValue, StyleProp} from 'react-native';
import styled from 'styled-components/native';
import theme from '../../global/theme';

interface ButtonStylesProps{
    background: StyleProp<ColorValue>;
}

export const Container = styled.View`
    flex-direction: row;
`;

export const Button = styled.TouchableOpacity<ButtonStylesProps>`
    background-color: ${({background}) => background ? theme.colors.dark : theme.colors.gold};
    width: 200px;
    height: 56px;
    align-items: center;
    justify-content: center;
    border-radius: 12px;
`;

export const Label = styled.Text`
    color: ${theme.colors.white};
    font-size: ${theme.size.MMD}px;
`;