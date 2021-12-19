import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { RootParamList } from "../common/interfaces";
import Dashboard from "../screens/Dashboard";
import CitiesList from "../screens/CitiesList";

const { Navigator, Screen } = createNativeStackNavigator<RootParamList>();

export function AppStackRoutes() {
    return (
        <Navigator
            screenOptions={{
                headerShown: false,
            }}
            initialRouteName="Dashboard"
        >
            <Screen name="Dashboard" component={Dashboard} />
            <Screen name="CitiesList" component={CitiesList} />
        </Navigator>
    );
}
