import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import Estilo from '../styles'

export default props => {

  return(
    <View style={Styles.display}>
      <Text style={[Estilo.txtG, Styles.displayTxt]}>{props.num}</Text> 
    </View>
  )
}

const Styles = StyleSheet.create({
    display: {
        backgroundColor: '#000',
        padding: 20,
        width: 300,
        
    },
    displayTxt: {
        color: '#FFF',
        textAlign: 'center',
    }
})