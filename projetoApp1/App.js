import React from 'react';
import { Text, View, SafeAreaView, Button, TextInput, ImageBackground } from 'react-native';
import ImgPets from './assets/pets'

export default function Pricipal()  {

  return (
    <SafeAreaView style={{flex: 1}} >
      <View>
      <ImageBackground source={ImgPets}  >
        
      </ImageBackground>
      </View>
    </SafeAreaView>
  )
}