import React, {useState} from 'react';
import { Text, Button } from 'react-native';

export default props => {

    // let numero = props.inicial

const [numero, setNumero] = useState(props.inicial)

    const inc = () => setNumero(numero + 1)

    const dec = () => setNumero(numero - 1)

    return(
        <>
        <Text style={{fontSize: 50}}> {numero} </Text>
        <Button title="+" onPress={inc} />
        <Button title="-"  onPress={dec}/>
        </>
    )
}