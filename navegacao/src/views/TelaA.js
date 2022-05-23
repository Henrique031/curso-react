import React from 'react';
import TextoCentral from '../componentes/TextoCentral';


export default props => { 
    props.navigation.navigate("TelaB")
    return(

        <TextoCentral corFundo="red">
            Tela A
        </TextoCentral>
    )
}
