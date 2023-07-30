import React, { useState, useEffect } from 'react';
import {ScrollView, Platform, Alert, Picker, Text, TextInput, View, TouchableOpacity, ActivityIndicator, Input } from 'react-native';
import { RouteProp, useNavigation, useRoute } from '@react-navigation/core';
import { RectButton } from 'react-native-gesture-handler';
import { AntDesign, Ionicons } from '@expo/vector-icons';
import { styles } from './style';
import { Success } from '../../lotties/Success';
//import { TextInputMask } from 'react-native-masked-text';
//import DateTimePicker from '@react-native-community/datetimepicker';
//import { format } from 'date-fns';
import { showMessage, hideMessage } from "react-native-flash-message";
import Topo from '../topo/TopoCadUsu';


import AsyncStorage from '@react-native-async-storage/async-storage';

import api from '../../services/api';




const CadUsuario= FC= () => {
    const navigation = any = useNavigation();


    const [nome, setNome] = useState("");   
    const [email, setEmail] = useState("");   
    const [senha, setSenha] = useState("");

       
    const [sucess, setSucess] = useState(false);
    const [edit, setEdit] = useState(false);
    const [loading, setLoading] = useState(false);

    
   
    async function saveData() {            
       
              
           if (nome == "" || email == "" || senha == "") {
            showMessage({
                message: "Erro ao Salvar",
                description: 'Preencha os Campos Obrigatórios!',
                type: "warning",
            });
            return;
        }

        try {
            const obj = {
                nome: nome,               
                email: email,
                senha: senha,

                
            }
     
            const res = await api.post('pam3etim/bd/usuarios/salvarUsu.php', obj);

            if (res.data.sucesso === false) {
                showMessage({
                    message: "Erro ao Salvar",
                    description: res.data.message,
                    type: "warning",
                    duration: 3000,
                });

                return;
            }

            setSucess(true);
            showMessage({
                message: "Salvo com Sucesso",
                description: "Registro Salvo",
                type: "success",
                duration: 800,
            });
            navigation.push("NovoUsuario")

        } catch (error) {
            Alert.alert("Ops", "Alguma coisa deu errado, tente novamente.");
            setSucess(false);
        }
    }

    

    if (loading === true) {
        return (
            <View style={{ flex: 1, backgroundColor: '#fff' }}>
                <ActivityIndicator style={{ marginTop: 100 }} color="#000" size="large" />
            </View>
        )
    }

    if (sucess) {
        return <Success />
    }
    

    return (
        <View style={styles.container}>
            <View style={styles.Header}>
                <Topo></Topo>


            </View>
            
            <View>
                <Text style={styles.lateral3}></Text>
                <Text style={styles.lateral4}></Text>
            </View>
        
            <View style={styles.decoration}>
                <Text style={styles.lateral}></Text>
                <Text style={styles.lateral2}></Text>
            </View>

            <View style={styles.form}> 

            <View>
                <Text style={styles.title}>CADASTRE-SE</Text>
            </View>


            <View>
                <TextInput
                    placeholder="Insira seu nome"
                    onChangeText={(text) => setNome(text)}
                    value={nome}
                    style={[styles.TextInput, styles.elevation]}
                />
            </View>


            <View>

                <TextInput
                    placeholder="Insira seu email"
                    onChangeText={(text) => setEmail(text)}
                    value={email}
                    style={[styles.TextInput, styles.elevation]}
                   
                />
            </View>

            
            <View>

                <TextInput
                  secureTextEntry={true}
                    placeholder="Insira sua senha"
                    onChangeText={(text) => setSenha(text)}
                    value={senha}
                    style={[styles.TextInput, styles.elevation]}
                   
                />
            </View>

           
                <TouchableOpacity
                    style={styles.Button}
                    onPress={() => {

                        setSucess(true);
                        saveData();
                        setSucess(false);
                    }}
                >
                    <Text style={[styles.ButtonText, styles.elevation]}>Salvar Cadastro</Text>
                </TouchableOpacity>

            <View>
                <Text style={styles.text}>ou</Text>
            </View>
            <TouchableOpacity
                    style={styles.Button2}
                    onPress={() => {
                        navigation.navigate("Login");
                    }}
                >
                    <Text style={[styles.ButtonText2]}>Já tenho cadastro</Text>
                </TouchableOpacity>

                </View> 

                </View> 


    );
}

export default CadUsuario;