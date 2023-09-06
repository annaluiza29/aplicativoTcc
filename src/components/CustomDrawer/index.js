import React, {useState} from 'react';
import { Alert, AsyncStorage, Image, ScrollView, Text, TouchableOpacity, View, Switch } from 'react-native';
import { MaterialIcons, Entypo } from '@expo/vector-icons';
import { styles } from './styles';
import { DrawerActions, useNavigation } from '@react-navigation/core';
import Botao from '../../screens/botao'

const CustomDrawer= FC = () => {
    const navigation=  any= useNavigation();



    return (
        <View style={{ flex: 1, backgroundColor: '#fff' }}>
            <Image style={styles.logo} source={require('../../assets/logo2.png')} />

            <View style={{ width: '90%', backgroundColor: '#c1c1c1', height: 0.5, alignSelf: 'center', marginBottom: 5, marginTop: 20 }}></View>

            <ScrollView
                style={styles.container}
            >

                <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
                            <Botao/> 
                 </View>

       
            </ScrollView>

            <View style={styles.footer}>
                <TouchableOpacity
                    onPress={() => logout()}
                    style={styles.Sair}
                >
                    <MaterialIcons name="subdirectory-arrow-left" size={25} color="gray" />
                    <Text style={styles.SairText}>Sair da conta</Text>
                </TouchableOpacity>
            </View>
        </View>
    );
}

export default CustomDrawer;