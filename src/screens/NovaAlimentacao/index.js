import React, { useState, useEffect } from 'react';
import { ScrollView, Platform, Alert, Text, TextInput, View, TouchableOpacity, ActivityIndicator, Input } from 'react-native';
import { Picker } from '@react-native-picker/picker';
import { RouteProp, useNavigation, useRoute } from '@react-navigation/core';
import { AntDesign, Ionicons } from '@expo/vector-icons';
import { styles } from './style';
import { Success } from '../../lotties/Success';
//import { TextInputMask } from 'react-native-masked-text';
//import DateTimePicker from '@react-native-community/datetimepicker';
//import { format } from 'date-fns';
import { showMessage, hideMessage } from "react-native-flash-message";
import { RadioButton } from 'react-native-paper';
import Topo from '../topo/Topo2';



import AsyncStorage from '@react-native-async-storage/async-storage';

import api from '../../services/api';






const NovaAlimentacao = FC = () => {
    const navigation = any = useNavigation();

    const [nome, setNome] = useState("");
    const [quantidade, setQuantidade] = useState("");
    const [tipo, setTipo] = useState("");
    const [checked, setChecked] = React.useState('Cachorro');
    const [periodo, setperiodo] = useState('');  
    const handleOptionChange = (itemValue) => {
          setperiodo(itemValue);};
    const [sucess, setSucess] = useState(false);
    const [edit, setEdit] = useState(false);
    const [loading, setLoading] = useState(false);



    async function saveData() {


        if (nome == "" || periodo == "" || quantidade == "") {
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
                periodo: periodo,
                quantidade: quantidade,
                tipo: tipo,   

            }
       

            
             const res = await api.post('pam3etim/bd/usuarios/salvar.php', obj);

            if (res.data.sucesso === false) {
                showMessage({
                    message: "Erro ao Salvar",
                    description: res.data.mensagem,
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
            navigation.push("Home")

        } catch (error) {
            Alert.alert("Ops", "Alguma coisa deu errado, tente novamente." );
            setSucess(false);
        }
    }




    if (loading === true) {
        return (
            <View style={{ flex: 1, backgroundColor: '#fff' }}>
                <ActivityIndicator style={{ marginTop: 100 }} color="#fff" size="large" />
            </View>
        )
    }

    if (sucess) {
        return <Success />
    }



    return (
        <View style={{ flex: 1 }}>
            <View style={styles.Header}>
                <Topo></Topo>

                <TouchableOpacity
                    style={styles.BackButton}
                    onPress={() => navigation.push("Home")}
                >
                    <Ionicons name="md-arrow-back-circle-outline" size={35} color="#484a4d" />

                </TouchableOpacity>


            </View>


            <ScrollView>

                <View>
                    <Text style={styles.TitleInputs}>Nome do Pet:</Text>

                    <Picker
                        style={styles.pickerperiodo}
                        selectedValue={periodo}
                        onValueChange={handleOptionChange}
                    >
                        <Picker.Item label="Manhã" value="Manhã" />
                        <Picker.Item label="Tarde" value="Tarde" />
                        <Picker.Item label="Noite" value="Noite" />
                    </Picker>                                                           
                </View>

                <View>
                    <Text style={styles.TitleInputs}>Período:</Text>
                    <Picker
                        style={styles.pickerperiodo}
                        selectedValue={periodo}
                        onValueChange={handleOptionChange}
                    >
                        <Picker.Item label="Manhã" value="Manhã" />
                        <Picker.Item label="Tarde" value="Tarde" />
                        <Picker.Item label="Noite" value="Noite" />
                    </Picker>
                    </View>

                    <View>
                    <Text style={styles.TitleInputs}>Quantidade de alimento:</Text>

                    <TextInput
                        placeholder="em gramas"
                        onChangeText={(text) => setQuantidade(text)}
                        value={quantidade}
                        style={styles.TextInput}

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
                    <Text style={styles.ButtonText}>Salvar</Text>
                </TouchableOpacity>

            </ScrollView>




        </View>
    );
}

export default NovaAlimentacao;