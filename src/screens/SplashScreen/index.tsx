import React, { useEffect } from "react";

import LottieView from "lottie-react-native";
import loadingWeather from "../../assets/loadingWeather.json";

import { Container } from "./styles";
import { useNavigation } from "@react-navigation/native";
import { NavigateEnum } from "../../common/enum";
import { ScreenNavigationProp } from "../../common/interfaces";
import { StatusBar } from "react-native";
import { useTheme } from "styled-components/native";

const SplashScreen = () => {
    const navigation = useNavigation<ScreenNavigationProp>();
    const theme = useTheme();

    useEffect(() => {
        setTimeout(() => {
            navigation.navigate(NavigateEnum.dashboard);
        }, 3000);
    }, []);

    return (
        <Container>
            <StatusBar
                barStyle="dark-content"
                translucent={true}
                backgroundColor={theme.colors.background}
            />

            <LottieView
                source={loadingWeather}
                autoPlay
                style={{ height: 200 }}
                resizeMode="contain"
                loop
            />
        </Container>
    );
};

export default SplashScreen;
