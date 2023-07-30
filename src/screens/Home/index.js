import React, { useEffect, useState } from 'react';
import { styles } from './style';

import {SafeAreaView, Text, View, ScrollView, TouchableOpacity, Image, ActivityIndicator, RefreshControl, Dimensions, FlatList, StatusBar, Alert} from 'react-native';

import { EvilIcons,MaterialIcons, Ionicons } from '@expo/vector-icons';
import Load from '../../components/Load';
import { DrawerActions, useNavigation } from '@react-navigation/core';
import api from '../../services/api';
import Grid from '../../components/Grids/Usuarios';

import { useIsFocused } from '@react-navigation/native';





    



export default function Home() {
    const navigation= useNavigation();
    const isFocused = useIsFocused();

    const [dados, setDados] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    const [refreshing, setRefreshing] = useState(false);
    const [usu, setUsu] = useState('');

        const [lista, setLista] = useState([]);
    const [loading, setLoading] = useState(false);
    const [page, setPage] = useState(1);
    const [onEndReachedCalledDuringMomentum, setMT] = useState(true);


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



    async function loadData() {        
        try {
            const response = await api.get(`pam3etim/bd/usuarios/listar.php?pagina=${page}&limite=10`);
  
  
            if (loading === true) return;
      
            setLoading(true);
      
            setLista([...lista, ...response.data.resultado]);
            setPage(page + 1);
          } catch (error) {
            console.log(error)
          }
    }
  
  
    const renderItem = function ({ item }) {
      return (
          <Grid
              data={item}
          />
      )
  }

  function Footer() {
    if (!load) return null;

    return (
        <View style={styles.loading}>
            <ActivityIndicator size={25} color="#fff" />
        </View>
    )
}


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


                <View style={{ flex: 1, height: Dimensions.get('window').height + 30, }}>
               
               <FlatList
                   data={lista}
                   renderItem={renderItem}
                   keyExtractor={item => String(item.id)}
                   onEndReachedThreshold={0.1}
                   removeClippedSubviews
                   initialNumToRender={10}
                   onEndReached={(distanceFromEnd) => {
                     if (!onEndReachedCalledDuringMomentum) {
                       loadData().then(() => setLoading(false));
                       setMT(true);
                     }
                   }}
                   ListFooterComponent={(distanceFromEnd) => {
                     if (!onEndReachedCalledDuringMomentum) {
                       return <Footer load={loading} />
                     } else {
                       return <View></View>
                     }
                   }}
                   onMomentumScrollBegin={() => setMT(false)}
                   windowSize={10}
                   getItemLayout={(data, index) => (
                     { length: 50, offset: 50 * index, index }
                   )}
               />
              
           </View>





                    <View style={styles.containerFloat}>
                    <TouchableOpacity
                        style={styles.CartButton}
                        onPress={() => navigation.push("NovoUsuario", { id: '0' })}
                    >
                        <Ionicons name="add-outline" size={35} color="#fff" />
                    </TouchableOpacity>
                    </View>
                
            </View>
        </View>






    )
                    }