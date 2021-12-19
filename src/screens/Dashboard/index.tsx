import { useNavigation } from "@react-navigation/native";
import React from "react";
import { Alert } from "react-native";
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

const { googleApiKey } = env;

const Dashboard = () => {
    const navigation = useNavigation<ScreenNavigationProp>();

    const handleCitySearch = async (cityName: string) => {
        const response = await googlePlaceApi.get(
            `autocomplete/json?input=${cityName}&language=pt_BR&types=(cities)&key=${googleApiKey}`
        );

        const { data } = response;
        const { predictions, status } = data as GooglePlaceCity;

        if (status === "OK") {
            // tratamento para verificar se essa cidade já esta adicionada e se ja estiver remover da lista
            const cities = predictions.map((city) => {
                return {
                    googlePlaceId: city.place_id,
                    name: city.structured_formatting.main_text,
                    country: city.structured_formatting.secondary_text,
                } as CityDTO;
            });

            navigation.navigate(NavigateEnum.citiesList, {
                cities,
            });

            return;
        }

        Alert.alert("Não foram encontradas cidades");
    };

    return (
        <Container>
            <Header>
                <Title>Cidades</Title>
            </Header>

            <InputContent>
                <Input citySearch={handleCitySearch} />
            </InputContent>

            <Content>
                <Cities>
                    {/* <FlatList
                        data={["1", "2"]}
                        showsVerticalScrollIndicator={false}
                        keyExtractor={() => "1"}
                        renderItem={({ item }) => <CityCard />}
                    /> */}
                    {/* <CityCard /> */}
                    <NoCities />
                </Cities>
            </Content>
        </Container>
    );
};

export default Dashboard;
