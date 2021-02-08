import React from "react";
import { Modal as RNModal, TouchableOpacity } from "react-native";
import { Container, Header, Logo } from "./styles";
import { Ionicons } from "@expo/vector-icons";

import logo from "../../images/logo.png";

export default function Modal({ visible, onClose }) {
  return (
    <RNModal
      visible={visible}
      transparent={false}
      animationType="slide"
      onRequestClose={onClose}
    >
      <Container>
        <Header>
          <Logo source={logo} resizeMode="contain" />
          <TouchableOpacity onPress={onClose}>
            <Ionicons name="ios-close" size={38} color="#0A100d" />
          </TouchableOpacity>
        </Header>
      </Container>
    </RNModal>
  );
}
