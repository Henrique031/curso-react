import React, { useState, useContext } from 'react'
import { Text, View, TextInput, StyleSheet, Button } from 'react-native'
import UsersContext from '../context/UsersContext'

export default ({route, navigation}) => {
    const [user, setUser] = useState(route.params ? route.params : {})

    return (
        <View style={style.form}>
            
        </View>
    )
}

const style = StyleSheet.create({
    form: {
        padding: 12,
    },
    input: {
        height: 40,
        borderColor: 'gray',
        borderWidth: 1,
        marginBottom: 15,
    }
})