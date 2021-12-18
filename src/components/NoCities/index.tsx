import React from "react";

import { Container, Title, SubTitle } from "./styles";

const NoCities = () => {
    return (
        <Container>
            <Title>Parece que você ainda não{"\n"}adicionou uma cidade</Title>
            <SubTitle>
                Tente adicionar uma cidade usando o botão de busca
            </SubTitle>
        </Container>
    );
};

export default NoCities;
