import React from 'react';
import { Button, View, StyleSheet } from 'react-native';

export default props => {

  return(
    <View style={styles.botoes}>
        <Button title="+" onPress={props.incremento} />
        <Button title="-" onPress={props.decremento} />
    </View>
  )
}

const styles = StyleSheet.create({
  botoes: {
    flexDirection: 'row'
  },
});