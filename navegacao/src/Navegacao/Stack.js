import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import TelaA from '../views/TelaA';
import TelaB from '../views/TelaC';
import TelaC from '../views/TelaB';
import PassoStack from '../componentes/PassoStack'; 

const Stack = createStackNavigator()

export default props => (   
    <Stack.Navigator initialRouteName="TelaA" screenOptions={{headerShown: true}} >
        <Stack.Screen name="TelaA" options={{ title: 'Infomações Iniciais'}} component={TelaA} />
        <Stack.Screen name="TelaB" component={TelaB} />
        <Stack.Screen name="TelaC" component={TelaC} />
    </Stack.Navigator>
)
