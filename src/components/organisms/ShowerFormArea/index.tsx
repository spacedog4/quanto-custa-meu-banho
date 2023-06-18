import React, {useState} from "react";
import {View} from "react-native";
import StyledTextInput from "../../atoms/StyledTextInput";

type ibgeUfOption = {
  id: number;
  nome: string;
  regiao: {
    id: number;
    nome: string;
    sigla: string;
  };
  sigla: string;
}

export default function ShowerFormArea() {
  const [modelValue, setModelValue] = useState('');
  const [summerPowerValue, setSummerPowerValueValue] = useState('');
  const [winterPowerValue, setWinterPowerValueValue] = useState('');

  return (
    <View>
      <View style={{marginBottom: 25}}>
        <StyledTextInput
          value={modelValue}
          onChangeText={setModelValue}
          placeholder="Modelo"
        />
      </View>
      <View style={{marginBottom: 25}}>
        <StyledTextInput
          value={summerPowerValue}
          onChangeText={setSummerPowerValueValue}
          placeholder="Potência em Kw (verão)"
          keyboardType="numeric"
        />
      </View>
      <View style={{marginBottom: 25}}>
        <StyledTextInput
          value={winterPowerValue}
          onChangeText={setWinterPowerValueValue}
          placeholder="Potência em Kw (inverno)"
          keyboardType="numeric"
        />
      </View>
    </View>
  );
}
