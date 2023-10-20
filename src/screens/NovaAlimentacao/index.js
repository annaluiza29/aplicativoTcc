import React, { useEffect, useState } from 'react';
import { ScrollView, Alert, Text, TextInput, View, TouchableOpacity, ActivityIndicator } from 'react-native';
import { Picker } from '@react-native-picker/picker';
import { useNavigation } from '@react-navigation/core';
import { Ionicons } from '@expo/vector-icons';
import { styles } from './style';
import DateTimePicker from '@react-native-community/datetimepicker';
import { showMessage } from "react-native-flash-message";
import Topo from '../topo/Topo2';
import api from '../../services/api';

const NovaAlimentacao = FC = () => {
    const navigation = any = useNavigation();

    const [nome, setNome] = useState(''); // Estado para o valor selecionado no Picker
    const [nomes, setNomes] = useState([]); // Estado para armazenar os dados dos nomes
    const [quantidade, setQuantidade] = useState("");
    const [sucess, setSucess] = useState(false);
    const [loading, setLoading] = useState(false);
    const [horario, setHorario] = useState("");
    const [horarioPartt, setHorarioPart] = useState("");
    const [showTimePicker, setShowTimePicker] = useState(false);

    //Seleção de horários
    const handleTimeChange = (event, selectedDate) => {
        setShowTimePicker(Platform.OS === 'ios');
        if (selectedDate) {
            const formattedHour = selectedDate.getHours();
            const formattedMinute = selectedDate.getMinutes();
            const formattedSecond = selectedDate.getSeconds();
            const formattedDay = selectedDate.getDate();
            const formattedMonth = selectedDate.getMonth() + 1; // Adicione 1 ao mês, pois os meses começam em zero.
            const formattedYear = selectedDate.getFullYear();
            console.log(`${formattedDay}/${formattedMonth}/${formattedYear} ${formattedHour}:${formattedMinute}:${formattedSecond} `);
            setHorario(`${formattedDay}/${formattedMonth}/${formattedYear} ${formattedHour}:${formattedMinute}:${formattedSecond} `);
            setHorarioPart(`${formattedHour}:${formattedMinute}:${formattedSecond}`);
        }
        setShowTimePicker(false);
    };

    //Array da seleção de nomes
    useEffect(() => {
        NomeSelec();
    }, []);

    const NomeSelec = async () => {
        try {
            const response = await api.get(`pam3etim/BD/usuarios/listarNomes.php`);
            const data = response.data.resultado;
            const nomesArray = data.map((item) => ({
                nomeAnimal: item.nome,
                valor: item.id,
            }));
            console.log(nome)


            setNomes(nomesArray);
        } catch (error) {
            console.error(error);
        }
    };

    const nomeItems = nomes.map((item, index) => (
        <Picker.Item key={index} value={item.nomeAnimal} label={item.nomeAnimal} />
    ));


    //Salvar a alimentação
    async function saveData() {


        if (nome == "" || quantidade == "" || horario == "") {
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
            Alert.alert("Ops", "Alguma coisa deu errado, tente novamente.");
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
                    <Ionicons name="md-arrow-back-circle-outline" size={35} color="white" />

                </TouchableOpacity>
            </View>


            <ScrollView>

                {/*Nome*/}
                <View style={styles.Nome}>
                    <Text style={styles.TitleInputs}>Nome:</Text>
                    <Picker
                        style={styles.pickerNome}
                        selectedValue={nome}
                        onValueChange={(itemValue, itemIndex) => setNome(itemValue)}
                    >
                        {nomeItems}
                    </Picker>
                </View>

                {/*Quantidade*/}
                <View style={styles.box}>
                    <Text style={styles.TitleInputs}>Quantidade de alimento:</Text>

                    <TextInput
                        placeholder="em gramas"
                        onChangeText={(text) => setQuantidade(text)}
                        value={quantidade}
                        style={styles.TextInput}

                    />
                </View>

                {/*Horário*/}
                <View style={styles.box}>

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

                    {horarioPartt && (
                        <Text style={styles.horario}>Hora selecionada: {horarioPartt}</Text>
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
