import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NavigationContainer } from '@react-navigation/native';

//import { Splash } from '../lotties/Splash';
import CadUsuario from '../screens/CadUsuario';
import Login from '../screens/Login';
import AuthRoutes from './tab.routes';
import NovoUsuario from '../screens/NovoUsuario';


const Stack = createNativeStackNavigator();


function StackNavigator(){
    return (
        <Stack.Navigator>
            <Stack.Screen name="CadUsuario" component={CadUsuario} /> 
            <Stack.Screen name="Login" component={Login} /> 
            <Stack.Screen name="NovoUsuario" component={NovoUsuario} /> 
            <Stack.Screen name="Home" component={AuthRoutes} /> 
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