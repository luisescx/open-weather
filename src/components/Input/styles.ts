import styled from "styled-components/native";
import { TextInput } from "react-native";
import { Feather } from "@expo/vector-icons";

export const Container = styled.View`
    margin-top: 20px;

    flex-direction: row;
    background-color: ${({ theme }) => theme.colors.shape};

    border-radius: 5px;
`;

export const InputField = styled(TextInput).attrs(({ theme }) => ({
    placeholderTextColor: theme.colors.text,
}))`
    flex: 1;
    padding: 0 12px;

    color: ${({ theme }) => theme.colors.text_dark};
    font-size: 16px;
`;

export const InputButton = styled.TouchableOpacity.attrs({
    activeOpacity: 0.7,
})`
    background-color: ${({ theme }) => theme.colors.success};
    padding: 16px;
    opacity: ${({ disabled }) => (disabled ? 0.5 : 1)};

    border-top-right-radius: 5px;
    border-bottom-right-radius: 5px;
`;

export const Icon = styled(Feather)`
    color: ${({ theme }) => theme.colors.shape};
`;
