import React from 'react';
import { Text } from 'react-native';
import Estilo from './styles';

export default props => {
    return(
        <>

            <Text style={Estilo.txtG}>{props.principal} </Text>
            <Text style={Estilo.centralizandotxt}>{props.secundario} </Text>
        
        </>
    )
}

//==================================================================================
/* import React, { Fragment } from 'react';
import { Text } from 'react-native';
import Estilo from './styles';

export default props => {
    return(
        <Fragment>

            <Text style={Estilo.txtG}>{props.principal} </Text>
            <Text style={Estilo.centralizandotxt}>{props.secundario} </Text>
        
        </Fragment>
    )
} */

//====================================================================================
/* import React from 'react';
import { Text } from 'react-native';
import Estilo from './styles';

export default props => {
    return(
        <React.Fragment>

            <Text style={Estilo.txtG}>{props.principal} </Text>
            <Text style={Estilo.centralizandotxt}>{props.secundario} </Text>
        
        </React.Fragment>
    )
}
*/