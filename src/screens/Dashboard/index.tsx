import React from "react";
import Input from "../../components/Input";
import NoCities from "../../components/NoCities";

import { Container, Header, Title, Content, Cities } from "./styles";

const Dashboard = () => {
    return (
        <Container>
            <Header>
                <Title>Cidades</Title>
            </Header>

            <Content>
                <Input />

                <Cities>
                    <NoCities />
                </Cities>
            </Content>
        </Container>
    );
};

export default Dashboard;
