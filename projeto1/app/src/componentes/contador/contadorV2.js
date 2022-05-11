import React, { useState } from 'react';
import { Text } from 'react-native';
import Estilo from '../styles'

import ContadorDisplay from './contadorDisplay';;
import ContadorBotoes from './contadorBotoes';

export default props => {
    const [num, setNum] = useState(0)

    const incremento = () => setNum(num + 1)
    const decremento = () => setNum(num - 1)

    return(
        <>
            <Text style={Estilo.txtG}>Contador V2</Text> 
            <ContadorDisplay num={num} />
            <ContadorBotoes incremento={incremento} decremento={decremento} />
        </>
    )
}