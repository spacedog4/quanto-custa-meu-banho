import React from "react";
import {Container} from "./style";
import CurrencyInput from "react-native-currency-input";

type Props = {
  placeholder: string;
  value: number|null,
  setValue: (value: number | null) => void
};

export default function StyledCurrencyInput({placeholder, value, setValue}: Props) {
  return (
    <Container
      value={value}
      onChangeValue={setValue}
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
