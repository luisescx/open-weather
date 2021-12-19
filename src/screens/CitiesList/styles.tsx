import styled from "styled-components/native";
import { RFValue } from "react-native-responsive-fontsize";
import { FlatList } from "react-native";
import { getBottomSpace } from "react-native-iphone-x-helper";
import { CityDTO } from "../../common/interfaces";

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

export const Content = styled.View`
    flex: 1%;

    padding: 0 12px;
`;
