import React from "react";
import {Container} from "./style";

type Props = {
  placeholder: string;
  value: number|null,
  onChangeValue: (value: number | null) => void
};

export default function StyledCurrencyInput({placeholder, value, onChangeValue}: Props) {
  return (
    <Container
      value={value}
      onChangeValue={onChangeValue}
      prefix="R$ "
      delimiter="."
      separator=","
      precision={2}
      minValue={0}
      showPositiveSign={false}
      placeholder={placeholder}
      placeholderTextColor="#ffffff99"
      keyboardType="numeric"
    >
    </Container>
  );
}
