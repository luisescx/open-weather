import { RFValue } from "react-native-responsive-fontsize";
import styled from "styled-components/native";

export const Container = styled.View``;

export const Title = styled.Text`
    text-align: center;
    font-size: ${RFValue(18)}px;
    color: ${({ theme }) => theme.colors.title};
    font-family: ${({ theme }) => theme.fonts.medium};
    margin-bottom: 8px;
`;

export const SubTitle = styled.Text`
    font-size: ${RFValue(18)}px;
    text-align: center;
    color: ${({ theme }) => theme.colors.text};
    font-family: ${({ theme }) => theme.fonts.regular};
`;
