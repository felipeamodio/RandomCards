import styled from 'styled-components/native';
import theme from '../../global/theme';

export const Container = styled.SafeAreaView`
    flex: 1;
    justify-content: center;
    align-items: center;
    background-color: ${theme.colors.pokerGreen};
`;

export const ContainerCard = styled.View`
    padding: 3px;
`;

export const LabelCard = styled.Text`
    text-align: center;
    color: ${theme.colors.white};
    font-weight: 700;
`;

export const ContainerTitle = styled.View`
    padding-left: 20px;
    padding-right: 20px;
`;

export const Title = styled.Text`
    color: ${theme.colors.white};
    font-weight: 600;
    padding-top: 20px;
    text-align: center;
    font-size: ${theme.size.MD}px;
`;

export const Rules = styled.Text`
    color: ${theme.colors.white};
    font-weight: 600;
    margin-top: 5px;
    font-size: ${theme.size.SM}px;
`;

export const Content = styled.View`
    margin-top: 15px;
    flex: 1;
    border: 1px solid;
    border-color: ${theme.colors.white};
    border-radius: 8px;
    padding-left: 3px;
    padding-right: 3px;
`;

export const Label = styled.Text`
    font-size: ${theme.size.MD}px;
    color: ${theme.colors.white};
    font-weight: bold;
`;

export const Card = styled.Image`
    width: 120px;
    height: 170px;
`;

export const ContainerButton = styled.View`
    padding-bottom: 20px;
    margin-top: 10px;
`;