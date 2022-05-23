import React from 'react';
import { SafeAreaView, View, Text } from 'react-native';
import Index from './src/Navegacao/index'
// import TelaA from './src/views/TelaA';
// import TelaB from './src/views/TelaB';
// import TelaC from './src/views/TelaC'; 
export default props => {
  return (
    <SafeAreaView style={{flex: 1,}}>
      <Index />
    </SafeAreaView>
  )
}

/* import React from 'react';
import { SafeAreaView } from 'react-native';
import { NavigationContainer } from '@react-navigation/native'
import Stack from './src/Navegacao/Stack';


export default props => {

  return (
    <SafeAreaView style={{flex: 1}}>
      <NavigationContainer>
        <Stack />
      </NavigationContainer>
    </SafeAreaView>
  )
} */