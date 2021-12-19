import styled from "styled-components/native";
import { AntDesign, Feather } from "@expo/vector-icons";
import { StyleSheet, TouchableOpacity } from "react-native";
import { RFValue } from "react-native-responsive-fontsize";

export const styles = StyleSheet.create({
    shadow: {
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 12,
        },
        shadowOpacity: 0.58,
        shadowRadius: 16.0,
        elevation: 4,
        margin: 4,
    },
});

export const Container = styled(TouchableOpacity).attrs({
    activeOpacity: 0.9,
})`
    background-color: ${({ theme }) => theme.colors.shape};

    border-radius: 5px;

    padding: 17px 24px;
    margin-top: ${RFValue(16)}px;
`;

export const Header = styled.View`
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
`;

export const HeaderContent = styled.View``;

export const CityName = styled.Text`
    font-family: ${({ theme }) => theme.fonts.medium};
    font-size: ${RFValue(20)}px;
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
