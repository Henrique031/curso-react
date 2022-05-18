import React, { Component} from 'react';
import { Text } from 'react-native';
import Estilo from '../estilos'

export default class Mega extends Component {

    render() {
        return(
            <Text style={Estilo.txtG}>
                Gerador de Mega-Sena
            </Text>
        )
    }
}