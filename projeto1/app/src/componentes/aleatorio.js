import React from 'react';
import { Text } from 'react-native';
import Estilo from './styles';

export default (props) => { // Ele não recomenda mexe diretamente nas {min, maxx}
   /*  props.min +=  1000  //props é um objeto somente leitura
    props.max += 2000
    const {min, max} = props */
    props.min +=  1000  //props é um objeto somente leitura
    props.max += 2000
    let  {min, max} = props
    min += 1000
    max += 2000
    const delta = max - min + 1
    const aleatorio = parseInt(Math.random() * delta) + min
    return (  
    <Text 
        style={Estilo.txtG}>
    O valor aleatório é {aleatorio}</Text>
        )
    }


/* export default ({min, max}) => {
    let delta = max - min + 1
    let aleatorio = parseInt(Math.random() * delta) + min
    return (  
    <Text 
        style={Estilo.txtG}>
    O valor aleatório é {aleatorio}</Text>
        )
    }  */
    
    /* export default props => {
        const { min, max} = props
        let delta = max - min + 1
        let aleatorio = parseInt(Math.random() * delta) + min
        return (  
        <Text 
            style={Estilo.txtG}>
        O valor aleatório é {aleatorio}</Text>
            )
        }  */

    /* export default props => {
        let delta = props.max - props.min + 1
        let aleatorio = parseInt(Math.random() * delta) + props.min
        return (  
        <Text 
            style={Estilo.txtG}>
        O valor aleatório é {aleatorio}</Text>
            )
        }  */