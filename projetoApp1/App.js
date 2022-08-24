import React from 'react';
import { SafeAreaView, StyleSheet } from 'react-native';

import MegaNumero from './src/Components/Mega/MegaNumero';
// import Mega from './src/Components/Mega/Mega'
// import ListaProdutos from './src/Components/Produtos/ListaProdutos';
// import ListaProdutosV2 from './src/Components/Produtos/ListaProdutosV2';

export default function Pricipal()  {

  return (
    <SafeAreaView style={styles.container} >
      <MegaNumero />
    {/* 
    <Mega qtdeNumeros={10} />
    <ListaProdutosV2 />
    <ListaProdutos /> 
    */}

    </SafeAreaView>
  )
};

const styles = StyleSheet.create({
  container: {
    marginTop: 23,
    justifyContent: 'center',
    alignItems: 'center',
    flex: 1,
    backgroundColor: 'lightgray',
  }
});