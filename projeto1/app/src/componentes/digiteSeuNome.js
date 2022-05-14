import React, { useState } from 'react';
import { Text, TextInput } from 'react-native';

export default props => {
    const [nome, setNome] = useState('')
  return (
    <>
    <Text>{nome}</Text>
      <TextInput 
        style={{borderColor: 'black', borderWidth: 0.8 }}
        placeholder='Digite seu nome'
        value={nome}
        onChangeText={nome => setNome(nome)}

      /> 
    </>
  )
}