import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { RootParamList } from "../common/interfaces";
import Dashboard from "../screens/Dashboard";
import CitiesList from "../screens/CitiesList";
import CityDetail from "../screens/CityDetail";
import SplashScreen from "../screens/SplashScreen";

const { Navigator, Screen } = createNativeStackNavigator<RootParamList>();

export function AppStackRoutes() {
    return (
        <Navigator
            screenOptions={{
                headerShown: false,
            }}
            initialRouteName="SplashScreen"
        >
            <Screen name="SplashScreen" component={SplashScreen} />
            <Screen
                name="Dashboard"
                component={Dashboard}
                options={{
                    gestureEnabled: false,
                }}
            />
            <Screen name="CitiesList" component={CitiesList} />
            <Screen name="CityDetail" component={CityDetail} />
        </Navigator>
    );
}
