import React, { createContext, useState } from "react";
import {
    CitiesContextData,
    CityDTO,
    OpenWeatherCity,
} from "../common/interfaces";
import { openWeatherApi } from "../services/api";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { env } from "../../env";
import { Alert } from "react-native";

interface CitiesProviderProps {
    children: React.ReactNode;
}

const CitiesContext = createContext<CitiesContextData>({} as CitiesContextData);

function CitiesProvider({ children }: CitiesProviderProps) {
    const [cities, setCities] = useState<CityDTO[]>([]);
    const [isLoading, setLoading] = useState(true);
    const dataKey = "@openWeather";

    async function addCity(newCity: CityDTO) {
        try {
            setLoading(true);

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
        } finally {
            setLoading(false);
        }
    }

    async function loadCities() {
        try {
            setLoading(true);

            const response = await AsyncStorage.getItem("@openWeather");

            const storedCities: CityDTO[] = response
                ? JSON.parse(response)
                : [];

            const updatedCities: CityDTO[] = [];

            if (storedCities.length > 0) {
                for (let index = 0; index < storedCities.length; index++) {
                    const storedCity = storedCities[index];

                    const response = await openWeatherApi.get(
                        `weather?q=${storedCity.title}&units=metric&appid=${env.openWeatherKey}&lang=pt_br`
                    );

                    const { data } = response;
                    const cityWeather = data as OpenWeatherCity;

                    const weather = {
                        main: cityWeather.weather[0].main,
                        description: cityWeather.weather[0].description,
                        temp: cityWeather.main.temp,
                        tempMin: cityWeather.main.temp_min,
                        tempMax: cityWeather.main.temp_max,
                    };

                    const updatedCity = {
                        ...storedCity,
                        weather,
                    } as CityDTO;

                    updatedCities.push(updatedCity);
                }
                await AsyncStorage.setItem(
                    dataKey,
                    JSON.stringify(updatedCities)
                );

                setCities(updatedCities);
                return;
            }

            setCities(storedCities);
        } catch (e) {
            console.log(e);
            setCities([]);
            Alert.alert("Não foi possível buscar as cidades");
        } finally {
            setLoading(false);
        }
    }

    async function removeCity(city: CityDTO) {
        try {
            setLoading(true);

            const dataKey = "@openWeather";
            const citiesData = await AsyncStorage.getItem(dataKey);

            const storagedCities = JSON.parse(citiesData) as CityDTO[];

            const newCitiesData = storagedCities.filter(
                (cityFiltered) =>
                    cityFiltered.openWeatherId !== city.openWeatherId
            );

            await AsyncStorage.setItem(dataKey, JSON.stringify(newCitiesData));
            setCities(newCitiesData);
        } catch (e) {
            Alert.alert("Não foi possível remover a cidade");
        } finally {
            setLoading(false);
        }
    }

    async function handleFavorite(city: CityDTO) {
        try {
            const citiesData = await AsyncStorage.getItem(dataKey);

            const storagedCities = JSON.parse(citiesData) as CityDTO[];

            const newCitiesData = storagedCities.filter(
                (cityFiltered) =>
                    cityFiltered.openWeatherId !== city.openWeatherId
            );

            const favoriteCity = { ...city, isFavorite: !city.isFavorite };

            const citiesList = [...newCitiesData, favoriteCity];

            citiesList.sort((a, b) =>
                a.isFavorite && !b.isFavorite
                    ? -1
                    : !a.isFavorite && b.isFavorite
                    ? 1
                    : 0
            );

            await AsyncStorage.setItem(dataKey, JSON.stringify(citiesList));

            setCities(citiesList);
        } catch (e) {
            Alert.alert("Não foi possível adicionar a cidade como favorito");
        }
    }

    return (
        <CitiesContext.Provider
            value={{
                cities,
                addCity,
                loadCities,
                removeCity,
                handleFavorite,
                isLoading,
            }}
        >
            {children}
        </CitiesContext.Provider>
    );
}

export { CitiesProvider, CitiesContext };
