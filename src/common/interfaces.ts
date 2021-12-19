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

export interface CityDTO {
    googlePlaceId: string;

    name: string;

    country: string;
}

export interface RouteParams {
    cities: CityDTO[];
}

export interface CardProps {
    isWeather?: boolean;
    city: CityDTO;
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
