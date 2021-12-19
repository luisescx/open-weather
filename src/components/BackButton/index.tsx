import React from "react";
import { Container } from "./styles";
import { MaterialIcons } from "@expo/vector-icons";
import { useTheme } from "styled-components";
import { TouchableOpacityProps } from "react-native";

export const BackButton = ({ ...rest }: TouchableOpacityProps) => {
    const theme = useTheme();

    return (
        <Container {...rest}>
            <MaterialIcons
                name="chevron-left"
                size={24}
                color={theme.colors.shape}
            />
        </Container>
    );
};
