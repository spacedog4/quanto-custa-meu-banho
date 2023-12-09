import {
  Container,
  Detail,
  DetailLabel,
  DetailValue,
  Divisor,
  HeadingTitle, ModalActionButtonText,
  ModalBackButton, ModalBackButtonInner,
  ModalContent,
  ModalFooter, ModalRemoveButton
} from "./style";
import React from "react";
import {Alert, View} from "react-native";
import {HistoricItemType} from "@type/HistoricTypes";
import BackButtonIcon from "../../atoms/BackButtonIcon";
import TrashIcon from "../../atoms/TrashIcon";

type Props = {
  visible: boolean,
  historicDetails: HistoricItemType | undefined,
  setVisible: (value: boolean) => void,
  removeHistoric: () => void
}

export default function ModalHistoricDetails({visible, historicDetails, setVisible, removeHistoric}: Props) {
  const formattedValue = (value: number | null) => {
    if (value === null) {
      return 0;
    }

    const formatter = Intl.NumberFormat('pt-BR', {style: 'currency', currency: 'BRL'});

    return formatter.format(value);
  }

  const formattedDate = (date: Date) => {
    const dateObj = new Date(date);

    const day = dateObj.getUTCDate().toString().padStart(2, '0')
    const month = (dateObj.getUTCMonth() + 1).toString().padStart(2, '0')
    const year = (dateObj.getUTCFullYear()).toString()

    return day + '/' + month + '/' + year;
  }

  const handleRemoveButton = () => {
    Alert.alert('Atenção', 'Tem certeza que deseja remover esse histórico?', [
      {
        text: 'Cancelar',
        onPress: () => console.log('cancelado'),
        style: 'cancel'
      },
      {
        text: 'Remover',
        onPress: () => {
          removeHistoric()
          setVisible(false)
        }
      }
    ])
  }

  return (
    <Container
      onRequestClose={() => setVisible(false)}
      visible={visible}
      animationType={"slide"}
    >
      {historicDetails && (
        <ModalContent>
          <View>
            <HeadingTitle>Detalhes</HeadingTitle>
            <Detail>
              <DetailLabel>Valor:</DetailLabel>
              <DetailValue>{formattedValue(historicDetails.value)}</DetailValue>
            </Detail>
            <Detail>
              <DetailLabel>Data:</DetailLabel>
              <DetailValue>{formattedDate(historicDetails.date)}</DetailValue>
            </Detail>

            <Divisor/>

            <HeadingTitle>Chuveiro</HeadingTitle>
            <Detail>
              <DetailLabel>Modelo:</DetailLabel>
              <DetailValue>{historicDetails.shower.model}</DetailValue>
            </Detail>
            <Detail>
              <DetailLabel>Potência:</DetailLabel>
              <DetailValue>{historicDetails.shower.power} kw</DetailValue>
            </Detail>

            <Divisor/>

            <HeadingTitle>Energia</HeadingTitle>
            <Detail>
              <DetailLabel>Distribuidora:</DetailLabel>
              <DetailValue>{historicDetails.energy?.energyDistributor?.title}</DetailValue>
            </Detail>
            <Detail>
              <DetailLabel>Valor Kw/h:</DetailLabel>
              <DetailValue>{formattedValue(historicDetails.energy?.energyValue)}</DetailValue>
            </Detail>
          </View>

          <ModalFooter>
            <ModalBackButton onPress={() => setVisible(false)}>
              <ModalBackButtonInner>
                <BackButtonIcon/><ModalActionButtonText>Voltar</ModalActionButtonText>
              </ModalBackButtonInner>
            </ModalBackButton>
            <ModalRemoveButton onPress={handleRemoveButton}>
              <TrashIcon/>
            </ModalRemoveButton>
          </ModalFooter>
        </ModalContent>
      )}
    </Container>
  )
}