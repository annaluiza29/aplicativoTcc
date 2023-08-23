import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NavigationContainer } from '@react-navigation/native';

import Login from '../screens/Login';
//import { Splash } from '../lotties/Splash';
import AuthRoutes from './tab.routes';
import Usuario from '../screens/Usuario';
import NovoUsuario from '../screens/NovoUsuario';
import Alimentacao from '../screens/Alimentacao';
import NovaAlimentacao from '../screens/NovaAlimentacao';
import CadUsuario from '../screens/CadUsuario';
import NovoPet from '../screens/NovoPet';


const Stack = createNativeStackNavigator(); 

function StackNavigator(){
    return (
        <Stack.Navigator screenOptions={{headerShown: false}}>
            
          <Stack.Screen name="CadUsuario" component={CadUsuario} /> 
          <Stack.Screen name="Login" component={Login} /> 
          <Stack.Screen name="Home" component={AuthRoutes} />      
          <Stack.Screen name="NovoPet" component={NovoPet} />      
          <Stack.Screen name="Usuario" component={Usuario} />  
          <Stack.Screen name="NovoUsuario" component={NovoUsuario} /> 
          <Stack.Screen name="Alimentacao" component={Alimentacao} /> 
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