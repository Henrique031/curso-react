import React from 'react';
import { Text, View, StyleSheet } from 'react-native';



export default props => {

  return (
    <View style={[styles.container, {backgroundColor: props.corFundo || 'black'}] }>
      <Text style={[styles.txt, {color: props.corTexto || 'white'}]} >
          {props.children}
      </Text> 
    </View>
  )
}

const styles = StyleSheet.create({

  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  txt: {
    fontSize: 50,
  },
});