import { useNavigation } from '@react-navigation/native';
import React from 'react';
import { ScrollView, Alert, Linking, Text, TouchableOpacity, View } from 'react-native';
import SwipeableRow from '../../Linhas/Usuarios';
import api from '../../../services/api';
import { styles } from './styles';
import { showMessage } from "react-native-flash-message";
import {EvilIcons} from '@expo/vector-icons';

const DadosProps= {
    data: {
        id: string,
        nome: string,
        horario: string,        
        periodo: string,
        quantidade:string,
    }
}


CardAlimentacao = ({ data }= DadosProps) => {
   
    const navigation= any = useNavigation();

    
    async function excluir(nome, id) {

        Alert.alert('Sair', `Deseja excluir essa alimentação? ` , [
            {
                text: 'Não',
                style: 'cancel',
            },

            {
                text: 'Sim',
                onPress: async () => {
                    try {
                        const response = await api.get(`pam3etim/bd/usuarios/excluir.php?id=${id}`);

                        showMessage({
                            message: "Excluído Sucesso",
                            description: "Registro Excluído",
                            type: "info",
                            duration: 800,
                        });

                        navigation.push('Alimentacao');
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

                                  
            <View>
               <Text style={styles.name}>{data.nome}</Text>
           </View>

                    <ScrollView
                        style={{ flex: 1 }}
                        showsVerticalScrollIndicator={false}
                        nestedScrollEnabled={true}
                    >


                    {/*Animais Cadastrados*/}
                    <View style={styles.containerBox}>
                    <View>
                        <View style={styles.box}>
                        <TouchableOpacity
                       style={styles.removeItem}
                       onPress={() => excluir(data.nome, data.id)}
                    >
                    <EvilIcons name="close" size={25} color="black"/>
                    </TouchableOpacity>

                             {/*nome/tipo pet*/}
                        <View style={styles.informacoesG}>
                        <View style={styles.informacoes}>
                        <View style={styles.boxUnder}>
                            <Text style={styles.titleInfo}>{data.periodo}:</Text>
                        </View>
                            <Text style={styles.textInfo}>{data.horario}</Text>
                        </View>

                        <View style={styles.informacoes}>
                        <View style={styles.boxUnder}>
                            <Text style={styles.titleInfo}>Quantidade de alimento:</Text>
                        </View>
                            <Text style={styles.textInfo}>{data.quantidade}gr</Text>
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

export default CardAlimentacao;