import React, {useEffect, useState} from "react";
import {Container} from "./style";
import HeadingTitle from "../../components/atoms/HeadingTitle";
import {NativeStackScreenProps} from "@react-navigation/native-stack";
import ContinueButton from "../../components/molecules/ContinueButton";
import {View} from "react-native";
import BackgroundCircle from "../../components/atoms/BackgroundCircle";
import ShowerFormArea from "../../components/organisms/ShowerFormArea";
import AsyncStorage from "@react-native-community/async-storage";
import {ShowerType} from "../../types/ShowerTypes";

export default function ShowerFormPage({navigation}: NativeStackScreenProps<any>) {
  const [shower, setShower] = useState<ShowerType>()

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
      <HeadingTitle>Nos diga mais sobre seu chuveiro</HeadingTitle>

      <View style={{marginBottom: 200}}>
        {shower && <ShowerFormArea shower={shower} updateShower={handleUpdateShower}/>}
      </View>

      <BackgroundCircle/>

      <ContinueButton onPress={goToNext}/>
    </Container>
  );
}
