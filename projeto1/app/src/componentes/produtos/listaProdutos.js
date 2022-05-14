import React from 'react';
import { Text } from 'react-native';
import Estilo from '../styles'
import produtos from './produtos';

export default props => {

    function obterLista () {
        return produtos.map(p => {
            return <Text key={p.id} >{p.id}) {p. nome} tem R$ {p.preco}</Text>
        })
    }

  return (
    <>
        <Text style={Estilo.txtG} >
          Lista de Produtos
        </Text> 
        {obterLista()}
        
    </>
  )
}
/* export default props => {

  return (
    <>
        <Text style={Estilo.txtG} >
          Lista de Produtos
        </Text> 
        {produtos.map(p => {
            return <Text key={p.id} >{p.id}) {p. nome} tem R$ {p.preco}</Text>
            // return <Text>{p.id}) {p. nome} tem R$ {p.preco}</Text>
        })}
    </>
  )
} */