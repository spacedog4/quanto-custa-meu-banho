import React from "react";
import {View} from "react-native";
import StyledTextInput from "../../atoms/StyledTextInput";
import {ShowerType} from "../../../types/ShowerTypes";

type Props = {
  shower: ShowerType,
  updateShower: (shower: ShowerType) => void
}

export default function ShowerFormArea({shower, updateShower}: Props) {
  const handleChangeModel = async (value: string) => {
    shower.model = value
    updateShower({...shower})
  }

  const handleChangePower = async (value: string) => {
    shower.power = Number(value)
    updateShower({...shower})
  }

  return (
    <View>
      <View style={{marginBottom: 25}}>
        <StyledTextInput
          value={shower.model ?? undefined}
          onChangeText={(v) => void handleChangeModel(v)}
          placeholder="Modelo"
        />
      </View>
      <View style={{marginBottom: 25}}>
        <StyledTextInput
          value={shower.power ? shower.power.toString() : undefined}
          onChangeText={(v) => void handleChangePower(v)}
          placeholder="Potência em Kw"
          keyboardType="numeric"
        />
      </View>
    </View>
  );
}
