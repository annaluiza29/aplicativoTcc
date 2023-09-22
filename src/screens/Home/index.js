import { useNavigation, DrawerActions } from "@react-navigation/core";
import React, { useEffect, useState } from "react";
import {styles} from './style';
import {ScrollView, Text, ActivityIndicator, FlatList, Image, TextInput, TouchableOpacity, View, Dimensions, Alert, StatusBar } from 'react-native';

import Header from '../../components/Header';
import { Ionicons, MaterialIcons } from '@expo/vector-icons';
import api from '../../services/api';
import Grid from '../../components/Grids/Home';

export default function Home() {

  const navigation = useNavigation();

    const [lista, setLista] = useState([]);
    const [loading, setLoading] = useState(false);
    const [page, setPage] = useState(1);
    const [totalItems, setTotalItems] = useState(0);
    const [onEndReachedCalledDuringMomentum, setMT] = useState(true);


    async function loadData() {        
      try {
          const response = await api.get(`pam3etim/bd/usuarios/listar.php?pagina=${page}&limite=10`);

          if(lista.length >= response.data.totalItems) return;

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
 





 useEffect(() => {
  loadData();
}, [page, totalItems, lista]);

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
                        
                    />
                   
          </View>

                <View style={styles.containerFloat}>
                    <TouchableOpacity
                        style={styles.CartButton}
                        onPress={() => navigation.push("NovoPet")}
                    >
                        <Ionicons name="add-outline" size={35} color="#fff" />
                    </TouchableOpacity>
                </View>


      </View>

    </View>
  )
}