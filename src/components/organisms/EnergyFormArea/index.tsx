import React, {useEffect, useState} from "react";
import {View} from "react-native";
import SelectInput, {OptionType} from "../../molecules/SelectInput";
import axios from 'axios';
import StyledCurrencyInput from "../../atoms/StyledCurrencyInput";
import {EnergyType, EnergyUfType} from "@type/EnergyTypes";
import {getEnergyDistributorsByUF} from "../../../services/energyDistributor";
import {getEnergyValueByDistributor} from "../../../services/energyByDistributor";

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
  const [ufs, setUfs] = useState<EnergyUfType[]>([]);
  const [energyDistributors, setEnergyDistributors] =
    useState<OptionType[]>([]);

  const handleChangeEnergyValue = async (value: number | null) => {
    energy.energyValue = value
    updateEnergy({...energy})
  }

  const loadEnergyDistributors = async () => {
    const data = await getEnergyDistributorsByUF(energy.uf ? energy.uf.uf : null)
    const energyDistributorsData = data.map(item => {
      return {id: item.id, title: item.name};
    });

    setEnergyDistributors(energyDistributorsData)

    if (energyDistributorsData.length == 1) {
      energy.energyDistributor = energyDistributorsData[0];

      const mostCommomValue = await getEnergyValueByDistributor(energy.energyDistributor.id);
      if (mostCommomValue) {
        energy.energyValue = mostCommomValue
      }

      updateEnergy({...energy})
    }
  }

  const handleSelectUF = async (item: OptionType) => {
    energy.uf = ufs.find(uf => uf.id == item.id) ?? null;
    energy.energyDistributor = null;
    updateEnergy({...energy})

    await loadEnergyDistributors()
  }

  const handleSelectEnergyDistributor = async (item: OptionType) => {
    energy.energyDistributor = item

    const mostCommomValue = await getEnergyValueByDistributor(item.id);
    if (mostCommomValue) {
      energy.energyValue = mostCommomValue
    }

    updateEnergy({...energy})
  }

  useEffect(() => {
    axios.get('https://servicodados.ibge.gov.br/api/v1/localidades/estados').then(({data}) => {
      const options = data.map((item: ibgeUfOption) => {
        return {
          id: item.id,
          uf: item.sigla,
          name: item.nome
        }
      });

      setUfs(options);
    }).catch(err => {
      //TODO: exibir mensagem com modal de conexão para tentar novamente
      console.error(err)
    });

    loadEnergyDistributors().then(() => {
      if (energyDistributors.length == 1) {
        energy.energyDistributor = energyDistributors[0];
        updateEnergy({...energy})
      }
    })
  }, [])

  const ufOptions = () => {
    return ufs.map(uf => ({id: uf.id, title: uf.name}));
  }

  const initialUf = () => {
    if (!energy.uf) return

    const energyUfId = energy.uf.id;
    const selectedUf = ufs.find(uf => uf.id == energyUfId)

    if (!selectedUf) return;

    return {
      id: selectedUf.id,
      title: selectedUf.name
    }
  }

  return ufs && energyDistributors && (
    <View>
      <View style={{marginBottom: 25}}>
        <SelectInput
          placeholder="Estado"
          options={ufOptions()}
          onChange={(v) => void handleSelectUF(v)}
          title="Estado"
          value={initialUf()}
        ></SelectInput>
      </View>

      <View style={{marginBottom: 25}}>
        <SelectInput
          placeholder="Distribuidora"
          options={energyDistributors}
          onChange={(v) => void handleSelectEnergyDistributor(v)}
          title="Distribuidora"
          value={energy.energyDistributor}
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
