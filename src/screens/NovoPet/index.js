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






const NovoPet = FC = () => {
    const navigation = any = useNavigation();

    const [nome, setNome] = useState("");
    const [raca, setRaca] = useState("");
    const [tipo, setTipo] = useState("");
    const [checked, setChecked] = React.useState('Cachorro');
    const [porte, setPorte] = useState('');  
    const handleOptionChange = (itemValue) => {
          setPorte(itemValue);};
    const [sucess, setSucess] = useState(false);
    const [edit, setEdit] = useState(false);
    const [loading, setLoading] = useState(false);



    async function saveData() {


        if (nome == "" || porte == "" || raca == "") {
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
                porte: porte,
                raca: raca,
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


            <View style={styles.tipo}>

                    
            <RadioButton
            value="Cachorro" 
            status={ checked === 'Cachorro' ? 'checked' : 'unchecked' } 
            onPress={() => setChecked('Cachorro')} />
            <Text style={styles.radioText}>Cachorro</Text>

                
            <RadioButton
            value="Gato"
            status={ checked === 'Gato' ? 'checked' : 'unchecked' }
            onPress={() => setChecked('Gato')}/>
            <Text style={styles.radioText}>Gato</Text>
            </View>

            
                <View>
                    <Text style={styles.TitleInputs}>Nome do Pet:</Text>

                    <TextInput
                        placeholder="Nome do seu pet"
                        onChangeText={(text) => setNome(text)}
                        value={nome}
                        style={styles.TextInput}
                    />
                </View>

                <View>
                    <Text style={styles.TitleInputs}>Raça</Text>

                    <TextInput
                        placeholder="Raça do seu pet"
                        onChangeText={(text) => setRaca(text)}
                        value={raca}
                        style={styles.TextInput}

                    />
                </View>

                <View>
                    <Text style={styles.TitleInputs}>Porte:</Text>
                    <Picker
                        style={styles.pickerporte}
                        selectedValue={porte}
                        onValueChange={handleOptionChange}
                    >
                        <Picker.Item label="Pequeno" value="Pequeno" />
                        <Picker.Item label="Médio" value="Médio" />
                        <Picker.Item label="Grande" value="Grande" />
                    </Picker>
                    </View>



                <TouchableOpacity
                    style={styles.Button}
                    onPress={() => {
                        setSucess(true);
                        saveData();
                        setSucess(false);
                    }}
                >
                    <Text style={styles.ButtonText}>Salvar Cadastro</Text>
                </TouchableOpacity>

            </ScrollView>




        </View>
    );
}

export default NovoPet;