import React, { useState, useRef } from "react";
import { Alert, TextInput } from "react-native";

import { Container, InputField, InputButton, Icon } from "./styles";

interface InputProps {
    citySearch: (cityName: string) => void;
}

const Input = ({ citySearch }: InputProps) => {
    const [inputText, setInputText] = useState("");
    const inputRef = useRef<TextInput>(null);

    const handleCitySearch = () => {
        if (inputText !== "") {
            citySearch(inputText);
            setInputText("");
            inputRef.current?.blur();
            return;
        }

        return Alert.alert("Digite o nome de uma cidade antes de confirmar!");
    };

    return (
        <Container>
            <InputField
                ref={inputRef}
                placeholder="Procure uma nova cidade aqui"
                value={inputText}
                onChangeText={(e) => setInputText(e)}
                returnKeyType="send"
                autoCapitalize="none"
                onSubmitEditing={handleCitySearch}
            />

            <InputButton onPress={handleCitySearch} disabled={inputText === ""}>
                <Icon name="search" size={20} />
            </InputButton>
        </Container>
    );
};

export default Input;
