import React, {useEffect, useState} from "react";
import {View} from "react-native";
import StyledTextInput from "../../atoms/StyledTextInput";
import AsyncStorage from "@react-native-community/async-storage";

type Props = {
  startingValue: {
    model: string | null
    power: string | null
  }
}

export default function ShowerFormArea({startingValue}: Props) {
  const [modelValue, setModelValue] = useState('');
  const [powerValue, setPowerValue] = useState('');

  const handleChangeModel = async (value: string) => {
    setModelValue(value);
    await AsyncStorage.setItem('model', value);
  }

  const handleChangePower = async (value: string) => {
    setPowerValue(value);
    await AsyncStorage.setItem('power', value);
  }

  useEffect(() => {
    setModelValue(startingValue.model ?? '')
    setPowerValue(startingValue.power ?? '')
  }, [startingValue])

  return (
    <View>
      <View style={{marginBottom: 25}}>
        <StyledTextInput
          value={modelValue ?? startingValue.model}
          onChangeText={(v) => void handleChangeModel(v)}
          placeholder="Modelo"
        />
      </View>
      <View style={{marginBottom: 25}}>
        <StyledTextInput
          value={powerValue ?? startingValue.model}
          onChangeText={(v) => void handleChangePower(v)}
          placeholder="Potência em Kw"
          keyboardType="numeric"
        />
      </View>
    </View>
  );
}
