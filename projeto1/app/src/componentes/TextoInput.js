import React from 'react';
import {View, TextInput, Text, StyleSheet } from 'react-native';

export default props => {
    const lista = [] = React.useState('Digite algo')
    return(
    <View style={style.view}>
        <TextInput style={style.TextInput} value={null}/>
    </View> 
        )
}

const style = StyleSheet.create({
    view: {
        textAlign: 'center'
    },
    TextInput: {
        color: 'blue',
        backgroundColor: 'blue',
        width: 400 //comprimento
    }
})