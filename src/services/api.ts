import axios from "axios";

export const googlePlaceApi = axios.create({
    baseURL: "https://maps.googleapis.com/maps/api/place/",
});

// https://maps.googleapis.com/maps/api/place/autocomplete/json?input=sao%20paulo&language=pt_BR&types=(cities)&key=AIzaSyBO9DeGYRGvAIEyNfJUVm9IdarMxuOJCzs

export const openWeatherApi = axios.create({
    baseURL: "https://api.openweathermap.org/data/2.5/",
});
//https://api.openweathermap.org/data/2.5/weather?q=curitiba&units=metric&appid=b0c31d992607818c91e84726143de83c&lang=pt_br
