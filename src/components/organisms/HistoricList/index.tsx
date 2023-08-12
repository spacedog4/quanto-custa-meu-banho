import React from 'react';
import {Container} from "./style";
import HistoricItem from "../../molecules/HistoricItem";
import {Dimensions, FlatList, TouchableWithoutFeedback, View} from "react-native";
import DownIcon from "../../atoms/DownIcon";

type Props = {
  size: string,
  goBack?: () => void
}

type HistoricItemType = {
  value: number
  date: string
}

export default function HistoricList({size, goBack}: Props) {
  const {height, width} = Dimensions.get('window');
  const data: HistoricItemType[] = [
    {value: 16.30, date: '2022-08-31'},
    {value: 36.90, date: '2022-09-01'},
    {value: 16.30, date: '2022-08-31'},
    {value: 36.90, date: '2022-09-01'},
    {value: 16.30, date: '2022-08-31'},
    {value: 36.90, date: '2022-09-01'},
    {value: 16.30, date: '2022-08-31'},
    {value: 36.90, date: '2022-09-01'},
    {value: 16.30, date: '2022-08-31'},
    {value: 36.90, date: '2022-09-01'},
    {value: 16.30, date: '2022-08-31'},
    {value: 36.90, date: '2022-09-01'},
  ]

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
        data={data}
        scrollEnabled={size !== 'small'}
        fadingEdgeLength={300}
        showsVerticalScrollIndicator={false}
        renderItem={({item}) => (
          <HistoricItem
            value={item.value}
            date={'2022-08-31'}
          />
        )}
        style={
          {height: height * 0.8, flexGrow: 0}
        }
      >
      </FlatList>
    </Container>
  )
}