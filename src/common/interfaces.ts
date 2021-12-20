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

    title: string;

    subTitle: string;

    coord: Coordinates;

    weather: {
        main: string;
        description: string;
        temp: number;
        tempMin: number;
        tempMax: number;
    };

    dayTime: string;

    isFavorite: boolean;
}

export interface CityDetailProps {
    coordinate: Coordinates;
    cityName: string;
}

interface Coordinates {
    lon: number;
    lat: number;
}

export interface RouteParams {
    cities: CityDTO[];
    cityDetail: CityDetailProps;
}

export interface CardProps {
    isWeather?: boolean;
    isFavorite?: boolean;
    city: CityDTO;
    addCity?: (newCity: CityDTO) => void;
}

export type RootParamList = {
    SplashScreen: undefined;
    Dashboard: undefined;
    CitiesList: { cities: CityDTO[] };
    CityDetail: { cityDetail: CityDetailProps };
};

export type ScreenNavigationProp = CompositeNavigationProp<
    NativeStackNavigationProp<RootParamList>,
    NativeStackNavigationProp<RootParamList>
>;

export interface CitiesContextData {
    cities: CityDTO[];
    isLoading: boolean;
    addCity: (newCity: CityDTO) => void;
    loadCities: () => void;
    removeCity: (city: CityDTO) => void;
    handleFavorite: (city: CityDTO) => void;
}
