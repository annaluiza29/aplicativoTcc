{/*import React, { useEffect, useState } from 'react';
import { View} from 'react-native';
import { Picker } from '@react-native-picker/picker';
import api from '../../services/api'; // Importando a API configurada

export default function NovaAlimentacao() {
  const [nomes, setNomes] = useState([]);
  const [selectedNome, setSelectedNome] = useState('');

  useEffect(() => {
    const apiUrl = 'pam3etim/bd/usuarios/listarNomes.php';

    api.get(apiUrl)
      .then(response => {
        setNomes(response.data);
      })
      .catch(error => {
        console.error('Erro ao buscar nomes:', error);
      });
  }, []);

  return (
    <View>
      <Picker
        selectedValue={selectedNome}
        onValueChange={(itemValue, itemIndex) => setSelectedNome(itemValue)}
      >
        {nomes.map((nome, index) => (
          <Picker.Item key={index} label={nome} value={nome} />
        ))}
      </Picker>
    </View>
  );
} */}



import React, { useState, useEffect } from 'react';
import {ScrollView, Alert, Text, TextInput, View, TouchableOpacity, ActivityIndicator} from 'react-native';
import { Picker } from '@react-native-picker/picker';
import {useNavigation} from '@react-navigation/core';
import { Ionicons } from '@expo/vector-icons';
import { styles } from './style';
import DateTimePicker from '@react-native-community/datetimepicker';
import {showMessage} from "react-native-flash-message";
import Topo from '../topo/Topo2';
    import api from '../../services/api';
import axios from 'axios';






const NovaAlimentacao = FC = () => {
    const navigation = any = useNavigation();


    const [nome, setNome] = useState("");
    const [quantidade, setQuantidade] = useState("");
    const [periodo, setperiodo] = useState('');  
    const handleOptionChange = (itemValue) => {
          setperiodo(itemValue);};
    const handleOptionChanges = (itemValue) => {
          setNome(itemValue);};
    const [sucess, setSucess] = useState(false);
    const [loading, setLoading] = useState(false);
    const [horario, setHorario] = useState("");
    const [showTimePicker, setShowTimePicker] = useState(false);

  const handleTimeChange = (event, selectedDate) => {
    if (selectedDate) { 
      const formattedHour = selectedDate.getHours();
      const formattedMinute = selectedDate.getMinutes();
      setHorario(`${formattedHour}:${formattedMinute}`);
    }
    setShowTimePicker(false);
  };


  
    async function saveData() {


        if (nome == "" || periodo == "" || quantidade == "" || horario == "") {
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
   		        horario: horario

            }
       

            
             const res = await api.post('pam3etim/bd/usuarios/salvarAli.php', obj);

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
            navigation.push("Alimentacao")

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




    return (
        <View style={{ flex: 1 }}>
            <View style={styles.Header}>
                <Topo></Topo>

                <TouchableOpacity   
                    style={styles.BackButton}
                    onPress={() => navigation.push("Alimentacao")}
                >
                    <Ionicons name="md-arrow-back-circle-outline" size={35} color="white"/>

                </TouchableOpacity>


            </View>


            <ScrollView>

            <View>
                    <Text style={styles.TitleInputs}>Nome do pet:</Text>

                    <TextInput
                        placeholder="Digite o nome do seu pet"
                        onChangeText={(text) => setNome(text)}
                        value={nome}
                        style={styles.TextInput}

                    />
                    </View>

                <View>
                    <Text style={styles.TitleInputs}>Período:</Text>
                    <Picker
                        style={styles.pickerperiodo}
                        selectedValue={periodo}
                        onValueChange={handleOptionChange}
                    >
                        <Picker.Item label="Manhã" value="Manha" />
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

		       <View>

                <View style={styles.hora}>
                <Text style={styles.TitleInputs}>Horário:</Text>
                <TouchableOpacity onPress={() => setShowTimePicker(true)} style={styles.timePickerButton}>
                    <Text style={styles.timePickerButtonText}>Selecionar horário</Text>
                </TouchableOpacity>
                        {showTimePicker && (
                <DateTimePicker
                    value={new Date()}
                    mode="time"
                    is24Hour={true}
                    display="default"
                    onChange={handleTimeChange}

                />)}
                
                </View>

                        {horario && (
                <Text style={styles.horario}>Hora selecionada: {horario}</Text>
                )}  

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
