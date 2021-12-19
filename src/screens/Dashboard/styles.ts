import styled from "styled-components/native";
import { getStatusBarHeight } from "react-native-iphone-x-helper";
import { RFPercentage, RFValue } from "react-native-responsive-fontsize";

export const Container = styled.View`
    flex: 1;
    background-color: ${({ theme }) => theme.colors.background};
`;

export const Header = styled.View`
    width: 100%;
    background: ${({ theme }) => theme.colors.primary};
    height: ${RFPercentage(20)}px;
    align-items: center;
    justify-content: flex-end;
    padding-bottom: 40px;
`;

export const Title = styled.Text`
    font-size: ${RFValue(18)}px;
    color: ${({ theme }) => theme.colors.shape};
    font-family: ${({ theme }) => theme.fonts.regular};
`;

export const InputContent = styled.View`
    width: 100%;
    margin-top: ${getStatusBarHeight() + RFValue(55)}px;
    position: absolute;
    padding: 0 24px;
`;

export const Content = styled.View`
    flex: 1%;

    padding: 0 24px;
`;

export const Cities = styled.View`
    margin-top: ${RFPercentage(8)}px;
`;
