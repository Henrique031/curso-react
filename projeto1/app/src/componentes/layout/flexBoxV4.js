import React from 'react';
import { View, StyleSheet } from 'react-native';

export default props => {

  return (
    
     <View style={styles.flexV4}>

       <View style={styles.V0} />
       <View style={styles.V1} />
       <View style={styles.V2} />
   
     </View>
    
  )
}

const styles = StyleSheet.create({

  flexV4: {
    width: 100,
    flexGrow: 1,
    backgroundColor: 'black', // cor de fundo

  },
  V0:{
    backgroundColor: '#50d1f6',
    height: 300
  },
  V1:{
    backgroundColor: '#ff801a',
    flexGrow: 5,

  },
  V2:{
    backgroundColor: '#dd22c1',
    flexGrow: 1
  }
});