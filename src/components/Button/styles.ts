import styled from 'styled-components/native';
import theme from '../../global/theme';

const themeColor = {
    primary: theme.colors.dark,
    secondary: theme.colors.white
}

export const Container = styled.View`
    flex-direction: row;
`;

export const Button = styled.TouchableOpacity`
    background-color: ${theme.colors.dark};
    width: 200px;
    height: 56px;
    align-items: center;
    justify-content: center;
    border-radius: 12px;
`;

export const Label = styled.Text`
    color: ${theme.colors.white};
    font-size: ${theme.size.MMD}px;
    font-weight: 700;
`;