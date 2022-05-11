import React from 'react';
import { StyleSheet, Text, View, SafeAreaView, Button } from 'react-native';
import Estilo from './src/componentes/styles'


/*
import Botao from './src/componentes/botao';
import Multi from './src/componentes/multi';
import {Comp2, Comp3} from './src/componentes/multi';
import CampTxt from './src/componentes/TextoInput';
import MinMax from './src/componentes/mimMax'
import Aleatorio from './src/componentes/aleatorio'
import Titulo from './src/componentes/titulo'
import Contador from './src/componentes/contador'
import ImparPar from './src/componentes/imparPar'
import Pai from './src/componentes/indireta/pai'
*/
import ContadorV2 from './src/componentes/contador/contadorV2';

export default function analisar(){
  return(
    <SafeAreaView style={styles.safe}>
  
    <ContadorV2 />

   

       
     {/*
    <Pai />
    <ImparPar />
    <Contador inicial={50} />
       <Botao /> 
      <Aleatorio min={1} max={100} />
      { <Titulo principal="Cadastro Produto" secundario="Tela de Cadastro do Produto"/> }
      <Aleatorio min={1} max={100} />
      <Aleatorio min={1} max={100} />
      <Aleatorio min={1} max={100} />
      <Aleatorio min={1} max={100} />
      <Aleatorio min={1} max={100} /> 
       <MinMax min={4} max={20}/> 
       <MinMax min={9} max={50}/> 
       <MinMax corrida={9} atleta={50}/> 
       <Text style={Estilo.txtG}>Vazio</Text> 
       <Multi /> 
       <Comp2 /> 
       <Comp3 /> 
       <CampTxt /> */}

</SafeAreaView>
  )
}

const styles = StyleSheet.create({
  safe: {
    flex: 1,
    backgroundColor: '#9d9eb2',
    alignItems: 'center',
    justifyContent: 'center',
  },
});