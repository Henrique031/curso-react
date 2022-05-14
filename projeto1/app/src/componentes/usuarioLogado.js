import React from 'react';
import { Text } from 'react-native';
import Estilo from './styles'
import If from './if'


export default props => {
    const usuario = props.usuario || {}

  return (
    <>
    {/* <If teste={usuario && Object.keys(usuario).length !== 0} > */}
    <If teste={usuario && usuario.nome && usuario.email} >
        <Text >Usuário Logado:</Text>
        <Text style={Estilo.txtG} >{usuario.nome} - {usuario.email}</Text> 
    </If>   
    </>
  )
}