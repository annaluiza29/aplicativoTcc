import React, { useEffect, useState } from 'react';
import { styles } from './style';

import {
    SafeAreaView,
    Text,
    View,
    ScrollView,
    TouchableOpacity,
    Image,
    ActivityIndicator,
    RefreshControl,
    StatusBar,
    Alert,

} from 'react-native';

import { EvilIcons,MaterialIcons } from '@expo/vector-icons';
import Load from '../../components/Load';
import { DrawerActions, useNavigation } from '@react-navigation/core';
import api from '../../services/api';
import { AnimatedCircularProgress } from 'react-native-circular-progress';
import { useIsFocused } from '@react-navigation/native';
import AsyncStorage from '@react-native-async-storage/async-storage';



async function excluir(nome, id) {

    Alert.alert('Sair', `Você tem certeza que deseja excluir o Registro : ` + nome, [
        {
            text: 'Não',
            style: 'cancel',
        },

        {
            text: 'Sim',
            onPress: async () => {
                try {
                    const response = await api.get(`pam3etim/BD/usuarios/excluir.php?id=${id}`);

                    showMessage({
                        message: "Excluído Sucesso",
                        description: "Registro Excluído",
                        type: "info",
                        duration: 800,
                    });

                    navigation.push('Usuarios');
                } catch (error) {
                    Alert.alert('Não foi possivel excluir, tente novamente!')
                }
            }
        }
    ])
}

    



export default function Alimentacao() {
    const navigation= useNavigation();
    const isFocused = useIsFocused();

    const [dados, setDados] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    const [refreshing, setRefreshing] = useState(false);
    const [usu, setUsu] = useState('');


    async function listarDados() {

        try {
            const user = await AsyncStorage.getItem('@user');
            const res = await api.get(`pam3etim/bd/usuarios/listar-cards.php?user=${user}`);
            setDados(res.data);

        } catch (error) {
            console.log("Erro ao Listar " + error);
        } finally {
            setIsLoading(false);
            setRefreshing(false);   
        }
    }

    useEffect(() => {
        listarDados();
    }, [isFocused]);

    const onRefresh = () => {
        setRefreshing(true);
        listarDados();

    };


    return (
        
        <View style={{ flex: 1 }}>
            <StatusBar barStyle="light-content" />
            <View style={{ flex: 1 }}>

            <View style={styles.header}>
                    <View style={styles.containerHeader}>

                        <View style={styles.top}>
                                <Image style={styles.logo} source={require('../../assets/topAlimen.png')} />
                                <Text style={styles.title}>ALIMENTAÇÃO</Text>
                        </View>

                    </View>
                </View>
                    
                <View style={styles.boxTitle}>
                    <Text style={styles.TitleBox}>Rotina de Alimentação:</Text>
                </View>

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
                            <Text style={styles.titleInfo}>Período:</Text>
                        </View>
                            <Text style={styles.textInfo}>Hora</Text>
                        </View>

                        <View style={styles.informacoes}>
                        <View style={styles.boxUnder}>
                            <Text style={styles.titleInfo}>Quantidade de alimento:</Text>
                        </View>
                            <Text style={styles.textInfo}>quantia</Text>
                        </View>
                        </View>



                        </View>


                        
                        </View>
                        </View>
                    {/*Animais Cadastrados*/}
                    <View style={styles.containerBox}>
                    <View>
                        <View style={styles.box}>

                        <TouchableOpacity
                       style={styles.removeItem}
                       onPress={() => excluir(true)}
                    >
                    <EvilIcons name="close" size={25} color="black"/>
                    </TouchableOpacity>
                             {/*nome/tipo pet*/}
                        <View style={styles.informacoesG}>
                        <View style={styles.informacoes}>
                        <View style={styles.boxUnder}>
                            <Text style={styles.titleInfo}>Período:</Text>
                        </View>
                            <Text style={styles.textInfo}>Hora</Text>
                        </View>

                        <View style={styles.informacoes}>
                        <View style={styles.boxUnder}>
                            <Text style={styles.titleInfo}>Quantidade de alimento:</Text>
                        </View>
                            <Text style={styles.textInfo}>quantia</Text>
                        </View>
                        </View>



                        </View>


                        
                        </View>
                        </View>
                        
                    {/*Animais Cadastrados*/}
                    <View style={styles.containerBox}>

                    <View>
                        <View style={styles.box}>

                        <TouchableOpacity
                       style={styles.removeItem}
                       onPress={() => excluir(true)}
                    >
                    <EvilIcons name="close" size={25} color="black"/>
                    </TouchableOpacity>


                             {/*nome/tipo pet*/}
                        <View style={styles.informacoesG}>
                        <View style={styles.informacoes}>
                        <View style={styles.boxUnder}>
                            <Text style={styles.titleInfo}>Período:</Text>
                        </View>
                            <Text style={styles.textInfo}>Hora</Text>
                        </View>

                        <View style={styles.informacoes}>
                        <View style={styles.boxUnder}>
                            <Text style={styles.titleInfo}>Quantidade de alimento:</Text>
                        </View>
                            <Text style={styles.textInfo}>quantia</Text>
                        </View>
                        </View>



                        </View>


                        
                        </View>
                        </View>


                    </ScrollView>
                
            </View>
        </View>






    )
                    }