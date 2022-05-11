import React from 'react';
import { View, Text } from 'react-native';
import Estilos from './styles'

export default ({ num = 1 }) => {
    
    return(
        <View>
            <Text style={Estilos.txtG}>O resultado é: </Text>
            {num % 2 === 0 
                ?<Text style={Estilos.txtG}>Par</Text> 
                :<Text style={Estilos.txtG}>Ímpar</Text>
            }
        </View>
    )
}
