import React, {useEffect, useState} from "react";
import {View} from "react-native";
import SelectInput, {OptionType} from "../../molecules/SelectInput";
import axios from 'axios';
import StyledCurrencyInput from "../../atoms/StyledCurrencyInput";

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

export default function EnergyFormArea() {
  const [ufs, setUFs] = useState([]);
  const [energyDistributors, setEnergyDistributors] = useState([
    {id: 1, title: 'Copel'}, {id: 2, title: 'Teste'}
  ]);
  const [energyValue, setEnergyValue] = useState<number|null>(null);

  const handleSelectOption = (item: OptionType) => {
    console.log(item);
  };

  useEffect(() => {
    axios.get('https://servicodados.ibge.gov.br/api/v1/localidades/estados').then(({data}) => {
      const options = data.map((item: ibgeUfOption) => {
        return {
          id: item.id,
          title: item.nome
        }
      });

      setUFs(options);
    });
  }, [])

  return (
    <View>
      <View style={{marginBottom: 25}}>
        <SelectInput
          placeholder="Estado"
          options={ufs}
          onChange={handleSelectOption}
          title="Estado"
        ></SelectInput>
      </View>

      <View style={{marginBottom: 25}}>
        <SelectInput
          placeholder="Distribuidora"
          options={energyDistributors}
          onChange={handleSelectOption}
          title="Distribuidora"
        ></SelectInput>
      </View>

      <StyledCurrencyInput
        value={energyValue}
        setValue={setEnergyValue}
        placeholder="Valor Km/h"
      />
    </View>
  );
}
