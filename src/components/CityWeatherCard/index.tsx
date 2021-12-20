import React, { useRef, useState } from "react";
import { Alert } from "react-native";
import AsyncStorage from "@react-native-async-storage/async-storage";
import Swipeable from "react-native-gesture-handler/Swipeable";
import { CardProps, CityDTO } from "../../common/interfaces";
import CityCard from "../CityCard";

import { SwipeableContainer, DeleteContainer, DeleteIcon } from "./styles";
import { useCities } from "../../hooks/useCities";

const CityWeatherCard = ({ city }: CardProps) => {
    const swipeableRef = useRef<Swipeable>(null);

    const { removeCity } = useCities();

    function handleDeleteAlert() {
        Alert.alert(
            "Remover Cidade",
            "Você tem certeza que deseja remover essa cidade da lista?",
            [
                {
                    text: "Não",
                    onPress: () => swipeableRef.current?.close(),
                    style: "cancel",
                },
                {
                    text: "Sim",
                    onPress: () => {
                        removeCity(city);
                    },
                },
            ]
        );
    }

    function SwipeableDelete() {
        return (
            <DeleteContainer>
                <DeleteIcon name="trash" size={24} />
            </DeleteContainer>
        );
    }

    return (
        <SwipeableContainer
            ref={swipeableRef}
            rightThreshold={42}
            overshootRight={false}
            renderRightActions={() => <SwipeableDelete />}
            onSwipeableRightOpen={handleDeleteAlert}
        >
            <CityCard city={city} />
        </SwipeableContainer>
    );
};

export default CityWeatherCard;
