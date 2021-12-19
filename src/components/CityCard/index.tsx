import React, { useState } from "react";
import { CardProps } from "../../common/interfaces";

import {
    styles,
    Container,
    CityName,
    Text,
    Footer,
    FooterContent,
    Icon,
    Header,
    HeaderContent,
    Temperature,
    IconContent,
    AddCityButton,
    ButtonTitle,
    Description,
} from "./styles";

const CityCard = ({ city, isWeather = true }: CardProps) => {
    const [favoriteCity, setFavoriteCity] = useState(false);

    const handlePress = () => {
        console.log("entrou aqui");
    };

    return (
        <Container onPress={handlePress} style={styles.shadow}>
            <Header>
                <HeaderContent>
                    <CityName>{city.name}</CityName>
                    <Text>{city.country}</Text>
                </HeaderContent>

                {isWeather && <Temperature>18</Temperature>}
            </Header>

            <Footer>
                {isWeather && (
                    <FooterContent>
                        <Description>Chuva Fraca</Description>
                        <Text>26 - 38</Text>
                    </FooterContent>
                )}

                {isWeather && (
                    <IconContent onPress={() => setFavoriteCity(!favoriteCity)}>
                        <Icon name={favoriteCity ? "heart" : "hearto"} />
                    </IconContent>
                )}

                {!isWeather && (
                    <AddCityButton onPress={() => console.log("Adicionado")}>
                        <ButtonTitle>Adicionar</ButtonTitle>
                    </AddCityButton>
                )}
            </Footer>
        </Container>
    );
};

export default CityCard;
