import React, { createContext, useState } from "react";
import {
    CityDTO,
    OpenWeatherCity,
    ScreenNavigationProp,
} from "../common/interfaces";
import { openWeatherApi } from "../services/api";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { env } from "../../env";
import { useNavigation } from "@react-navigation/native";
import { Alert } from "react-native";

interface CitiesContextData {
    cities: CityDTO[];
    addCity: (newCity: CityDTO) => void;
    loadCities: () => void;
    removeCity: (city: CityDTO) => void;
    // findRepositoryById: (repositoryId: number) => RepositoryProps;
}

interface CitiesProviderProps {
    children: React.ReactNode;
}

const CitiesContext = createContext<CitiesContextData>({} as CitiesContextData);

function CitiesProvider({ children }: CitiesProviderProps) {
    const [cities, setCities] = useState<CityDTO[]>([]);
    const dataKey = "@openWeather";

    async function addCity(newCity: CityDTO) {
        try {
            const response = await openWeatherApi.get(
                `weather?q=${newCity.title}&units=metric&appid=${env.openWeatherKey}&lang=pt_br`
            );

            const { data } = response;
            const cityWeather = data as OpenWeatherCity;

            const citiesData = await AsyncStorage.getItem(dataKey);

            const storagedCities =
                citiesData && citiesData.length > 0
                    ? JSON.parse(citiesData)
                    : [];

            const weather = {
                main: cityWeather.weather[0].main,
                description: cityWeather.weather[0].description,
                temp: cityWeather.main.temp,
                tempMin: cityWeather.main.temp_min,
                tempMax: cityWeather.main.temp_max,
            };

            const formattedCity = {
                ...newCity,
                openWeatherId: cityWeather.id,
                coord: cityWeather.coord,
                weather,
            } as CityDTO;

            const citiesList = [...storagedCities, formattedCity];

            await AsyncStorage.setItem(dataKey, JSON.stringify(citiesList));
            setCities(citiesList);
        } catch (e) {
            Alert.alert(
                "Erro",
                "Ocorreu um erro ao adicionar a cidade. Tente novamente mais tarde."
            );
        }
    }

    async function loadCities() {
        try {
            const response = await AsyncStorage.getItem("@openWeather");

            const storedCities: CityDTO[] = response
                ? JSON.parse(response)
                : [];

            setCities(storedCities);
        } catch (e) {
            console.log(e);
            setCities([]);
            Alert.alert("Não foi possível buscar as cidades");
        }
    }

    async function removeCity(city: CityDTO) {
        const dataKey = "@openWeather";
        const citiesData = await AsyncStorage.getItem(dataKey);

        const storagedCities = JSON.parse(citiesData) as CityDTO[];

        const newCitiesData = storagedCities.filter(
            (cityFiltered) => cityFiltered.openWeatherId !== city.openWeatherId
        );

        await AsyncStorage.setItem(dataKey, JSON.stringify(newCitiesData));
        setCities(newCitiesData);
    }

    return (
        <CitiesContext.Provider
            value={{ cities, addCity, loadCities, removeCity }}
        >
            {children}
        </CitiesContext.Provider>
    );
}

export { CitiesProvider, CitiesContext };
