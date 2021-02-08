import React from "react";
import { Text } from "react-native";

import { Container, Logo, NewOrderContainer } from "./styles/Index";

import Orders from "./components/Orders";
import Button from "./components/Button";

import logo from "./images/logo.png";

export default function Home() {
  return (
    <Container>
      <Logo source={logo} resizeMode="contain" />

      <Orders />
      <NewOrderContainer>
        <Button>
          <Button.Label>Novo Pedido</Button.Label>
        </Button>
      </NewOrderContainer>
    </Container>
  );
}
