import React from "react";
import { Container } from "./style";
import HeadingTitle from "../../components/atoms/HeadingTitle";
import EnergyFormArea from "../../components/organisms/EnergyFormArea";

export default function EnergyFormPage() {
  return (
    <Container>
      <HeadingTitle>Quanto você paga de energia?</HeadingTitle>
      <EnergyFormArea />
    </Container>
  );
}
