import React from 'react';
import { View, StyleSheet } from 'react-native';
import Quadrado from './quadrado';

export default props => {

  return (
    
     <View style={styles.flexV3}>

        <Quadrado cor='#ff801a' lado={20} />
        <Quadrado cor='#50d1f6' lado={30} />
        <Quadrado cor='#dd22c1' lado={40} />
        <Quadrado cor='#8312ad' lado={50} />
        <Quadrado cor='#36c9a7' lado={60} />
     </View>
    
  )
}

const styles = StyleSheet.create({

  flexV3: {
    height: 350, //altura
    width: '100%', //largura
    backgroundColor: 'black', // cor de fundo
    //flexDirection => ela faz o ajuste, de como eu vou lidar com o eixo principal
    flexDirection: 'row', //deixa em fileira // Já que foi chamado o flexDirection "row" o linha principal foi elterada
    // flexDirection: 'row-reverse', //deixa a fileira invertida
    // flexDirection: 'column', //deixa em coluna 
    // flexDirection: 'column-reverse', //deixa a coluna invertida, começando de baixo para cima 
    // justifyContent => agora o justifyContent vai mexer em linha, por causa do flexDirection "row"
    justifyContent: 'space-evenly',
    // alignItems => agora vai ajustar a linha da coluna, já que agora a linha principal, está em fileira
    alignItems: 'flex-start', // joga tudo pra inicio 
    // alignItems: 'baseline', // ele alinha no começo
    // alignItems: 'stretch', // Neste exercicio ele vai esticar em vertical (se caso ouver espaço disponivel)
  }
});