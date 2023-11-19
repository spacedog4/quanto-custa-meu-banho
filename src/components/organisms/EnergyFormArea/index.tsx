import React, {useEffect, useState} from "react";
import {View} from "react-native";
import SelectInput, {OptionType} from "../../molecules/SelectInput";
import axios from 'axios';
import StyledCurrencyInput from "../../atoms/StyledCurrencyInput";
import AsyncStorage from "@react-native-community/async-storage";

export type ibgeUfOption = {
  id: number;
  nome: string;
  regiao: {
    id: number;
    nome: string;
    sigla: string;
  };
  sigla: string;
}

type Props = {
  startingValue: {
    uf: OptionType | null,
    energyValue: number | null,
    energyDistributor: OptionType | null
  }
}

export default function EnergyFormArea({ startingValue }: Props) {
  const [ufs, setUFs] = useState([]);
  const [energyDistributors] = useState<OptionType[]>([
    {id: 1, title: 'Copel'}, {id: 2, title: 'Teste'}
  ]);
  const [energyValue, setEnergyValue] = useState<number|null>(null);

  const handleChangeEnergyValue = async (value: number|null) => {
    setEnergyValue(value);
    await AsyncStorage.setItem('energyValue', value ? value.toString() : '');
  }

  const handleSelectUF = async (item: OptionType) => {
    await AsyncStorage.setItem('uf', JSON.stringify(item));
  };

  const handleSelectEnergyDistributor = async (item: OptionType) => {
    await AsyncStorage.setItem('energyDistributor', JSON.stringify(item));
  };

  useEffect(() => {
    axios.get('https://servicodados.ibge.gov.br/api/v1/localidades/estados').then(({data}) => {
      const options = data.map((item: ibgeUfOption) => {
        return {
          id: item.id,
          uf: item.sigla,
          title: item.nome
        }
      });

      setUFs(options);
    }).catch(err => {
      //TODO: exibir mensagem com modal de conexão para tentar novamente
      console.error(err)
    });
  }, [])

  return ufs && (
    <View>
      <View style={{marginBottom: 25}}>
        <SelectInput
          placeholder="Estado"
          options={ufs}
          onChange={(v) => void handleSelectUF(v)}
          title="Estado"
          initialOption={startingValue.uf}
        ></SelectInput>
      </View>

      <View style={{marginBottom: 25}}>
        <SelectInput
          placeholder="Distribuidora"
          options={energyDistributors}
          onChange={(v) => void handleSelectEnergyDistributor(v)}
          title="Distribuidora"
          initialOption={startingValue.energyDistributor}
        ></SelectInput>
      </View>

      <StyledCurrencyInput
        value={energyValue ?? startingValue.energyValue}
        onChangeValue={(v) => void handleChangeEnergyValue(v)}
        placeholder="Valor Km/h"
      />
    </View>
  );
}
