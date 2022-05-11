import React from 'react';
import { Button } from 'react-native';

export default props => {

    function execultar(){
        console.warn('Está funcionando')
    }
    return(
    <>
        <Button style={{margim: 2}}
        title="Exelcultar1"
        onPress={execultar}/>
        <Button 
        title="Execultar2"
        onPress={function () {
            console.warn('Exec #01!!!')
        }} />

        <Button 
        title="Executar3"
        onPress={() => console.warn('Cuidado!')} />

    </>
  )
}