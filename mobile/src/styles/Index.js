import styled from "styled-components/native";

export const Container = styled.SafeAreaView`
  flex: 1;
  align-items: center;
`;

export const Logo = styled.Image`
  margin-top: 32px;
`;

export const NewOrderContainer = styled.View`
  background: white;
  height: 90px;
  width: 100%;
  position: absolute;
  bottom: 0;
  box-shadow: 0px 0px 13px rgba(0, 0, 0, 0.25);
  padding: 0 24px;
  justify-content: center;
`;
