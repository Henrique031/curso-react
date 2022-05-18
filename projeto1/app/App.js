import React from 'react';
import { StyleSheet, Text, View, SafeAreaView, Button } from 'react-native';


/*
import Estilo from './src/componentes/styles'
import Diferenciar from './src/componentes/diferenciar';
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
import ContadorV2 from './src/componentes/contador/contadorV2';
import ParImpar from './src/componentes/parImpar'
import Familia from './src/componentes/relacao/familia'
import Membro from './src/componentes/relacao/membro'
import UsuarioLogado from './src/componentes/usuarioLogado'
import ListaProdutos from './src/componentes/produtos/listaProdutos';
import ListaProdutosV2 from './src/componentes/produtos/listaProdutosV2';
import DigiteSeuNome from './src/componentes/digiteSeuNome'
import FlexBoxV1 from './src/componentes/layout/flexBoxV1'
import FlexBoxV2 from './src/componentes/layout/flexBoxV2'
import FlexBoxV3 from './src/componentes/layout/flexBoxV3'
import FlexBoxV4 from './src/componentes/layout/flexBoxV4'
*/
import Mega from './src/componentes/mega/mega'

export default function analisar(){
  return(
    <SafeAreaView style={styles.safe}>
     <Mega />
     {/*
      <FlexBoxV4 />
      <FlexBoxV3 />
      <FlexBoxV2 />
      <FlexBoxV1 />
      <DigiteSeuNome />
      <ListaProdutosV2 />
    < ListaProdutos />
    <UsuarioLogado usuario={{nome: 'Gui', email: 'rique@gmail.com'}} />
    <UsuarioLogado usuario={{nome: 'Gui'}} />
    <UsuarioLogado usuario={{email: 'rique@gmail.com'}} />
    <UsuarioLogado usuario={null} />
    <UsuarioLogado usuario={{}} />

      <Familia >
        <Membro nome="Bia" sobrenome="Arruda" />
        <Membro nome="Carlos" sobrenome="Arruda" />
      </Familia>
  
      <Familia >
        <Membro nome="Ana" sobrenome="Silva" />
        <Membro nome="Julia" sobrenome="Silva" />
        <Membro nome="Gui" sobrenome="Silva" />
        <Membro nome="Rebeca" sobrenome="Silva" />
      </Familia>
    <ParImpar />
    <Diferenciar />
    <ContadorV2 />
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
    padding: 60
  },
});