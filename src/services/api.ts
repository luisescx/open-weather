import axios from "axios";

export const googlePlaceApi = axios.create({
    baseURL: "https://maps.googleapis.com/maps/api/place/",
});

export const openWeatherApi = axios.create({
    baseURL: "https://api.openweathermap.org/data/2.5/",
});
