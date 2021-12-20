import React from "react";
import { useNavigation, useRoute } from "@react-navigation/native";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { FlatList, View } from "react-native";
import {
    CityDTO,
    OpenWeatherCity,
    RouteParams,
    ScreenNavigationProp,
} from "../../common/interfaces";
import { BackButton } from "../../components/BackButton";
import { Container, Header, HeaderContent, Title, Content } from "./styles";
import CityCard from "../../components/CityCard";
import { useCities } from "../../hooks/useCities";

const CitiesList = () => {
    const navigation = useNavigation<ScreenNavigationProp>();

    const route = useRoute();
    const { cities } = route.params as RouteParams;

    const handleGoBack = () => {
        navigation.goBack();
    };

    const { addCity } = useCities();

    const handleNewCity = async (newCity: CityDTO) => {
        addCity(newCity);

        navigation.goBack();
    };

    return (
        <Container>
            <Header>
                <HeaderContent>
                    <BackButton
                        style={{ paddingLeft: 24 }}
                        onPress={handleGoBack}
                    />
                    <Title>Cidade Encontradas</Title>
                    <View></View>
                </HeaderContent>
            </Header>

            <Content>
                <FlatList
                    data={cities}
                    showsVerticalScrollIndicator={false}
                    keyExtractor={(item) => item.googlePlaceId}
                    renderItem={({ item }) => (
                        <CityCard
                            isWeather={false}
                            city={item}
                            addCity={handleNewCity}
                        />
                    )}
                />
            </Content>
        </Container>
    );
};

export default CitiesList;
