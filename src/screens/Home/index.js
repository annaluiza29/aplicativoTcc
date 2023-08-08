import React, { useEffect, useState } from 'react';
import { styles } from './style';

import {SafeAreaView, Text, View, ScrollView, TouchableOpacity, Image, ActivityIndicator, RefreshControl, StatusBar, Alert} from 'react-native';

import { EvilIcons,MaterialIcons, Ionicons } from '@expo/vector-icons';
import Load from '../../components/Load';
import { DrawerActions, useNavigation } from '@react-navigation/core';
import api from '../../services/api';
import { AnimatedCircularProgress } from 'react-native-circular-progress';

import { useIsFocused } from '@react-navigation/native';



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

                    navigation.push('Home');
                } catch (error) {
                    Alert.alert('Não foi possivel excluir, tente novamente!')
                }
            }
        }
    ])
}

    



export default function Home() {
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

                        <TouchableOpacity
                            style={styles.menu}
                            onPress={() => navigation.dispatch(DrawerActions.openDrawer())}
                        >
                            <MaterialIcons name="menu" size={35} color="white" style={styles.icon}/>
                        </TouchableOpacity>

                        <View style={styles.top}>
                                <Image style={styles.logo} source={require('../../assets/topHome.png')} />
                                <Text style={styles.title}>INFORMAÇÕES</Text>
                        </View>

                    </View>
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
                            <Text style={styles.titleInfo}>Nome do Pet:</Text>
                        </View>
                            <Text style={styles.textInfo}>Auau</Text>
                        </View>

                        <View style={styles.informacoes}>
                        <View style={styles.boxUnder}>
                            <Text style={styles.titleInfo}>Tipo de Pet:</Text>
                        </View>
                            <Text style={styles.textInfo}>cathioro</Text>
                        </View>
                        </View>

                                {/*porte/raca pet*/}
                        <View style={styles.informacoesG}>
                        <View style={styles.informacoes2}>
                        <View style={styles.boxUnder}>
                            <Text style={styles.titleInfo2}>Porte:</Text>
                        </View>
                            <Text style={styles.textInfo2}>Cachorro</Text>
                        </View>

                        <View style={styles.informacoes2}>
                        <View style={styles.boxUnder}>
                            <Text style={styles.titleInfo2}>Raça:</Text>
                        </View>
                            <Text style={styles.textInfo2}>Nome</Text>
                        </View>
                        </View>




                        {/*Quantidade ração no alimentador*/}                       
                        <View style={styles.circleProgressView}>
                        <AnimatedCircularProgress
                                size={70}
                                width={7}
                                fill={60}
                                tintColor="green"
                                backgroundColor="#e0e0e0"
                                lineCap={"round"}
                            >
                                {
                                    (fill) => (
                                        <Text style={styles.numberInside}>60%</Text>
                                    )
                                }
                            </AnimatedCircularProgress>

                            <View style={styles.textProgressContainer}>
                                <Text style={styles.textProgressTitle}>Comida disponível no  alimentador</Text>

                                </View>
                        </View>

                        {/*Quantidade ração no pote*/}
                    <View style={styles.circleProgressView}>
                        <AnimatedCircularProgress
                                size={70}
                                width={7}
                                fill={70}
                                tintColor="red"
                                backgroundColor="#e0e0e0"
                                lineCap={"round"}
                            >
                                {
                                    (fill) => (
                                        <Text style={styles.numberInside}>70%</Text>
                                    )
                                }
                            </AnimatedCircularProgress>

                            <View style={styles.textProgressContainer}>
                                <Text style={styles.textProgressTitle}>Comida disponível na bandeja do Pet</Text>

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
                            <Text style={styles.titleInfo}>Nome do Pet:</Text>
                        </View>
                            <Text style={styles.textInfo}>Auau</Text>
                        </View>

                        <View style={styles.informacoes}>
                        <View style={styles.boxUnder}>
                            <Text style={styles.titleInfo}>Tipo de Pet:</Text>
                        </View>
                            <Text style={styles.textInfo}>cathioro</Text>
                        </View>
                        </View>

                                {/*porte/raca pet*/}
                        <View style={styles.informacoesG}>
                        <View style={styles.informacoes2}>
                        <View style={styles.boxUnder}>
                            <Text style={styles.titleInfo2}>Porte:</Text>
                        </View>
                            <Text style={styles.textInfo2}>Cachorro</Text>
                        </View>

                        <View style={styles.informacoes2}>
                        <View style={styles.boxUnder}>
                            <Text style={styles.titleInfo2}>Raça:</Text>
                        </View>
                            <Text style={styles.textInfo2}>Nome</Text>
                        </View>
                        </View>




                        {/*Quantidade ração no alimentador*/}                       
                        <View style={styles.circleProgressView}>
                        <AnimatedCircularProgress
                                size={70}
                                width={7}
                                fill={60}
                                tintColor="green"
                                backgroundColor="#e0e0e0"
                                lineCap={"round"}
                            >
                                {
                                    (fill) => (
                                        <Text style={styles.numberInside}>60%</Text>
                                    )
                                }
                            </AnimatedCircularProgress>

                            <View style={styles.textProgressContainer}>
                                <Text style={styles.textProgressTitle}>Comida disponível no  alimentador</Text>

                                </View>
                        </View>

                        {/*Quantidade ração no pote*/}
                    <View style={styles.circleProgressView}>
                        <AnimatedCircularProgress
                                size={70}
                                width={7}
                                fill={70}
                                tintColor="red"
                                backgroundColor="#e0e0e0"
                                lineCap={"round"}
                            >
                                {
                                    (fill) => (
                                        <Text style={styles.numberInside}>70%</Text>
                                    )
                                }
                            </AnimatedCircularProgress>

                            <View style={styles.textProgressContainer}>
                                <Text style={styles.textProgressTitle}>Comida disponível na bandeja do Pet</Text>

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
                            <Text style={styles.titleInfo}>Nome do Pet:</Text>
                        </View>
                            <Text style={styles.textInfo}>Auau</Text>
                        </View>

                        <View style={styles.informacoes}>
                        <View style={styles.boxUnder}>
                            <Text style={styles.titleInfo}>Tipo de Pet:</Text>
                        </View>
                            <Text style={styles.textInfo}>cathioro</Text>
                        </View>
                        </View>

                                {/*porte/raca pet*/}
                        <View style={styles.informacoesG}>
                        <View style={styles.informacoes2}>
                        <View style={styles.boxUnder}>
                            <Text style={styles.titleInfo2}>Porte:</Text>
                        </View>
                            <Text style={styles.textInfo2}>Cachorro</Text>
                        </View>

                        <View style={styles.informacoes2}>
                        <View style={styles.boxUnder}>
                            <Text style={styles.titleInfo2}></Text>
                        </View>
                            <Text style={styles.textInfo2}>Nome</Text>
                        </View>
                        </View>




                        {/*Quantidade ração no alimentador*/}                       
                        <View style={styles.circleProgressView}>
                        <AnimatedCircularProgress
                                size={70}
                                width={7}
                                fill={60}
                                tintColor="green"
                                backgroundColor="#e0e0e0"
                                lineCap={"round"}
                            >
                                {
                                    (fill) => (
                                        <Text style={styles.numberInside}>60%</Text>
                                    )
                                }
                            </AnimatedCircularProgress>

                            <View style={styles.textProgressContainer}>
                                <Text style={styles.textProgressTitle}>Comida disponível no  alimentador</Text>

                                </View>
                        </View>

                        {/*Quantidade ração no pote*/}
                    <View style={styles.circleProgressView}>
                        <AnimatedCircularProgress
                                size={70}
                                width={7}
                                fill={70}
                                tintColor="red"
                                backgroundColor="#e0e0e0"
                                lineCap={"round"}
                            >
                                {
                                    (fill) => (
                                        <Text style={styles.numberInside}>70%</Text>
                                    )
                                }
                            </AnimatedCircularProgress>

                            <View style={styles.textProgressContainer}>
                                <Text style={styles.textProgressTitle}>Comida disponível na bandeja do Pet</Text>

                                </View>
                        </View>

                        </View>


                        
                        </View>
                        </View>

                    </ScrollView>

                    <View style={styles.containerFloat}>
                    <TouchableOpacity
                        style={styles.CartButton}
                        onPress={() => navigation.push("NovoPet", { id: '0' })}
                    >
                        <Ionicons name="add-outline" size={35} color="#fff" />
                    </TouchableOpacity>
                </View>
                
            </View>
        </View>






    )
                    }