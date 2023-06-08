import React, {useEffect, useState} from "react";
import {View} from "react-native";
import SelectInput, {OptionType} from "../../molecules/SelectInput";
import axios from 'axios';

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
      <SelectInput
        placeholder="Estado"
        options={ufs}
        onChange={handleSelectOption}
        title="Estado"
      ></SelectInput>
    </View>
  );
}
