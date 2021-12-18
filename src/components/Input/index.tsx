import React from "react";

import { Container, InputField, InputButton, Icon } from "./styles";

const Input = () => {
    return (
        <Container>
            <InputField
                placeholder="Digite aqui uma cidade"
                value={""}
                returnKeyType="send"
                autoCapitalize="none"
                autoCorrect={false}
            />

            <InputButton testID="input-button">
                <Icon name="search" size={20} />
            </InputButton>
        </Container>
    );
};

export default Input;
