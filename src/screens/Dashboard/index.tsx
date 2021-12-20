import React, { useCallback, useEffect } from "react";
import { useNavigation } from "@react-navigation/native";
import { Alert, FlatList } from "react-native";
import { env } from "../../../env";
import { NavigateEnum } from "../../common/enum";
import {
    CityDTO,
    GooglePlaceCity,
    ScreenNavigationProp,
} from "../../common/interfaces";
import CityWeatherCard from "../../components/CityWeatherCard";
import Input from "../../components/Input";
import NoCities from "../../components/NoCities";
import { googlePlaceApi } from "../../services/api";
import {
    Container,
    Header,
    Title,
    Content,
    Cities,
    InputContent,
} from "./styles";
import { useCities } from "../../hooks/useCities";
import LoadAnimation from "../../components/LoadAnimation";

const { googleApiKey } = env;

const Dashboard = () => {
    const { cities, loadCities, isLoading } = useCities();

    const navigation = useNavigation<ScreenNavigationProp>();

    const handleCitySearch = async (cityName: string) => {
        const response = await googlePlaceApi.get(
            `autocomplete/json?input=${cityName}&language=pt_BR&types=(cities)&key=${googleApiKey}`
        );

        const { data } = response;
        const { predictions, status } = data as GooglePlaceCity;

        if (status === "OK") {
            const index = predictions.findIndex(({ place_id }) => {
                return cities.some(
                    ({ googlePlaceId }) => googlePlaceId === place_id
                );
            });

            if (predictions.length === 1 && index !== -1) {
                return Alert.alert("Cidade já adicionada");
            }

            if (index !== -1) {
                predictions.splice(index, 1);
            }

            const citiesToAdd = predictions.map((city) => {
                return {
                    googlePlaceId: city.place_id,
                    title: city.structured_formatting.main_text,
                    subTitle: city.structured_formatting.secondary_text,
                } as CityDTO;
            });

            navigation.navigate(NavigateEnum.citiesList, {
                cities: citiesToAdd,
            });

            return;
        }

        Alert.alert("Não foram encontradas cidades");
    };

    useEffect(() => {
        loadCities();
    }, []);

    return (
        <Container>
            <Header>
                <Title>Cidades</Title>
            </Header>

            <InputContent>
                <Input citySearch={handleCitySearch} />
            </InputContent>

            <Content>
                {isLoading ? (
                    <LoadAnimation />
                ) : (
                    <Cities>
                        {cities && cities.length > 0 ? (
                            <FlatList
                                data={cities}
                                showsVerticalScrollIndicator={false}
                                keyExtractor={(item) => item.openWeatherId}
                                renderItem={({ item }) => (
                                    <CityWeatherCard city={item} />
                                )}
                            />
                        ) : (
                            <NoCities />
                        )}
                    </Cities>
                )}
            </Content>
        </Container>
    );
};

export default Dashboard;
