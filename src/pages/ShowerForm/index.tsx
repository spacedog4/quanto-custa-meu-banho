import React, {useEffect, useState} from "react";
import {Container, HeadingSubtitle} from "./style";
import HeadingTitle from "../../components/atoms/HeadingTitle";
import {NativeStackScreenProps} from "@react-navigation/native-stack";
import ContinueButton from "../../components/molecules/ContinueButton";
import {View, Keyboard} from "react-native";
import BackgroundCircle from "../../components/atoms/BackgroundCircle";
import ShowerFormArea from "../../components/organisms/ShowerFormArea";
import AsyncStorage from "@react-native-community/async-storage";
import {ShowerType} from "@type/ShowerTypes";

export default function ShowerFormPage({navigation}: NativeStackScreenProps<any>) {
  const [shower, setShower] = useState<ShowerType>({
    model: 'Comum 220',
    power: 7500
  })
  const [keyboardShowing, setKeyboardShowing] = useState(false);

  useEffect(() => {
    AsyncStorage.getItem('shower').then(value => {
      if (value) {
        setShower(JSON.parse(value));
      } else {
        setShower({
          model: null,
          power: null
        })
      }
    });

    const keyboardDidShowListener = Keyboard.addListener(
        'keyboardDidShow',
        () => setKeyboardShowing(true)
    )

    const keyboardDidHideListener = Keyboard.addListener(
        'keyboardDidHide',
        () => setKeyboardShowing(false)
    )

    return () => {
      keyboardDidHideListener.remove()
      keyboardDidShowListener.remove()
    }
  }, [navigation]);

  const goToNext = () => {
    navigation.navigate('Recording')
  };

  const handleUpdateShower = async (shower: ShowerType) => {
    setShower(shower);
    await AsyncStorage.setItem('shower', JSON.stringify(shower));
  }

  return (
    <Container>
      { !keyboardShowing && (
        <View>
          <HeadingTitle>Nos diga mais sobre seu chuveiro</HeadingTitle>
          <HeadingSubtitle>A potência média dos chuveiros 220v é de 7500wats, enquanto os de 127v é em torno de 5500wats</HeadingSubtitle>
        </View>
      )}

      <View style={{marginBottom: 200}}>
        {shower && <ShowerFormArea shower={shower} updateShower={handleUpdateShower}/>}
      </View>

      <BackgroundCircle/>

      <ContinueButton onPress={goToNext}/>
    </Container>
  );
}
