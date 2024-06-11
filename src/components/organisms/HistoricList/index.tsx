import React, {useEffect, useState} from 'react';
import {Container, HistoricMonth, MonthTotal, MonthTotalText, MonthTotalValue} from "./style";
import HistoricItem from "../../molecules/HistoricItem";
import {Dimensions, FlatList, TouchableOpacity, TouchableWithoutFeedback, View, Text} from "react-native";
import DownIcon from "../../atoms/DownIcon";
import {HistoricItemGroupedByMonthType, HistoricItemType} from "@type/HistoricTypes";
import ModalHistoricDetails from "../../molecules/ModalHistoricDetails";
import AsyncStorage from "@react-native-async-storage/async-storage";
import {mountHistoricKey} from "../../../services/history";
import {formatMoney} from "../../../services/utils";


type Props = {
  size: string,
  historic: HistoricItemGroupedByMonthType,
  goBack?: () => void,
  updateHistoric?: () => void
}

export default function HistoricList({size, historic, goBack, updateHistoric}: Props) {
  const [visibleModal, setVisibleModal] = useState(false)
  const {height, width} = Dimensions.get('window')
  const [selectedHistoricItem, setSelectedHistoricItem] = useState<HistoricItemType>()

  const openModalHistoricItem = (historicItem: HistoricItemType) => {
    setVisibleModal(true)
    setSelectedHistoricItem(historicItem)
  }

  const handleRemoveHistoric = async () => {
    if (!selectedHistoricItem) return;

    const key = mountHistoricKey(selectedHistoricItem.date);

    let newHistoricGroupedByMonth = {...historic};

    newHistoricGroupedByMonth[key] = historic[key].filter(item => {
      return item.date !== selectedHistoricItem.date
    });

    await AsyncStorage.setItem('historic', JSON.stringify(newHistoricGroupedByMonth));

    if (updateHistoric) updateHistoric()
  }

  const monthFromKey = (key: string): string => {
    return key.split('-')[0];
  }

  const getTotal = (historic: HistoricItemType[]): string => {
    let total = 0

    historic.forEach(item => {
      total += item.value
    })

    return formatMoney(total)
  }

  return (
    <Container>
      {
        size !== 'small' &&
          <TouchableWithoutFeedback onPress={goBack}>
              <View style={{width, alignItems: 'center', justifyContent: 'center', padding: 20, marginBottom: 20}}>
                  <DownIcon/>
              </View>
          </TouchableWithoutFeedback>
      }
      <FlatList
        data={Object.keys(historic)}
        scrollEnabled={size !== 'small'}
        fadingEdgeLength={300}
        showsVerticalScrollIndicator={false}
        renderItem={({item}) => (
          <HistoricMonth>
            <MonthTotal>
              <MonthTotalText>{monthFromKey(item)}</MonthTotalText>
              <MonthTotalValue>{getTotal(historic[item])}</MonthTotalValue>
            </MonthTotal>
            {historic[item].map(historicItem => (
              size == 'small' ?
                <HistoricItem
                  value={historicItem.value}
                  date={historicItem.date}
                /> :
                <TouchableOpacity onPress={() => openModalHistoricItem(historicItem)}>
                  <HistoricItem value={historicItem.value} date={historicItem.date}/>
                </TouchableOpacity>
            ))}
          </HistoricMonth>
        )}
      >
      </FlatList>
      <ModalHistoricDetails
        visible={visibleModal}
        setVisible={setVisibleModal}
        historicDetails={selectedHistoricItem}
        removeHistoric={handleRemoveHistoric}
      />
    </Container>
  )
}