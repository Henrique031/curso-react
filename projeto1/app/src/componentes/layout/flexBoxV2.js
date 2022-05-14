import React from 'react';
import { View, StyleSheet } from 'react-native';
import Quadrado from './quadrado';

export default props => {

  return (
    
     <View style={styles.flexV2}>
        <Quadrado cor='#ff801a' />
        <Quadrado cor='#50d1f6' />
        <Quadrado cor='#dd22c1' />
        <Quadrado cor='#8312ad' />
        <Quadrado cor='#36c9a7' />
     </View>
    
  )
}

const styles = StyleSheet.create({

  flexV2: {
    flex: 1,
    justifyContent: 'space-evenly',
    backgroundColor: 'black', // cor de fundo
    width: '100%', //largura
    //alignItems => alinhar os intens dentro de um conteiner
    // alignItems: 'flex-start', // cemeço (depende do main axis) (se não tiver o tamanho fixo, ele pode não aparecer)
    alignItems: 'flex-end', // fim (depende do main axis)
    // alignItems: 'center', // centraliza todos elementos no centro
    // alignItems: 'baseline',
    // alignItems: 'stretch', // Vai esticar (se ele estiver um tamanho fixo, ele nao vai esticar)

  },
});