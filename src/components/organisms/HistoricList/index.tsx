import React, {useState} from 'react';
import {Container} from "./style";
import HistoricItem from "../../molecules/HistoricItem";
import {Dimensions, FlatList, TouchableOpacity, TouchableWithoutFeedback, View} from "react-native";
import DownIcon from "../../atoms/DownIcon";
import {HistoricItemType} from "@type/HistoricTypes";
import ModalHistoricDetails from "../../molecules/ModalHistoricDetails";


type Props = {
  size: string,
  historic: HistoricItemType[]
  goBack?: () => void
}

export default function HistoricList({size, historic, goBack}: Props) {
  const [visibleModal, setVisibleModal] = useState(false)
  const {height, width} = Dimensions.get('window')
  const [selectedHistoricItem, setSelectedHistoricItem] = useState<HistoricItemType>()

  const openModalHistoricItem = (historicItem: HistoricItemType) => {
    setVisibleModal(true)
    console.log(historicItem)
    setSelectedHistoricItem(historicItem)
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
      <FlatList<HistoricItemType>
        data={historic}
        scrollEnabled={size !== 'small'}
        fadingEdgeLength={300}
        showsVerticalScrollIndicator={false}
        renderItem={({item}) => (
          size === 'small' ?
            <HistoricItem
              value={item.value}
              date={item.date}
            /> : <TouchableOpacity onPress={() => openModalHistoricItem(item)}>
              <HistoricItem value={item.value} date={item.date}/>
            </TouchableOpacity>
        )}
        style={
          {height: height * 0.8, flexGrow: 0}
        }
      >
      </FlatList>
      <ModalHistoricDetails visible={visibleModal} setVisible={setVisibleModal} historicDetails={selectedHistoricItem} />
    </Container>
  )
}