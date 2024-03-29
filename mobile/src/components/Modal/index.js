import React, { useState } from "react";
import { Modal as RNModal, TouchableOpacity, Alert } from "react-native";
import { Ionicons } from "@expo/vector-icons";

import {
  Container,
  Header,
  Logo,
  Form,
  FormGroup,
  Label,
  Input,
  Button,
} from "./styles";

import logo from "../../images/logo.png";

export default function Modal({ visible, onClose }) {
  const [table, setTable] = useState(null);
  const [order, setOrder] = useState(null);

  function handleSubmit() {
    if (!table || !order) {
      Alert.alert("Error!", "Preencha todos os campos.");
      return;
    }

    fetch("http://192.168.15.37:3001/orders", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ table, description: order }),
    })
      .then((resp) => {
        if (resp.ok) {
          Alert.alert("Pedido cadastrado com sucesso!");
          onClose();
        } else {
          Alert.alert(
            "Erro - !resp.ok!",
            "Ocorreu um erro ao cadastrar o pedido, tente novamente!"
          );
        }
      })

      .catch(() => Alert.alert("Erro!", "Falha ao conectar no servidor"));
  }

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

        <Form>
          <FormGroup>
            <Label>Número da mesa</Label>
            <Input placeholder="Número da mesa" onChangeText={setTable} />
          </FormGroup>

          <FormGroup>
            <Label>Pedido</Label>
            <Input
              placeholder="Itens do pedido"
              multiline
              onChangeText={setOrder}
            />
          </FormGroup>

          <Button onPress={handleSubmit}>
            <Button.Label>Cadastrar Pedido</Button.Label>
          </Button>
        </Form>
      </Container>
    </RNModal>
  );
}
