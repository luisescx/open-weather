import { useNavigation, useRoute } from "@react-navigation/native";
import React, { useState } from "react";
import { NavigateEnum } from "../../common/enum";
import { CardProps, ScreenNavigationProp } from "../../common/interfaces";
import { useCities } from "../../hooks/useCities";

import {
    Container,
    Title,
    SubTitle,
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

const CityCard = ({
    city,
    addCity,
    isWeather = true,
    isFavorite = true,
}: CardProps) => {
    const [favoriteCity, setFavoriteCity] = useState(city.isFavorite);
    const navigation = useNavigation<ScreenNavigationProp>();
    const route = useRoute();
    const routeName = route.name;

    const { handleFavorite } = useCities();

    const handlePress = () => {
        const cityDetail = {
            cityName: city.title,
            coordinate: city.coord,
        };
        navigation.navigate(NavigateEnum.cityDetail, {
            cityDetail,
        });
    };

    const handleNewCity = () => {
        addCity(city);
    };

    const handleFavoriteState = () => {
        handleFavorite(city);

        setFavoriteCity(!favoriteCity);
    };

    return (
        <Container onPress={routeName === "Dashboard" ? handlePress : null}>
            <Header>
                <HeaderContent>
                    <Title>{city.title}</Title>
                    <SubTitle isWeather={isWeather && isFavorite}>
                        {city.subTitle}
                    </SubTitle>
                </HeaderContent>

                {isWeather && (
                    <Temperature>{`${city.weather.temp}°`}</Temperature>
                )}
            </Header>

            <Footer>
                {isWeather && (
                    <FooterContent>
                        <Description>{city.weather.description}</Description>
                        <Text>{`${city.weather.tempMin}° - ${city.weather.tempMax}°`}</Text>
                    </FooterContent>
                )}

                {isWeather && isFavorite && (
                    <IconContent onPress={handleFavoriteState}>
                        <Icon name={favoriteCity ? "heart" : "hearto"} />
                    </IconContent>
                )}

                {!isWeather && (
                    <AddCityButton onPress={handleNewCity}>
                        <ButtonTitle>Adicionar</ButtonTitle>
                    </AddCityButton>
                )}
            </Footer>
        </Container>
    );
};

export default CityCard;
