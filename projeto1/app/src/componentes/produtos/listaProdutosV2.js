import React from 'react';
import { Text, FlatList } from 'react-native';
import Estilo from '../styles'
import produtos from './produtos';

export default props => {

    /* const produtoRender = ({ item: p }) => {
        return <Text>{p.id}) {p.nome}</Text>
    } */

  return (
    <>
        <Text style={Estilo.txtG} >
          Lista de Produtos V2
        </Text> 
        
        <FlatList
        data={produtos} //para ler os produtos
        keyExtractor={item => `${item.id}`} // pra gerar a chave
        renderItem={({ item: p }) => { // chamando essa função, para redenrizar cada um dos items
            return <Text>{p.id}) {p.nome} - R$ {p.preco}</Text>
        }} />
    </>
  )
}