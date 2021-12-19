import React from "react";
import { useNavigation, useRoute } from "@react-navigation/native";
import { FlatList, View } from "react-native";
import { RouteParams, ScreenNavigationProp } from "../../common/interfaces";
import { BackButton } from "../../components/BackButton";
import { Container, Header, HeaderContent, Title, Content } from "./styles";
import CityCard from "../../components/CityCard";

const CitiesList = () => {
    const navigation = useNavigation<ScreenNavigationProp>();

    const route = useRoute();
    const { cities } = route.params as RouteParams;
    console.log(cities);
    const handleGoBack = () => {
        navigation.goBack();
    };

    return (
        <Container>
            <Header>
                <HeaderContent>
                    <BackButton
                        style={{ paddingLeft: 24 }}
                        onPress={handleGoBack}
                    />
                    <Title>Cidade Encontradas</Title>
                    <View></View>
                </HeaderContent>
            </Header>

            <Content>
                <FlatList
                    data={cities}
                    showsVerticalScrollIndicator={false}
                    keyExtractor={(item) => item.googlePlaceId}
                    renderItem={({ item }) => (
                        <CityCard isWeather={false} city={item} />
                    )}
                />
            </Content>
        </Container>
    );
};

export default CitiesList;
