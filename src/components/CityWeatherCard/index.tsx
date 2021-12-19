import React, { useRef } from "react";
import { Alert } from "react-native";
import Swipeable from "react-native-gesture-handler/Swipeable";
import { CardProps, CityDTO } from "../../common/interfaces";
import CityCard from "../CityCard";

import { SwipeableContainer, DeleteContainer, DeleteIcon } from "./styles";

const CityWeatherCard = ({ city, isWeather = true }: CardProps) => {
    const swipeableRef = useRef<Swipeable>(null);

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
                { text: "Sim", onPress: () => console.log("removido") },
            ]
        );
    }

    // function CardContent() {
    //     return (
    //        <CityCard />
    //     );
    // }

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
            {/* <CardContent /> */}
        </SwipeableContainer>
    );
};

export default CityWeatherCard;
