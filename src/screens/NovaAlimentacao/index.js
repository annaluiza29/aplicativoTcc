import React, { useEffect, useState } from 'react';
import {ScrollView, Alert, Text, TextInput, View, TouchableOpacity, ActivityIndicator} from 'react-native';
import { Picker } from '@react-native-picker/picker';
import {useNavigation} from '@react-navigation/core';
import { Ionicons } from '@expo/vector-icons';
import { styles } from './style';
import DateTimePicker from '@react-native-community/datetimepicker';
import {showMessage} from "react-native-flash-message";
import Topo from '../topo/Topo2';
import api from '../../services/api';




const NovaAlimentacao = FC = () => {
    const navigation = any = useNavigation();

  {/*  const [nome, setNome] = useState([]);
    const [id, setId] = useState([]);


    useEffect(() => {
        NomeSelec()
    },[]);


    const NomeSelec = async () => { 

            const response = await api.get(`pam3etim/BD/usuarios/listarNomes.php`);


            
           setNome(response.data.resultado.nome);
        
      
    const nomes =[{nomeAnimal: nome, valor: id}]


            
            setNome(response.data.resultado.map(item => item.nome));
            setId(response.data.resultado.map(item => item.id));

            console.log(nome);
            console.log(id);

       
        
            let nomeItem = nomes.map((v,k) => {
                return <Picker.Item  key={k} value={k} label={v.nomeAnimal}>
                </Picker.Item>
                
            });
        
          




        return (
<View>

   <Text>cachorrinho</Text>

        <Picker

        style={styles.pickerperiodo}
        selectedValue={nome}
        onValueChange={(itemValue, itemIndex) => setNome(itemValue)}
 
    >
        {nomeItem}

    </Picker>  
    </View>
        )
    }
        }  */}
    
    const [nome, setNome] = useState("");
    const [id, setId] = useState([]);
    const [nomes, setNomes] = useState([]);
    const [quantidade, setQuantidade] = useState("");
    const [periodo, setperiodo] = useState('');  
    const handleOptionChange = (itemValue) => {
          setperiodo(itemValue);};
    const [sucess, setSucess] = useState(false);
    const [loading, setLoading] = useState(false);
    const [horario, setHorario] = useState("");
        const [dateHorario, setDateHorario] = useState("");

    const [showTimePicker, setShowTimePicker] = useState(false);

  const handleTimeChange = (event, selectedDate) => {
    if (selectedDate) { 

      const formattedDate= selectedDate.getDate();
      const formattedHour = selectedDate.getHours();
      const formattedMinute = selectedDate.getMinutes();
      setHorario(`${formattedHour}:${formattedMinute}`);
      setDateHorario(`${formattedDate}`);
    }
    setShowTimePicker(false);
  };

  useEffect(() => {
    NomeSelec()
},[]);


const NomeSelec = async () => { 

        const response = await api.get(`pam3etim/BD/usuarios/listarNomes.php`);


        setNome(response.data.resultado.map(item => item.nome));
        setId(response.data.resultado.map(item => item.id));

     
     nomes =[{nomeAnimal: nome, valor: id}]

        console.log(nome);
   //     console.log(id);
    };
    
   
    
         let nomeItem = nomes.map((v,k) => {
             return <Picker.Item  key={k} value={k} label={v.nomeAnimal}>
            </Picker.Item>
            
        });

    
  
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

                <Text>cachorrinho</Text>

                    <Picker

                    style={styles.pickerperiodo}
                    selectedValue={nome}
                    onValueChange={(itemValue, itemIndex) => setNome(itemValue)}

                >
                    {nomeItem}

                </Picker>  
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