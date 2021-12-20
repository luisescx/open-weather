import styled, { css } from "styled-components/native";
import { AntDesign } from "@expo/vector-icons";
import { TouchableOpacity } from "react-native";
import { RFValue } from "react-native-responsive-fontsize";

interface Props {
    isWeather: boolean;
}

export const Container = styled(TouchableOpacity).attrs({
    activeOpacity: 0.6,
})`
    background-color: ${({ theme }) => theme.colors.shape};

    border-radius: 5px;

    padding: 17px 24px;
    margin-bottom: ${RFValue(16)}px;
`;

export const Header = styled.View`
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
`;

export const HeaderContent = styled.View``;

export const Title = styled.Text`
    font-family: ${({ theme }) => theme.fonts.medium};
    font-size: ${RFValue(20)}px;
`;

export const SubTitle = styled.Text<Props>`
    font-family: ${({ theme }) => theme.fonts.regular};
    font-size: ${RFValue(14)}px;

    ${({ isWeather }) =>
        isWeather &&
        css`
            width: 100px;
        `}
`;

export const Text = styled.Text`
    font-family: ${({ theme }) => theme.fonts.regular};
    font-size: ${RFValue(14)}px;
`;

export const Temperature = styled.Text`
    font-family: ${({ theme }) => theme.fonts.medium};
    font-size: ${RFValue(32)}px;
    color: ${({ theme }) => theme.colors.secondary};
`;

export const Footer = styled.View`
    margin-top: ${RFValue(19)}px;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
`;

export const FooterContent = styled.View``;

export const IconContent = styled.TouchableOpacity``;

export const Icon = styled(AntDesign)`
    color: ${({ theme }) => theme.colors.danger};
    font-size: ${RFValue(20)}px;
`;

export const AddCityButton = styled(TouchableOpacity).attrs({})``;

export const Description = styled.Text`
    font-family: ${({ theme }) => theme.fonts.regular};
    color: ${({ theme }) => theme.colors.secondary};
    font-size: ${RFValue(14)}px;
`;

export const ButtonTitle = styled.Text`
    font-family: ${({ theme }) => theme.fonts.medium};
    color: ${({ theme }) => theme.colors.success};
    font-size: ${RFValue(14)}px;
`;
