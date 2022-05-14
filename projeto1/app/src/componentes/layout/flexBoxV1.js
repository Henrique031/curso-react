import React from 'react';
import { View, StyleSheet } from 'react-native';
import Quadrado from './quadrado';

export default props => {

  return (
    
     <View style={styles.flexV1}>
        <Quadrado cor='#ff801a' />
        <Quadrado cor='#50d1f6' />
        <Quadrado cor='#dd22c1' />
        <Quadrado cor='#8312ad' />
        <Quadrado cor='#36c9a7' />
     </View>
    
  )
}

const styles = StyleSheet.create({

  flexV1: {
      flexGrow: 1,
      backgroundColor: 'black',
      //justifyContent => Como ele alinha no main axis (eixo principal)
    //   justifyContent: 'center', //centro
    //   justifyContent: 'flex-end', // final
    //   justifyContent: 'flex-start', //começo
    //   justifyContent: 'space-around', // começa com um espaço pequeno, dps vai dando um espaçamento padrão para cara cor
    //   justifyContent: 'space-between', // Espaço entre (não no começo)
    //   justifyContent: 'space-evenly', //Espaçamento igual para todos eles

      
  },
});