import { useNavigation } from '@react-navigation/native';
import React, { useState, useEffect } from 'react';
import {Image, ScrollView,RefreshControl, StatusBar, TextInput, AsyncStorage, Modal, Alert, Linking, Text, TouchableOpacity, View } from 'react-native';
import SwipeableRow from '../../Linhas/Usuarios';
import api from '../../../services/api';
import url from '../../../services/url';
import { styles } from './styles';
import { showMessage, hideMessage } from "react-native-flash-message";
import { AnimatedCircularProgress } from 'react-native-circular-progress';
import { EvilIcons, MaterialIcons, AntDesign, Ionicons } from '@expo/vector-icons';

const DadosProps= {
    data: {
        id: string,
        nome: string,
        raca: string,        
        porte: string,
        tipo:string,
    }
}


CardUsuarios = ({ data }= DadosProps) => {
   
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
                            navigation.push('NovoUsuario', { id_reg: data.id });
                        }}

                        onPressDelete={async () => {
                            excluir(data.nome, data.id);
                        }}

                      
                    >                   

                <ScrollView
                        style={{ flex: 1 }}
                        showsVerticalScrollIndicator={false}
                        nestedScrollEnabled={true}
                    >

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
                        </SwipeableRow>
                   
                </View>
            }



<Modal 
        visible={abrirModal}
        animationType={'fade'}
        transparent={true}
        onRequestClose={() => {
          setAbrirModal(!abrirModal)
        }}
      >
          <View style={styles.centralizarModal}>
         <View style={styles.CardContainerModal}>
         <TouchableOpacity
              style={styles.removeItem}
              onPress={() => setAbrirModal(false)}
            >
              <EvilIcons name="close" size={25} color="black" />
            </TouchableOpacity>
         <Text style={styles.Cliente}>{data.nome} - {data.tipo}</Text>
                

                <View style={styles.Section}>
                    <MaterialIcons style={styles.Icon} name="people-outline" size={22} color="#c1c1c1" />
                                      
                </View>              
            

               
                <View style={styles.Section}>
                    <MaterialIcons style={styles.Icon} name="mail" size={22} color="#c1c1c1" />
                    <Text style={styles.Entrada}>raca: {data.raca}</Text>
                    <Text style={styles.Entrada}>porte: {data.porte}</Text>
                </View>              


                 <TouchableOpacity onPress={() => Linking.openURL(url + 'painel/images/perfil/' + data.foto)}>
                            {(() => {
                                if (data.foto != 'sem-foto.jpg' && data.foto != '' && data.foto != null) {

                                    return (
                                        <View style={styles.viewImg}>
                                            <Image style={styles.ImagemModal} source={{ uri: (url + 'painel/images/perfil/' + data.foto) }} />
                                            <Text style={styles.textoAbrir}>(Clique para Abrir)</Text>
                                        </View>
                                    )

                                }

                            })()}
                        </TouchableOpacity>

                                                

             </View>
             </View>
          </Modal>



        </>
    );
}

export default CardUsuarios;