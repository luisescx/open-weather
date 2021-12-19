import React, { useState, useRef } from "react";
import { Alert } from "react-native";
import Swipeable from "react-native-gesture-handler/Swipeable";

import {
    styles,
    SwipeableContainer,
    Container,
    CityName,
    Text,
    Footer,
    FooterContent,
    Icon,
    Description,
    Header,
    HeaderContent,
    Temperature,
    IconContent,
    DeleteContainer,
    DeleteIcon,
} from "./styles";

const CityCard = () => {
    const [favoriteCity, setFavoriteCity] = useState(false);
    const swipeableRef = useRef<Swipeable>(null);

    function handleDeleteAlert() {
        Alert.alert(
            "Remover item",
            "Você tem certeza que deseja remover esse repositório da lista?",
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

    const handlePress = () => {
        console.log("entrou aqui");
    };

    function CardContent() {
        return (
            <Container onPress={handlePress}>
                <Header>
                    <HeaderContent>
                        <CityName>Curitiba</CityName>
                        <Text>Brasil</Text>
                    </HeaderContent>

                    <Temperature>18</Temperature>
                </Header>

                <Footer>
                    <FooterContent>
                        <Description>Chuva Fraca</Description>
                        <Text>26 - 38</Text>
                    </FooterContent>

                    <IconContent onPress={() => setFavoriteCity(!favoriteCity)}>
                        <Icon name={favoriteCity ? "heart" : "hearto"} />
                    </IconContent>
                </Footer>
            </Container>
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
        <Swipeable
            ref={swipeableRef}
            rightThreshold={42}
            overshootRight={false}
            renderRightActions={() => <SwipeableDelete />}
            onSwipeableRightOpen={handleDeleteAlert}
        >
            <CardContent />
        </Swipeable>
    );
};

export default CityCard;
