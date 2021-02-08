import React from "react";
import { Text } from "react-native";

import { Container, Logo } from "./styles/Index";
import logo from "./images/logo.png";

export default function Home() {
  return (
    <Container>
      <Logo source={logo} resizeMode="contain" />
    </Container>
  );
}
