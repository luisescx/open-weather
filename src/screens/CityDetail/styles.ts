import { RFPercentage, RFValue } from "react-native-responsive-fontsize";
import styled from "styled-components/native";

export const Container = styled.View`
    flex: 1;
    background-color: ${({ theme }) => theme.colors.background};
`;

export const Header = styled.View`
    width: 100%;
    background: ${({ theme }) => theme.colors.primary};
    height: ${RFValue(113)}px;

    align-items: center;
    justify-content: flex-end;
    padding-bottom: 19px;
`;

export const HeaderContent = styled.View`
    width: 100%;

    flex-direction: row;
    justify-content: space-between;
    align-items: center;
`;

export const Title = styled.Text`
    font-size: ${RFValue(18)}px;
    color: ${({ theme }) => theme.colors.shape};
    font-family: ${({ theme }) => theme.fonts.regular};
    margin-left: -24px;
`;

export const Description = styled.Text`
    font-size: ${RFValue(14)}px;
    color: ${({ theme }) => theme.colors.title};
    font-family: ${({ theme }) => theme.fonts.medium};
    text-align: center;
    margin: 8px 0;
`;

export const Content = styled.View`
    flex: 1%;

    padding: 0 24px;
`;
