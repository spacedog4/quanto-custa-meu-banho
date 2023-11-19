import React, {useEffect, useState} from "react";
import {View} from "react-native";
import SelectInput, {OptionType} from "../../molecules/SelectInput";
import axios from 'axios';
import StyledCurrencyInput from "../../atoms/StyledCurrencyInput";
import AsyncStorage from "@react-native-community/async-storage";
import {EnergyType} from "../../../types/EnergyTypes";

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
  energy: EnergyType,
  updateEnergy: (energy: EnergyType) => void
}

export default function EnergyFormArea({energy, updateEnergy}: Props) {
  const [ufs, setUFs] = useState([]);
  const [energyDistributors] = useState<OptionType[]>([
    {id: 1, title: 'Copel'}, {id: 2, title: 'Teste'}
  ]);

  const handleChangeEnergyValue = async (value: number | null) => {
    energy.energyValue = value
    updateEnergy({...energy})
  }

  const handleSelectUF = async (item: OptionType) => {
    energy.uf = item
    updateEnergy({...energy})
  }

  const handleSelectEnergyDistributor = async (item: OptionType) => {
    energy.uf = item
    updateEnergy({...energy})
  }

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
          initialOption={energy.uf}
        ></SelectInput>
      </View>

      <View style={{marginBottom: 25}}>
        <SelectInput
          placeholder="Distribuidora"
          options={energyDistributors}
          onChange={(v) => void handleSelectEnergyDistributor(v)}
          title="Distribuidora"
          initialOption={energy.energyDistributor}
        ></SelectInput>
      </View>

      <StyledCurrencyInput
        value={energy.energyValue}
        onChangeValue={(v) => void handleChangeEnergyValue(v)}
        placeholder="Valor Km/h"
      />
    </View>
  );
}
