import { CompositeNavigationProp } from "@react-navigation/core";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";

export interface GooglePlaceCity {
    predictions: {
        place_id: string;
        structured_formatting: {
            main_text: string;
            secondary_text: string;
        };
    }[];

    status: string;
}

export interface OpenWeatherCity {
    id: string;

    name: string;

    coord: Coordinates;

    weather: {
        main: string;
        description: string;
    }[];

    main: {
        temp: number;
        temp_min: number;
        temp_max: number;
    };
}

export interface CityDTO {
    googlePlaceId: string;

    openWeatherId: string;

    name: string;

    country: string;

    coord: Coordinates;

    weather: {
        main: string;
        description: string;
        temp: number;
        temp_min: number;
        temp_max: number;
    };

    // isFavorite: boolean;
    // daily: {

    // }[]
}

interface Coordinates {
    lon: number;
    lat: number;
}

export interface RouteParams {
    cities: CityDTO[];
}

export interface CardProps {
    isWeather?: boolean;
    city: CityDTO;
    addCity?: (newCity: CityDTO) => void;
    loadCities?: () => void;
}

export type RootParamList = {
    Splash: undefined;
    Dashboard: undefined;
    CitiesList: { cities: CityDTO[] };
};

export type ScreenNavigationProp = CompositeNavigationProp<
    NativeStackNavigationProp<RootParamList>,
    NativeStackNavigationProp<RootParamList>
>;
