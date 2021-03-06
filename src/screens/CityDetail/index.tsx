import React, { useEffect, useState } from "react";
import { useNavigation, useRoute } from "@react-navigation/native";
import { Alert, FlatList, View } from "react-native";
import { env } from "../../../env";
import {
    CityDTO,
    RouteParams,
    ScreenNavigationProp,
} from "../../common/interfaces";
import { BackButton } from "../../components/BackButton";
import CityCard from "../../components/CityCard";
import { openWeatherApi } from "../../services/api";
import { format, addDays } from "date-fns";
import { ptBR } from "date-fns/locale";
import {
    Container,
    Header,
    HeaderContent,
    Title,
    Description,
    Content,
} from "./styles";
import LoadAnimation from "../../components/LoadAnimation";

const { openWeatherKey } = env;

const CityDetail = () => {
    const [isLoading, setLoading] = useState(true);
    const [dailyDetails, setDailyDetails] = useState<CityDTO[]>([]);
    const navigation = useNavigation<ScreenNavigationProp>();

    const route = useRoute();
    const { cityDetail } = route.params as RouteParams;

    const handleGoBack = () => {
        navigation.goBack();
    };

    useEffect(() => {
        const getDailyWeather = async () => {
            try {
                const response = await openWeatherApi.get(
                    `onecall?lat=${cityDetail.coordinate.lat}&lon=${cityDetail.coordinate.lon}&units=metric&appid=${openWeatherKey}&lang=pt_br`
                );
                const { data } = response;
                const { daily } = data;

                const cityDetailsList: CityDTO[] = [];

                for (let index = 0; index < 5; index++) {
                    const dayWeather = daily[index];

                    const weather = {
                        main: dayWeather.weather[0].main,
                        description: dayWeather.weather[0].description,
                        temp: dayWeather.temp.day,
                        tempMin: dayWeather.temp.min,
                        tempMax: dayWeather.temp.max,
                    };

                    const weatherDate = addDays(new Date(), index);

                    const day = {
                        title: format(weatherDate, "EEEE", {
                            locale: ptBR,
                        }),

                        subTitle: `${weatherDate.getDate()} de ${format(
                            weatherDate,
                            "MMMM",
                            {
                                locale: ptBR,
                            }
                        )}`,
                        weather,
                        dayTime: String(dayWeather.dt),
                    } as CityDTO;

                    cityDetailsList.push(day);
                }

                setDailyDetails(cityDetailsList);
            } catch (e) {
                Alert.alert(
                    "N??o foi poss??vel buscar a previs??o para os pr??ximos dias"
                );
                navigation.goBack();
            }
        };

        getDailyWeather();
    }, []);

    useEffect(() => {
        if (dailyDetails.length > 0) {
            setLoading(false);
        }
    }, [dailyDetails]);

    return (
        <Container>
            <Header>
                <HeaderContent>
                    <BackButton
                        style={{ paddingLeft: 24 }}
                        onPress={handleGoBack}
                    />
                    <Title>{cityDetail.cityName}</Title>
                    <View></View>
                </HeaderContent>
            </Header>

            <Description>Previs??o para os pr??ximos 5 dias</Description>

            <Content>
                {isLoading ? (
                    <LoadAnimation />
                ) : (
                    <FlatList
                        data={dailyDetails}
                        showsVerticalScrollIndicator={false}
                        keyExtractor={(item) => item.dayTime}
                        renderItem={({ item }) => (
                            <CityCard city={item} isFavorite={false} />
                        )}
                    />
                )}
            </Content>
        </Container>
    );
};

export default CityDetail;
