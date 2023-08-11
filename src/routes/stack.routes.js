import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NavigationContainer } from '@react-navigation/native';

//import { Splash } from '../lotties/Splash';
import CadUsuario from '../screens/CadUsuario';
import Login from '../screens/Login';
import NovoPet from '../screens/NovoPet';
import AuthRoutes from './tab.routes';
import NovaAlimentacao from '../screens/NovaAlimentacao';
import Usuario from '../screens/Usuario';


const Stack = createNativeStackNavigator();


function StackNavigator(){
    return (
        <Stack.Navigator>
            <Stack.Screen name="CadUsuario" component={CadUsuario} /> 
            <Stack.Screen name="Login" component={Login} /> 
            <Stack.Screen name="NovoPet" component={NovoPet} /> 
            <Stack.Screen name="Home" component={AuthRoutes} /> 
            <Stack.Screen name="Usuario" component={Usuario} /> 
            <Stack.Screen name="NovaAlimentacao" component={NovaAlimentacao} /> 
        </Stack.Navigator>
    )
}

function AppRoutes(){
    return(
        <NavigationContainer>
            <StackNavigator />
        </NavigationContainer>
    )
}
export default AppRoutes;