import React from 'react';
import { View } from 'react-native';

export default props => {
  let tamanho = props.lado || 50
  return (
    
        <View style={{
          width: tamanho,
          height: tamanho,
          backgroundColor: props.cor || '#000',
        }}>
        </View> 
    
  )
}
