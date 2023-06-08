import React, {useState} from "react";
import {
  View,
  Modal,
  ListRenderItem,
} from "react-native";
import SelectInputField from "../../atoms/SelectInputField";
import {
  Header,
  ModalContent,
  HeaderTitle,
  HeaderUpper,
  HeanderBack,
  HeanderBackText,
  SearchInput,
  ModalOptions,
  ModalOption,
  ModalOptionText,
} from "./style";

type Props = {
  placeholder: string;
  onChange: (item: OptionType) => void;
  title: string;
  options: OptionType[];
};

export type OptionType = {
  id: number;
  title: string;
};

export default function SelectInput({placeholder, onChange, title, options}: Props) {
  const [visible, setVisible] = useState(false);
  const [selectedOption, setSelectedOption] = useState<
    OptionType | undefined
  >();

  const onPress = () => setVisible(true);

  const handleOptionSelected = (item: OptionType) => {
    setVisible(false);

    setSelectedOption(item);

    onChange(item);
  }

  const renderModalOption: ListRenderItem<OptionType> = ({item}) => {
    return (
      <ModalOption onPress={() => handleOptionSelected(item)}>
        <ModalOptionText>{item.title}</ModalOptionText>
      </ModalOption>
    );
  };

  return (
    <View>
      <SelectInputField
        placeholder={selectedOption?.title ?? placeholder}
        onPress={onPress}
      ></SelectInputField>
      <Modal
        onRequestClose={() => setVisible(false)}
        visible={visible}
        animationType={"slide"}
      >
        <ModalContent>
          <Header>
            <HeaderUpper>
              <HeanderBack onPress={() => setVisible(false)}>
                <HeanderBackText>voltar</HeanderBackText>
              </HeanderBack>
              <HeaderTitle>{title}</HeaderTitle>
              <HeanderBack onPress={() => setVisible(false)}>
                <HeanderBackText>concluir</HeanderBackText>
              </HeanderBack>
            </HeaderUpper>
            <SearchInput placeholder="Pesquisar"></SearchInput>
          </Header>
          <ModalOptions
            data={options}
            renderItem={renderModalOption}
            keyExtractor={(item: OptionType) => String(item.id)}
          />
        </ModalContent>
      </Modal>
    </View>
  );
}
