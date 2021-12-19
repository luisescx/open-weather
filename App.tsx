import "react-native-gesture-handler";

import React from "react";
import { StatusBar } from "react-native";
import { ThemeProvider } from "styled-components/native";
import AppLoading from "expo-app-loading";
import {
    useFonts,
    Poppins_400Regular,
    Poppins_500Medium,
    Poppins_700Bold,
} from "@expo-google-fonts/poppins";
import Dashboard from "./src/screens/Dashboard";
import theme from "./src/global/styles/theme";
import { GestureHandlerRootView } from "react-native-gesture-handler";

export default function App() {
    const [fontsLoaded] = useFonts({
        Poppins_400Regular,
        Poppins_500Medium,
        Poppins_700Bold,
    });

    if (!fontsLoaded) {
        return <AppLoading />;
    }

    return (
        <>
            <StatusBar
                barStyle="light-content"
                translucent={true}
                backgroundColor={theme.colors.primary}
            />

            <ThemeProvider theme={theme}>
                <GestureHandlerRootView style={{ flex: 1 }}>
                    <Dashboard />
                </GestureHandlerRootView>
            </ThemeProvider>
        </>
    );
}
