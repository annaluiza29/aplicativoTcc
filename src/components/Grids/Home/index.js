import { useNavigation } from '@react-navigation/native';
import React, { useState, useEffect } from 'react';
import {Image, TextInput, AsyncStorage, Modal, Alert, Linking, RefreshControl, onRefresh, refreshing, Text, ScrollView, TouchableOpacity, View } from 'react-native';
import SwipeableRow from '../../Linhas/Usuarios';
import api from '../../../services/api';
import url from '../../../services/url';
import { styles } from './styles';
import { showMessage, hideMessage } from "react-native-flash-message";
import { EvilIcons, MaterialIcons, AntDesign, Ionicons } from '@expo/vector-icons';
import * as ImagePicker from 'expo-image-picker';

const DadosProps= {
    data: {
        id: string,
        nome: string,
        tipo: string,        
        porte: string,
        raca: string,     
    }
}


cardHome = ({ data }= DadosProps) => {
   
    const [abrirModal, setAbrirModal] = useState(false);
    const navigation= any = useNavigation();

    
    async function excluir(nome, id) {a5

        Alert.alert('Sair', `Você tem certeza que deseja excluir o Registro : ` + nome, [
            {
                text: 'Não',
                style: 'cancel',
            },

            {
                text: 'Sim',
                onPress: async () => {
                    try {
                        const response = await api.get(`pam3etim/bd/usuarios/excluirPet.php?id=${id}`);

                        showMessage({
                            message: "Excluído Sucesso",
                            description: "Registro Excluído",
                            type: "info",
                            duration: 800,
                        });

                        navigation.push('Home');
                    } catch (error) {
                        Alert.alert('Não foi possivel excluir, tente novamente!')
                    }
                }
            }
        ])
    }
        
      
    return (
        <>
            {data.id === undefined && data.nome === undefined ?
               
               <Text style={{ color: '#595858', fontSize: 14, marginTop:10, alignContent:"center", textAlign:"center" }}>Nenhum Registro Encontrado!</Text>
                
                :

                <View>
                     <SwipeableRow
                        onPressWhatsapp={async () => {
                            await Linking.openURL(`http://api.whatsapp.com/send?1=pt_BR&phone=55${data.nome}`)
                        }}

                        onPressEdit={async () => {
                            navigation.push('NovoPet', { id_reg: data.id });
                        }}

                        onPressDelete={async () => {
                            excluir(data.nome, data.id);
                        }}

                      
                    >                   
                      <ScrollView
                        style={{ flex: 1 }}
                        showsVerticalScrollIndicator={false}
                        nestedScrollEnabled={true}
                        refreshControl={
                            <RefreshControl
                                refreshing={refreshing}
                                onRefresh={onRefresh}
                            />
                        }
                    >

                    {/*Animais Cadastrados*/}
                    <View style={styles.containerBox}>
                    <View>
                        <View style={styles.box}>
                        <TouchableOpacity
                    style={styles.removeItem}
                    onPress={() => excluir()}
                    >
                    <EvilIcons name="close" size={25} color="black"/>
                    </TouchableOpacity>

                            {/*nome/tipo pet*/}
                        <View style={styles.informacoesG}>
                        <View style={styles.informacoes}>
                        <View style={styles.boxUnder}>
                            <Text style={styles.titleInfo}>Nome do Pet:</Text>
                        </View>
                            <Text style={styles.textInfo}>{data.nome}</Text>
                        </View>

                        <View style={styles.informacoes}>
                        <View style={styles.boxUnder}>
                            <Text style={styles.titleInfo}>Tipo de Pet:</Text>
                        </View>
                            <Text style={styles.textInfo}>{data.tipo}</Text>
                        </View>
                        </View>

                                                        {/*porte/raca pet*/}
                        <View style={styles.informacoesG}>
                        <View style={styles.informacoes2}>
                        <View style={styles.boxUnder}>
                            <Text style={styles.titleInfo2}>Porte:</Text>
                        </View>
                            <Text style={styles.textInfo2}>{data.porte}</Text>
                        </View>

                        <View style={styles.informacoes2}>
                        <View style={styles.boxUnder}>
                            <Text style={styles.titleInfo2}>Raça:</Text>
                        </View>
                            <Text style={styles.textInfo2}>{data.raca}</Text>
                        </View>
                        </View>
                        
                        </View>
                        </View>
                        </View>
                    </ScrollView>

                        </SwipeableRow>
                   
                </View>
            }



        </>
    );
}

export default cardHome;